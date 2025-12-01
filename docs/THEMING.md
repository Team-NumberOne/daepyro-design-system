# 테마 커스터마이징 가이드

이 문서는 Daepyro Design System의 테마 커스터마이징 방법을 설명합니다.

## CSS 변수 사용

현재 디자인 시스템은 vanilla-extract를 사용하여 CSS 변수를 통해 테마를 커스터마이징할 수 있습니다.

### 기본 CSS 변수

```css
/* 전역 CSS 변수 정의 */
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-unit: 8px;
  --border-radius: 4px;
}
```

### 컴포넌트 레벨 커스터마이징

```tsx
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "8px 12px",
  borderRadius: "9999px",
  border: "none",
  cursor: "pointer",
  fontWeight: 500,
  // CSS 변수 사용
  backgroundColor: "var(--color-primary, #007bff)",
  color: "var(--color-text, #ffffff)",
});
```

## 다크 모드 지원

### CSS 변수 기반 다크 모드

```css
/* 라이트 모드 */
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

/* 다크 모드 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}
```

### 클래스 기반 다크 모드

```tsx
// 다크 모드 클래스 추가
document.documentElement.classList.add("dark");

// CSS
.dark {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
}
```

## 컴포넌트 스타일 오버라이드

### className을 통한 스타일 오버라이드

```tsx
import { Button } from "@team-numberone/design-system";
import "./custom-button.css";

function CustomButton() {
  return (
    <Button className="custom-button">
      커스텀 버튼
    </Button>
  );
}
```

```css
/* custom-button.css */
.custom-button {
  background-color: #ff6b6b;
  border-radius: 8px;
  padding: 12px 24px;
}
```

### CSS-in-JS와 함께 사용

```tsx
import { Button } from "@team-numberone/design-system";
import { css } from "@emotion/react";

const customStyle = css`
  background-color: #ff6b6b;
  border-radius: 8px;
`;

function CustomButton() {
  return (
    <Button css={customStyle}>
      커스텀 버튼
    </Button>
  );
}
```

## 테마 토큰 정의

### 디자인 토큰 구조

```ts
// tokens/colors.ts
export const colors = {
  primary: {
    main: "#007bff",
    light: "#66b3ff",
    dark: "#0056b3",
  },
  secondary: {
    main: "#6c757d",
    light: "#9fa5aa",
    dark: "#4e5459",
  },
} as const;

// tokens/spacing.ts
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
} as const;
```

### 컴포넌트에서 토큰 사용

```tsx
import { style } from "@vanilla-extract/css";
import { colors, spacing } from "../tokens";

export const button = style({
  padding: `${spacing.sm} ${spacing.md}`,
  backgroundColor: colors.primary.main,
  color: "#ffffff",
  borderRadius: "9999px",
});
```

## 브랜드 커스터마이징

### 브랜드 색상 적용

```css
/* 브랜드별 CSS 변수 */
:root[data-brand="company-a"] {
  --color-primary: #ff6b6b;
  --color-secondary: #4ecdc4;
}

:root[data-brand="company-b"] {
  --color-primary: #95e1d3;
  --color-secondary: #f38181;
}
```

```tsx
// 브랜드 설정
document.documentElement.setAttribute("data-brand", "company-a");
```

## 반응형 테마

### 미디어 쿼리를 통한 테마 조정

```tsx
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "8px 12px",
  "@media": {
    "(min-width: 768px)": {
      padding: "12px 24px",
    },
    "(min-width: 1024px)": {
      padding: "16px 32px",
    },
  },
});
```

## 테마 전환 애니메이션

### 부드러운 테마 전환

```css
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## 참고 자료

- [vanilla-extract 문서](https://vanilla-extract.style/)
- [CSS 변수 가이드](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [다크 모드 구현](https://web.dev/prefers-color-scheme/)






