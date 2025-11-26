# 기여 가이드

Daepyro Design System에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 기여하는 방법을 안내합니다.

## 개발 환경 설정

### 필수 요구사항

- Node.js 20 이상
- pnpm 10.19.0 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/Team-NumberOne/daepyro-design-system.git
cd daepyro-design-system

# 의존성 설치
pnpm install
```

## 개발 워크플로우

### 1. 브랜치 생성

새로운 기능이나 버그 수정을 위해 브랜치를 생성합니다:

```bash
git checkout -b feature/component-name
# 또는
git checkout -b fix/bug-description
```

### 2. 개발

```bash
# Storybook 실행 (컴포넌트 개발 및 확인)
pnpm storybook

# 테스트 실행 (watch 모드)
pnpm test

# 린트 실행
pnpm lint

# 타입 체크
pnpm check
```

### 3. 컴포넌트 추가 가이드

새로운 컴포넌트를 추가할 때는 다음 구조와 가이드라인을 따릅니다:

#### 디렉토리 구조

```
src/components/ComponentName/
├── ComponentName.tsx          # 컴포넌트 구현
├── ComponentName.css.ts      # 스타일 (vanilla-extract)
├── ComponentName.stories.ts  # Storybook 스토리
├── ComponentName.test.tsx    # 단위 테스트
└── index.ts                  # export (선택사항)
```

#### 단계별 가이드

**1단계: 컴포넌트 구현 (ComponentName.tsx)**

```tsx
import type { ComponentHTMLAttributes, PropsWithChildren } from "react";
import { componentName } from "./ComponentName.css";

type Props = ComponentHTMLAttributes<HTMLElement> &
  PropsWithChildren & {
    // 추가 props
  };

export const ComponentName = ({ children, ...rest }: Props) => {
  return (
    <div className={componentName} {...rest}>
      {children}
    </div>
  );
};
```

**요구사항:**

- TypeScript로 작성
- Props 타입 명시적으로 정의
- 접근성 고려 (ARIA 속성, 키보드 네비게이션 등)
- JSDoc 주석 추가

**2단계: 스타일 정의 (ComponentName.css.ts)**

```tsx
import { style } from "@vanilla-extract/css";

export const componentName = style({
  // 기본 스타일
  padding: "8px 12px",
  borderRadius: "4px",

  // CSS 변수 활용 (테마 지원)
  backgroundColor: "var(--color-bg, #ffffff)",
  color: "var(--color-text, #000000)",

  // 반응형
  "@media": {
    "(min-width: 768px)": {
      padding: "12px 16px",
    },
  },
});
```

**요구사항:**

- vanilla-extract 사용
- CSS 변수 활용 (테마 지원)
- 반응형 스타일 고려
- 접근성 고려 (포커스 스타일 등)

**3단계: Storybook 스토리 (ComponentName.stories.ts)**

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { expect } from "vitest";
import { ComponentName } from "./ComponentName";

const meta = {
  title: "Components/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Controls 설정
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "기본 컴포넌트",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const component = canvas.getByRole("button");
    await expect(component).toBeInTheDocument();
  },
};
```

**요구사항:**

- 다양한 상태의 스토리 작성 (기본, 비활성화, 로딩 등)
- `play` 함수로 인터랙션 테스트 추가
- 문서화 주석 추가
- Controls 설정으로 props 테스트 가능

**4단계: 단위 테스트 (ComponentName.test.tsx)**

```tsx
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ComponentName } from "./ComponentName";

// vanilla-extract CSS 파일 모킹
vi.mock("./ComponentName.css", () => ({
  componentName: "mock-component-class",
}));

describe("ComponentName", () => {
  afterEach(() => {
    cleanup();
  });

  it("렌더링되어야 합니다", () => {
    render(<ComponentName>테스트</ComponentName>);
    const component = screen.getByText("테스트");
    expect(component).toBeInTheDocument();
  });

  // 추가 테스트 케이스
});
```

**요구사항:**

- 핵심 기능 테스트 (렌더링, props 전달, 이벤트 핸들러 등)
- 엣지 케이스 테스트 (null, undefined, 빈 값 등)
- 접근성 테스트 (키보드 네비게이션, ARIA 속성 등)
- 커버리지 80% 이상 목표

**5단계: Export 추가 (src/index.ts)**

```tsx
export * from "./components/ComponentName/ComponentName";
```

#### 컴포넌트 체크리스트

컴포넌트 추가 시 다음 항목을 확인:

- [ ] 컴포넌트 파일 생성 및 구현
- [ ] 스타일 파일 생성 및 정의
- [ ] Storybook 스토리 작성
- [ ] 단위 테스트 작성
- [ ] `src/index.ts`에 export 추가
- [ ] 접근성 속성 추가 (ARIA, 키보드 네비게이션)
- [ ] TypeScript 타입 정의
- [ ] 문서화 (JSDoc 주석)

### 4. 코드 스타일

#### Biome 설정

프로젝트는 Biome을 사용하여 코드 포맷팅과 린팅을 자동화합니다:

```bash
# 코드 포맷팅
pnpm format

# 린트 체크
pnpm lint

# 포맷팅 + 린트 체크
pnpm check
```

