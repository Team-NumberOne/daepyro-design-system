# @team-numberone/design-system

Daepyro Design System - React 컴포넌트 라이브러리

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://team-numberone.github.io/daepyro-design-system/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 설치

```bash
pnpm add @team-numberone/design-system
```

## 사용 방법

### 1. CSS 파일 import

**중요**: vanilla-extract로 생성된 CSS 파일을 반드시 import해야 합니다.

```tsx
// 앱의 진입점 (예: main.tsx, App.tsx)
import "@team-numberone/design-system/styles.css";

// 또는
import "@team-numberone/design-system/dist/design-system.css";
```

### 2. 컴포넌트 사용

```tsx
import { Button } from "@team-numberone/design-system";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>클릭하세요</Button>
    </div>
  );
}
```

## Vite 프로젝트에서 사용하기

Vite를 사용하는 경우, `vite.config.ts`에 vanilla-extract 플러그인이 필요할 수 있습니다:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});
```

## 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (Storybook)
pnpm storybook

# 빌드
pnpm build

# 린트
pnpm lint

# 타입 체크
pnpm check

# 테스트
pnpm test
```

## 배포

### 패키지 배포

태그를 push하면 자동으로 GitHub Packages에 배포됩니다:

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 스토리북 배포

스토리북은 GitHub Pages에 자동으로 배포됩니다:

- `main` 브랜치에 push하면 자동 배포
- 배포 URL: `https://team-numberone.github.io/daepyro-design-system/`

자세한 설정 방법은 [GitHub Pages 설정 가이드](.github/GITHUB_PAGES_SETUP.md)를 참고하세요.

## 기여하기

이 프로젝트에 기여하고 싶으시다면 [기여 가이드](CONTRIBUTING.md)를 참고해주세요.

## 문서

### 사용자 가이드

- [컴포넌트 사용 예제](docs/USAGE.md)
- [테마 커스터마이징](docs/THEMING.md)
- [스타일링 가이드](docs/STYLING.md)
- [마이그레이션 가이드](docs/MIGRATION.md)
- [접근성 가이드라인](docs/ACCESSIBILITY.md)

### 개발자 가이드

- [기여 가이드](CONTRIBUTING.md)
- [배포 가이드](docs/DEPLOYMENT.md)
- [배포 체크리스트](docs/CHECKLIST.md)
- [로컬 배포 가이드](docs/LOCAL_PUBLISH.md)
- [버전 관리 전략](docs/VERSIONING.md)
- [릴리스 템플릿](docs/RELEASE_TEMPLATE.md)
- [Husky Pre-commit 설정](docs/HUSKY_SETUP.md)

### GitHub 설정

- [GitHub Pages 설정](.github/GITHUB_PAGES_SETUP.md)
- [브랜치 보호 설정](.github/BRANCH_PROTECTION.md)

### 변경 이력

- [CHANGELOG](CHANGELOG.md)

## 라이센스

ISC - 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.
