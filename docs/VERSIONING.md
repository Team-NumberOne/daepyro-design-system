# 버전 관리 전략

이 프로젝트는 [Semantic Versioning (SemVer)](https://semver.org/)을 따릅니다.

## 버전 형식

버전 번호는 `MAJOR.MINOR.PATCH` 형식을 따릅니다:

- **MAJOR**: 호환되지 않는 API 변경 (breaking changes)
- **MINOR**: 하위 호환성을 유지하면서 기능 추가
- **PATCH**: 하위 호환성을 유지하면서 버그 수정

예: `1.2.3` → Major=1, Minor=2, Patch=3

## 버전 업데이트 가이드

### PATCH 버전 (1.0.0 → 1.0.1)

다음과 같은 변경사항이 있을 때:

- 버그 수정
- 문서 수정
- 타입 정의 수정 (하위 호환)
- 내부 리팩토링 (공개 API 변경 없음)
- 테스트 추가/수정
- 빌드 설정 변경

**예시:**

- Button 컴포넌트의 disabled 상태 스타일 버그 수정
- README 오타 수정
- TypeScript 타입 정의 개선

### MINOR 버전 (1.0.0 → 1.1.0)

다음과 같은 변경사항이 있을 때:

- 새로운 컴포넌트 추가
- 기존 컴포넌트에 새로운 props 추가 (선택적)
- 새로운 유틸리티 함수 추가
- 새로운 스타일 변수/토큰 추가
- 하위 호환성을 유지하는 기능 개선

**예시:**

- Input 컴포넌트 추가
- Button에 `size` prop 추가 (기본값 제공)
- 새로운 색상 토큰 추가

### MAJOR 버전 (1.0.0 → 2.0.0)

다음과 같은 변경사항이 있을 때:

- 기존 컴포넌트의 API 변경 (breaking changes)
- 필수 props 제거 또는 변경
- 컴포넌트 제거
- CSS 클래스명 변경
- 스타일 토큰 제거 또는 이름 변경
- React 버전 요구사항 변경

**예시:**

- Button의 `onClick` prop을 필수에서 선택으로 변경 (하지만 이건 MINOR일 수도)
- `variant` prop의 값 변경 (예: `primary` → `default`)
- 컴포넌트 제거

## 버전 업데이트 프로세스

### 1. 변경사항 확인

변경사항을 분석하여 버전 업데이트 유형을 결정합니다.

### 2. CHANGELOG.md 업데이트

`CHANGELOG.md` 파일의 `[Unreleased]` 섹션에 변경사항을 추가합니다:

```markdown
## [Unreleased]

### Added

- 새로운 기능

### Changed

- 변경된 기능

### Fixed

- 버그 수정

### Removed

- 제거된 기능
```

### 3. package.json 버전 업데이트

`package.json`의 `version` 필드를 업데이트합니다:

```json
{
  "version": "1.2.3"
}
```

### 4. 커밋 & 태그 생성

```bash
# 변경사항 커밋
git add .
git commit -m "chore: bump version to 1.2.3"

# 태그 생성 (v 접두사 사용)
git tag v1.2.3

# 태그 푸시 (자동 배포 트리거)
git push origin v1.2.3
```

### 5. CHANGELOG.md 릴리스 섹션 업데이트

태그가 생성된 후, `CHANGELOG.md`의 `[Unreleased]` 섹션을 새로운 버전 섹션으로 이동:

```markdown
## [1.2.3] - 2024-01-15

### Added

- 새로운 기능

[Unreleased]: https://github.com/Team-NumberOne/daepyro-design-system/compare/v1.2.3...HEAD
[1.2.3]: https://github.com/Team-NumberOne/daepyro-design-system/releases/tag/v1.2.3
```

## Pre-release 버전

개발 중이거나 테스트를 위한 버전은 다음과 같이 표시할 수 있습니다:

- **Alpha**: `1.0.0-alpha.1`
- **Beta**: `1.0.0-beta.1`
- **RC (Release Candidate)**: `1.0.0-rc.1`

## 버전 호환성

### React 버전

현재 프로젝트는 React 19를 peer dependency로 요구합니다.

- React 19: ✅ 지원
- React 18: ❌ 지원하지 않음 (MAJOR 버전 변경 필요)

### Node.js 버전

- Node.js 20 이상 필요

## 자동 버전 관리

GitHub Actions 워크플로우가 태그에서 버전을 자동으로 추출하여 `package.json`을 업데이트합니다.

태그 형식: `v1.2.3` (v 접두사 필수)

## 참고 자료

- [Semantic Versioning 공식 사이트](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [npm 버전 관리 가이드](https://docs.npmjs.com/about-semantic-versioning)
