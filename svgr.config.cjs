module.exports = {
  // React 컴포넌트 아이콘 모드 (기본 width/height를 아이콘 용도로 설정)
  icon: true,
  // TypeScript 컴포넌트 생성
  typescript: true,
  // 최신 JSX 런타임 사용
  jsxRuntime: "automatic",
  // SVG 색상을 currentColor로 치환해서 부모 텍스트 색상에 따라 아이콘 색이 바뀌도록
  replaceAttrValues: {
    "#000": "currentColor",
    "#000000": "currentColor",
    "#222530": "currentColor",
  },
};
