# 마이그레이션 가이드

이 문서는 Daepyro Design System의 버전 간 마이그레이션 가이드를 제공합니다.

## 버전 1.0.0 → 1.1.0 (예정)

### 주요 변경사항

현재 버전 1.0.1은 초기 릴리스로, 향후 버전 업데이트 시 마이그레이션 가이드가 제공될 예정입니다.

## Breaking Changes 가이드

### 컴포넌트 API 변경 시

향후 버전에서 컴포넌트 API가 변경될 경우, 다음 형식으로 마이그레이션 가이드를 제공합니다:

#### 예시: Button 컴포넌트 변경

**이전 버전 (1.0.0):**
```tsx
import { Button } from "@team-numberone/design-system";

<Button variant="primary">클릭</Button>
```

**새 버전 (1.1.0):**
```tsx
import { Button } from "@team-numberone/design-system";

<Button appearance="primary">클릭</Button>
```

**마이그레이션 단계:**
1. `variant` prop을 `appearance`로 변경
2. 기존 코드 검색 및 일괄 변경
3. 타입 체크 실행하여 오류 확인

## 스타일 변경 마이그레이션

### CSS 클래스명 변경 시

**이전 버전:**
```css
.design-system-button {
  /* 스타일 */
}
```

**새 버전:**
```css
.ds-button {
  /* 스타일 */
}
```

**마이그레이션:**
- 자동으로 처리되며, 사용자 액션 불필요
- 빌드 시 자동 마이그레이션

## 의존성 업데이트

### React 버전 변경 시

현재 React 19를 요구합니다. React 18에서 마이그레이션:

```bash
# React 19로 업그레이드
pnpm add react@^19.0.0 react-dom@^19.0.0

# 타입 정의 업데이트
pnpm add -D @types/react@^19.0.0 @types/react-dom@^19.0.0
```

## 패키지 이름 변경 (가정)

### 스코프 변경 시

**이전:**
```tsx
import { Button } from "@old-scope/design-system";
```

**이후:**
```tsx
import { Button } from "@team-numberone/design-system";
```

**마이그레이션:**
1. `package.json` 업데이트
2. import 문 일괄 변경
3. 빌드 및 테스트 실행

## 도움말

마이그레이션 중 문제가 발생하면:
- [GitHub Issues](https://github.com/Team-NumberOne/daepyro-design-system/issues)에 리포트
- [CHANGELOG.md](../CHANGELOG.md)에서 변경사항 확인
- [버전 관리 가이드](VERSIONING.md) 참고


