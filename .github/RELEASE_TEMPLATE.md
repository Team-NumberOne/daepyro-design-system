# Release Notes Template

이 템플릿을 사용하여 GitHub Release 노트를 작성하세요.

## 버전 정보

**버전**: `vX.Y.Z`  
**릴리스 날짜**: YYYY-MM-DD  
**태그**: `vX.Y.Z`

## 변경사항 요약

<!-- 주요 변경사항을 한 문장으로 요약 -->

## 주요 변경사항

### ✨ 새로운 기능 (Added)

- 새로운 컴포넌트/기능 1
- 새로운 컴포넌트/기능 2

### 🔄 변경사항 (Changed)

- 변경된 기능 1
- 변경된 기능 2

### 🐛 버그 수정 (Fixed)

- 수정된 버그 1
- 수정된 버그 2

### 🗑️ 제거된 기능 (Removed)

- 제거된 기능 1 (deprecated 경고 후 제거)

### 📚 문서화 (Documentation)

- 문서 개선 사항

### 🔧 개발자 경험 (Developer Experience)

- 개발 도구 개선
- 빌드 프로세스 개선

## 마이그레이션 가이드

<!-- Breaking changes가 있는 경우 마이그레이션 가이드 작성 -->

### Breaking Changes

이번 릴리스에는 다음과 같은 breaking changes가 포함되어 있습니다:

1. **변경사항 1**

   ```tsx
   // 이전
   <Component oldProp="value" />

   // 이후
   <Component newProp="value" />
   ```

2. **변경사항 2**
   - 설명

## 설치 방법

```bash
pnpm add @team-numberone/design-system@X.Y.Z
```

또는 최신 버전:

```bash
pnpm add @team-numberone/design-system@latest
```

## 사용 방법

<!-- 주요 변경사항의 사용 예제 -->

```tsx
import { Component } from "@team-numberone/design-system";

function App() {
  return <Component />;
}
```

## 전체 변경사항

자세한 변경사항은 [CHANGELOG.md](../../CHANGELOG.md)를 참고하세요.

## 감사 인사

<!-- 기여자나 리뷰어에게 감사 인사 -->

---

**다운로드**: [GitHub Packages](https://github.com/Team-NumberOne/daepyro-design-system/packages)  
**문서**: [Storybook](https://team-numberone.github.io/daepyro-design-system/)  
**이슈 리포트**: [GitHub Issues](https://github.com/Team-NumberOne/daepyro-design-system/issues)
