# 사용 가이드

이 문서는 Daepyro Design System의 컴포넌트 사용 방법을 설명합니다.

## 설치

```bash
# pnpm
pnpm add @team-numberone/design-system

# npm
npm install @team-numberone/design-system

# yarn
yarn add @team-numberone/design-system
```

## 기본 설정

### 1. CSS 파일 import

vanilla-extract로 생성된 CSS 파일을 반드시 import해야 합니다:

```tsx
// 앱의 진입점 (예: main.tsx, App.tsx)
import "@team-numberone/design-system/styles.css";
```

### 2. Vite 설정 (Vite 사용 시)

Vite를 사용하는 경우, `vite.config.ts`에 vanilla-extract 플러그인을 추가해야 합니다:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});
```

## 컴포넌트 사용 예제

### Button

#### 기본 사용

```tsx
import { Button } from "@team-numberone/design-system";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("클릭됨")}>클릭하세요</Button>
    </div>
  );
}
```

#### 다양한 Props 사용

```tsx
import { Button } from "@team-numberone/design-system";

function FormExample() {
  const handleSubmit = () => {
    console.log("제출됨");
  };

  return (
    <form>
      {/* 기본 버튼 */}
      <Button type="button">취소</Button>

      {/* 제출 버튼 */}
      <Button type="submit" onClick={handleSubmit}>
        제출
      </Button>

      {/* 비활성화 버튼 */}
      <Button disabled>비활성화</Button>

      {/* 커스텀 클래스 */}
      <Button className="custom-button-class">커스텀 스타일</Button>

      {/* 접근성 속성 */}
      <Button aria-label="닫기" onClick={handleClose}>
        ×
      </Button>
    </form>
  );
}
```

#### 이벤트 핸들러

```tsx
import { Button } from "@team-numberone/design-system";
import { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <Button onClick={() => setCount(count + 1)}>증가</Button>
      <Button onClick={() => setCount(0)}>리셋</Button>
    </div>
  );
}
```

#### 조건부 렌더링

```tsx
import { Button } from "@team-numberone/design-system";

function ConditionalExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // API 호출 등
    await fetch("/api/data");
    setIsLoading(false);
  };

  return (
    <Button disabled={isLoading} onClick={handleClick} aria-busy={isLoading}>
      {isLoading ? "로딩 중..." : "데이터 가져오기"}
    </Button>
  );
}
```

## TypeScript 타입

모든 컴포넌트는 TypeScript 타입을 제공합니다:

```tsx
import { Button } from "@team-numberone/design-system";
import type { ButtonHTMLAttributes } from "react";

// Button 컴포넌트는 ButtonHTMLAttributes 타입을 확장
const MyButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  }
> = ({ variant, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
```

## 고급 사용법

### 컴포넌트 조합

```tsx
import { Button } from "@team-numberone/design-system";

function ButtonGroup() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button>저장</Button>
      <Button variant="outline">취소</Button>
      <Button variant="ghost">삭제</Button>
    </div>
  );
}
```

### ref 사용

```tsx
import { Button } from "@team-numberone/design-system";
import { useRef } from "react";

function RefExample() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleFocus = () => {
    buttonRef.current?.focus();
  };

  return (
    <>
      <Button ref={buttonRef}>포커스 버튼</Button>
      <Button onClick={handleFocus}>포커스 이동</Button>
    </>
  );
}
```

## 에러 처리

### 에러 핸들러

```tsx
import { Button } from "@team-numberone/design-system";

const handleError = (error: Error) => {
  console.error("에러:", error);
};

const handleClick = async () => {
  try {
    await fetchData();
  } catch (error) {
    handleError(error);
  }
};
```