#### 코드 스타일 규칙

- **들여쓰기**: 탭 사용
- **따옴표**: 더블 쿼트 (`"`) 사용
- **세미콜론**: 필수
- **줄 길이**: 100자 이하 권장
- **import 정렬**: 자동 정렬 (Biome)

#### TypeScript 스타일

- **strict 모드**: 필수
- **타입 명시**: 가능한 한 명시적으로 타입 작성
- **any 사용 금지**: `any` 타입 사용 지양

```tsx
// ✅ 좋은 예
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event);
};

// ❌ 나쁜 예
const handleClick = (event: any) => {
  console.log(event);
};
```

#### React 컴포넌트 스타일

- **함수 컴포넌트**: 화살표 함수 또는 함수 선언 사용
- **Props 타입**: 명시적으로 정의
- **컴포넌트명**: PascalCase

```tsx
// ✅ 좋은 예
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

// ❌ 나쁜 예
export const button = (props: any) => {
  return <button>{props.children}</button>;
};
```

#### 파일명 규칙

- **컴포넌트**: `PascalCase.tsx` (예: `Button.tsx`)
- **스타일**: `PascalCase.css.ts` (예: `Button.css.ts`)
- **스토리**: `PascalCase.stories.ts` (예: `Button.stories.ts`)
- **테스트**: `PascalCase.test.tsx` (예: `Button.test.tsx`)
- **유틸리티**: `camelCase.ts` (예: `formatDate.ts`)

### 5. 테스트

모든 변경사항은 테스트를 포함해야 합니다:

```bash
# 단위 테스트 실행
pnpm test --run

# 커버리지 확인 (추가 예정)
pnpm test:coverage
```

### 6. 커밋

#### 커밋 메시지 컨벤션

의미 있는 커밋 메시지를 작성합니다. 프로젝트는 Conventional Commits 컨벤션을 따릅니다:

```
<type>(<scope>): <subject>

예시:
feat(Button): 새로운 variant prop 추가
fix(Button): disabled 상태 스타일 수정
docs: README 사용법 추가
chore: 의존성 업데이트
```

**Type 종류:**

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가/수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등
- `ci`: CI 설정 변경

#### Pre-commit 훅

커밋 전에 자동으로 다음 검사가 실행됩니다:

1. **린트 체크** - Biome 린트 검사
2. **타입 체크** - TypeScript 타입 검사
3. **포맷팅 체크** - 코드 포맷팅 검사
4. **커밋 메시지 검사** - Conventional Commits 컨벤션 검사

모든 검사를 통과해야 커밋이 완료됩니다. 자세한 내용은 [Husky 설정 가이드](docs/HUSKY_SETUP.md)를 참고하세요.

### 7. Pull Request 프로세스

#### 1. 변경사항 푸시

```bash
git push origin feature/component-name
```

#### 2. Pull Request 생성

GitHub에서 Pull Request를 생성합니다:

- **Base 브랜치**: `main` 또는 `develop`
- **Compare 브랜치**: 작업한 feature 브랜치

#### 3. PR 템플릿 작성

PR 템플릿을 작성합니다:

**필수 항목:**

- 변경 사항 설명 (간단하고 명확하게)
- 변경 유형 체크 (버그 수정, 기능 추가, 문서화 등)
- 관련 이슈 번호 (있는 경우)
- 체크리스트 확인

**선택 항목:**

- 스크린샷 (UI 변경 시)
- 데모 링크 (Storybook 등)
- 추가 정보 (리뷰어가 알아야 할 사항)

#### 4. CI 체크 통과 대기

PR이 생성되면 자동으로 CI가 실행됩니다:

**필수 통과 항목:**

- ✅ 린트 체크 (`pnpm lint`)
- ✅ 타입 체크 (`pnpm check`)
- ✅ 테스트 실행 (`pnpm test --run`)
- ✅ 빌드 확인 (`pnpm build`)

**CI 실패 시:**

- 로컬에서 동일한 명령어 실행하여 문제 확인
- 오류 수정 후 다시 푸시
- CI 재실행 대기

#### 5. 코드 리뷰

- 최소 1명의 승인 필요
- 리뷰어 피드백에 적극적으로 응답
- 변경 요청 시 수정 후 다시 리뷰 요청

#### 6. Merge

- 모든 체크 통과
- 리뷰 승인 완료
- 충돌 해결 (있는 경우)
- Merge 버튼 클릭

## 코드 리뷰

- 모든 PR은 최소 1명의 승인이 필요합니다.
- 리뷰어의 피드백에 대해 적극적으로 소통합니다.
- 변경사항이 요청되면 수정 후 다시 리뷰를 요청합니다.

## 이슈 리포트

버그를 발견하거나 기능 요청이 있으면 GitHub Issues를 사용합니다:

- 버그 리포트: 버그 리포트 템플릿 사용
- 기능 요청: 기능 요청 템플릿 사용
- 디자인 토큰: 디자인 토큰 템플릿 사용

## 질문

질문이 있으시면:

- GitHub Discussions 사용
- 또는 팀 채널에서 문의

## 라이선스

기여하시는 모든 코드는 ISC 라이선스 하에 배포됩니다.
