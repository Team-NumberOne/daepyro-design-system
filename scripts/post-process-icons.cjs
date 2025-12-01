#!/usr/bin/env node

const { readdir, readFile, writeFile, rename } = require("node:fs/promises");
const { join, basename, extname } = require("node:path");

const ICONS_DIR = join(process.cwd(), "src", "icons");

/**
 * 파일명을 PascalCase로 변환 (Icon 접미사 없이)
 */
function toIconName(filename) {
  const name = basename(filename, extname(filename));
  // 이미 Icon으로 끝나면 제거
  const baseName = name.endsWith("Icon") ? name.slice(0, -4) : name;
  // 하이픈, 언더스코어, 공백으로 분리하고 각 단어를 PascalCase로 변환
  const pascalCase = baseName
    .split(/[-_\s]+/)
    .map((word) => {
      // 첫 글자는 대문자, 나머지는 원래 대소문자 유지 (이미 대문자가 있으면 유지)
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
  return pascalCase;
}

/**
 * svgr가 생성한 파일에서 SVG JSX 추출
 */
function extractSVGJSX(content, isLogo = false) {
  // svgr 기본 형식: const SvgXxx = (props) => (<svg>...</svg>);
  // 또는 export default 형태
  const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);
  if (svgMatch) {
    let svg = svgMatch[0];

    // viewBox 추출
    const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
    const originalViewBox = viewBoxMatch ? viewBoxMatch[1] : null;
    const originalWidthMatch = svg.match(/width="([^"]+)"/);
    const originalHeightMatch = svg.match(/height="([^"]+)"/);
    const originalWidth = originalWidthMatch ? originalWidthMatch[1] : null;
    const originalHeight = originalHeightMatch ? originalHeightMatch[1] : null;

    // aria 속성 제거 (나중에 추가)
    svg = svg.replace(/\s*aria-label="[^"]*"/g, "");
    svg = svg.replace(/\s*aria-hidden="[^"]*"/g, "");

    if (isLogo) {
      // logo는 원본 크기 유지
      // viewBox가 없으면 width, height로부터 생성
      if (!originalViewBox && originalWidth && originalHeight) {
        svg = svg.replace(
          /<svg/,
          `<svg viewBox="0 0 ${originalWidth} ${originalHeight}"`
        );
      }
      // width, height는 원본 유지 (숫자만 추출)
      if (originalWidth && originalHeight) {
        const widthNum = parseFloat(originalWidth);
        const heightNum = parseFloat(originalHeight);
        svg = svg.replace(
          /width="[^"]*"/,
          `width={size * ${widthNum / heightNum}}`
        );
        svg = svg.replace(/height="[^"]*"/, "height={size}");
      }
    } else {
      // 일반 아이콘은 24x24로 강제
      svg = svg.replace(/width="[^"]*"/, "width={size}");
      svg = svg.replace(/height="[^"]*"/, "height={size}");
      if (!originalViewBox) {
        svg = svg.replace(/<svg/, '<svg viewBox="0 0 24 24"');
      } else {
        // viewBox가 있으면 24x24로 변경
        svg = svg.replace(/viewBox="[^"]+"/, 'viewBox="0 0 24 24"');
      }
    }

    return { svg, originalViewBox, originalWidth, originalHeight };
  }
  return null;
}

/**
 * 원본 SVG 파일에서 크기 정보 추출
 */
async function getOriginalSvgInfo(componentName) {
  const SVGS_DIR = join(process.cwd(), "assets", "svgs");
  // 파일명 매칭 (대소문자 무시)
  const svgFiles = await readdir(SVGS_DIR).catch(() => []);
  const matchingFile = svgFiles.find(
    (file) =>
      file.toLowerCase().replace(/\.svg$/, "") === componentName.toLowerCase()
  );

  if (matchingFile) {
    const svgPath = join(SVGS_DIR, matchingFile);
    const svgContent = await readFile(svgPath, "utf-8");
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
    const widthMatch = svgContent.match(/width="([^"]+)"/);
    const heightMatch = svgContent.match(/height="([^"]+)"/);

    return {
      viewBox: viewBoxMatch ? viewBoxMatch[1] : null,
      width: widthMatch ? widthMatch[1] : null,
      height: heightMatch ? heightMatch[1] : null,
    };
  }
  return null;
}

/**
 * 생성된 아이콘 컴포넌트를 PlusIcon 스타일로 변환
 */
