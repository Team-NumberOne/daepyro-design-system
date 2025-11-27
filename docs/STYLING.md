# 스타일링 가이드

이 문서는 Daepyro Design System의 스타일링 방법을 설명합니다.

## 스타일링 접근 방법

Daepyro Design System은 **vanilla-extract**를 사용하여 타입 안전한 CSS-in-JS 스타일링을 제공합니다.

## vanilla-extract 기본 사용법

### 기본 스타일 정의

```tsx
// Button.css.ts
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "8px 12px",
  borderRadius: "9999px",
  border: "none",
  cursor: "pointer",
  fontWeight: 500,
});
```

### 컴포넌트에서 사용

```tsx
// Button.tsx
import { button } from "./Button.css";

export const Button = ({ children, ...rest }) => {
  return (
    <button className={button} {...rest}>
      {children}
    </button>
  );
};
```

## 스타일 변형 (Variants)

### styleVariants 사용

```tsx
import { styleVariants } from "@vanilla-extract/css";

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: "#007bff",
    color: "#ffffff",
  },
  secondary: {
    backgroundColor: "#6c757d",
    color: "#ffffff",
  },
  outline: {
    backgroundColor: "transparent",
    border: "1px solid #007bff",
    color: "#007bff",
  },
});
```

### 컴포넌트에서 사용

```tsx
import { buttonVariants } from "./Button.css";

type Variant = keyof typeof buttonVariants;

export const Button = ({ variant = "primary", ...props }) => {
  return (
    <button className={buttonVariants[variant]} {...props}>
      {children}
    </button>
  );
};
```

## 조건부 스타일링

### 조건부 스타일

```tsx
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "8px 12px",
  borderRadius: "9999px",
});

export const buttonDisabled = style({
  opacity: 0.6,
  cursor: "not-allowed",
});
```

```tsx
import { button, buttonDisabled } from "./Button.css";
import { clsx } from "clsx";

export const Button = ({ disabled, ...props }) => {
  return (
    <button
      className={clsx(button, disabled && buttonDisabled)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 반응형 스타일링

### 미디어 쿼리 사용

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

## CSS 변수와 함께 사용

### CSS 변수 활용

```tsx
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "var(--spacing-sm, 8px) var(--spacing-md, 16px)",
  backgroundColor: "var(--color-primary, #007bff)",
  borderRadius: "var(--border-radius, 9999px)",
});
```

## 글로벌 스타일

### 전역 스타일 정의

```tsx
import { globalStyle } from "@vanilla-extract/css";

globalStyle("button", {
  ":hover": {
    opacity: 0.9,
  },
  ":active": {
    opacity: 0.8,
  },
});
```

## 스타일 조합

### 여러 스타일 조합

```tsx
import { style } from "@vanilla-extract/css";

export const retryButton = style({
  transition: "opacity 0.2s ease",
});
```

## 성능 최적화

### 스타일 최적화

```tsx
import { style } from "@vanilla-extract/css";

export const buttonHover = style({
  transition: "all 0.2s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});
```

## 애니메이션 스타일

### 버튼 애니메이션

```tsx
import { keyframes, style } from "@vanilla-extract/css";

const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.8 },
});

export const buttonLoading = style({
  animation: `${pulse} 1.5s ease-in-out infinite`,
});
```

## 참고 자료

- [vanilla-extract 공식 문서](https://vanilla-extract.style/)
- [CSS-in-JS 가이드](https://vanilla-extract.style/documentation/styling-api/)
- [반응형 디자인](https://vanilla-extract.style/documentation/styling-api/#media-queries)




