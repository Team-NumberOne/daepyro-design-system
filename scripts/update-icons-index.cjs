#!/usr/bin/env node

// src/icons 안의 *.tsx 파일들을 읽어 index.ts를 자동 생성하는 스크립트
// 규칙:
// - index.ts 자신은 제외
// - 파일명(확장자 제외)을 그대로 export 이름으로 사용

const { readdir, writeFile } = require("node:fs/promises");
const path = require("node:path");

const ICONS_DIR = path.join(process.cwd(), "src", "icons");
const INDEX_FILE = path.join(ICONS_DIR, "index.ts");

async function main() {
  try {
    const files = await readdir(ICONS_DIR);

    const iconFiles = files
      .filter((file) => file.endsWith(".tsx"))
      .filter((file) => file !== "index.ts")
      .filter((file) => !file.endsWith(".stories.tsx"));

    if (iconFiles.length === 0) {
      console.log(
        "⚠️  아이콘 컴포넌트(.tsx)를 찾지 못했습니다. index.ts는 변경하지 않습니다."
      );
      return;
    }

    // 파일명에서 확장자 제거 → 컴포넌트 이름
    const iconNames = iconFiles
      .map((file) => path.basename(file, ".tsx"))
      .sort((a, b) => a.localeCompare(b));

    const lines = iconNames.map(
      (name) => `export { ${name} } from "./${name}";`
    );

    const content = `${lines.join("\n")}\n`;

    await writeFile(INDEX_FILE, content, "utf-8");

    console.log(
      `✅ src/icons/index.ts 업데이트 완료 (${iconNames.length}개 아이콘)`
    );
  } catch (error) {
    console.error("❌ src/icons/index.ts 생성 중 오류 발생:", error);
    process.exit(1);
  }
}

main();