async function postProcessIcon(filePath, componentName) {
  const content = await readFile(filePath, "utf-8");

  // logo 파일인지 확인 (정확히 "Logo"만 매칭)
  const isLogo = componentName === "Logo";

  // SVG JSX 추출
  const svgData = extractSVGJSX(content, isLogo);
  if (!svgData) {
    console.warn(`⚠️  ${filePath}에서 SVG를 추출할 수 없습니다.`);
    return;
  }

  const {
    svg: svgJSX,
    originalViewBox,
    originalWidth,
    originalHeight,
  } = svgData;

  // SVG 내용 추출 (</svg> 태그 제거)
  const svgContent = svgJSX.replace(/<\/svg>$/, "").trim();

  if (isLogo) {
    // logo는 원본 SVG 파일에서 크기 정보 가져오기
    const originalSvgInfo = await getOriginalSvgInfo(componentName);
    const viewBox =
      originalSvgInfo?.viewBox ||
      originalViewBox ||
      (originalSvgInfo?.width && originalSvgInfo?.height
        ? `0 0 ${originalSvgInfo.width} ${originalSvgInfo.height}`
        : "0 0 81 20");
    const width = originalSvgInfo?.width || originalWidth || "81";
    const height = originalSvgInfo?.height || originalHeight || "20";
    const aspectRatio = parseFloat(width) / parseFloat(height);

    const newContent = `import type { SVGProps } from "react";

export interface ${componentName}Props extends SVGProps<SVGSVGElement> {
	/**
	 * 아이콘 높이 (가로는 비율에 맞춰 자동 조정)
	 * @default 24
	 */
	size?: number;
	/**
	 * 아이콘의 접근성 레이블
	 * 제공하지 않으면 장식용으로 처리됩니다 (aria-hidden="true")
	 */
	"aria-label"?: string;
}

export const ${componentName} = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ${componentName}Props) => {
	const aspectRatio = ${aspectRatio};
	const width = size * aspectRatio;
	const height = size;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="${viewBox}"
			fill="none"
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
			{...props}
		>
			${svgContent.replace(/<svg[^>]*>/, "").trim()}
		</svg>
	);
};

${componentName}.displayName = "${componentName}";
`;

    await writeFile(filePath, newContent, "utf-8");
  } else {
    // 일반 아이콘은 24x24
    const newContent = `import type { SVGProps } from "react";

export interface ${componentName}Props extends SVGProps<SVGSVGElement> {
	/**
	 * 아이콘 크기
	 * @default 24
	 */
	size?: number;
	/**
	 * 아이콘의 접근성 레이블
	 * 제공하지 않으면 장식용으로 처리됩니다 (aria-hidden="true")
	 */
	"aria-label"?: string;
}

export const ${componentName} = ({
	size = 24,
	"aria-label": ariaLabel,
	...props
}: ${componentName}Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
			{...props}
		>
			${svgContent.replace(/<svg[^>]*>/, "").trim()}
		</svg>
	);
};

${componentName}.displayName = "${componentName}";
`;

    await writeFile(filePath, newContent, "utf-8");
  }
}

async function main() {
  try {
    const files = await readdir(ICONS_DIR);
    // PlusIcon, 스토리 파일은 제외하고, svgr이 생성한 파일(Svg로 시작하는 컴포넌트가 있는 파일) 또는 처리되지 않은 파일 처리
    const iconFiles = files.filter(
      (file) =>
        file.endsWith(".tsx") &&
        file !== "PlusIcon.tsx" &&
        !file.endsWith(".stories.tsx") &&
        // svgr이 생성한 파일 (Svg로 시작하는 컴포넌트가 있거나 export default만 있는 파일) 또는
        // 아직 처리되지 않은 파일 처리
        (file.match(/^[a-z]/) || // 소문자로 시작하는 파일 (svgr이 생성한 파일)
          file.match(/^[A-Z][a-zA-Z0-9]*\.tsx$/)) // PascalCase 파일도 확인 (내용이 svgr 형식인지 체크)
    );

    if (iconFiles.length === 0) {
      console.log("✅ 처리할 아이콘 파일이 없습니다.");
      return;
    }

    console.log(`📦 ${iconFiles.length}개의 아이콘 파일을 후처리합니다...`);

    for (const file of iconFiles) {
      const filePath = join(ICONS_DIR, file);

      // 파일 내용을 읽어서 svgr이 생성한 파일인지 확인
      const content = await readFile(filePath, "utf-8");
      const isSvgrGenerated =
        content.includes("const Svg") ||
        content.includes("export default Svg") ||
        (content.includes("export default") &&
          !content.includes("export const"));

      // svgr이 생성한 파일이 아니고 이미 처리된 파일이면 스킵
      if (
        !isSvgrGenerated &&
        content.includes("export const") &&
        content.includes("Props")
      ) {
        console.log(`⏭️  ${file}는 이미 처리된 파일입니다. 스킵합니다.`);
        continue;
      }

      const componentName = toIconName(file);
      const newFileName = `${componentName}.tsx`;
      const newFilePath = join(ICONS_DIR, newFileName);

      // 파일명이 다르면 변경
      if (file !== newFileName) {
        await rename(filePath, newFilePath);
        console.log(`📝 ${file} -> ${newFileName}`);
      }

      // 컴포넌트 내용 변환
      await postProcessIcon(newFilePath, componentName);
      console.log(`✅ ${componentName} 후처리 완료`);
    }

    console.log(
      `\n🎉 총 ${iconFiles.length}개의 아이콘 후처리가 완료되었습니다!`
    );
  } catch (error) {
    console.error("❌ 오류 발생:", error);
    process.exit(1);
  }
}

main();
