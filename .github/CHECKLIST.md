# 디자인 시스템 배포 체크리스트

## ✅ 현재 설정된 항목

### 빌드 & 패키징

- [x] Vite 빌드 설정 (`vite.config.ts`)
- [x] TypeScript 타입 정의 생성 (`vite-plugin-dts`)
- [x] ESM/CJS 이중 빌드 지원
- [x] CSS 파일 별도 export (`styles.css`)
- [x] `package.json` exports 필드 설정
- [x] `files` 필드로 배포 파일 제한

### 테스트

- [x] Vitest 설정 (`vitest.config.ts`)
- [x] 단위 테스트 설정 (jsdom)
- [x] Storybook 테스트 설정 (Playwright)
- [x] Testing Library 설정
- [x] Jest-dom 매처 설정
- [x] 테스트 스크립트 (`pnpm test`)

### 코드 품질

- [x] Biome 린터/포맷터 설정
- [x] TypeScript strict 모드
- [x] 타입 체크 스크립트 (`pnpm check`)
- [x] 린트 스크립트 (`pnpm lint`)

### CI/CD

- [x] CI 워크플로우 (`.github/workflows/ci.yml`)
  - 린트, 타입 체크, 테스트, 빌드
- [x] 배포 워크플로우 (`.github/workflows/publish.yml`)
  - 태그 기반 자동 배포
  - GitHub Packages 배포
  - GitHub Release 생성
- [x] Storybook 배포 워크플로우 (`.github/workflows/storybook.yml`)
  - GitHub Pages 자동 배포

### 문서화

- [x] README.md (기본 사용법)
- [x] 배포 가이드 (`.github/DEPLOYMENT.md`)
- [x] Storybook 배포 가이드
- [x] GitHub Pages 설정 가이드
- [x] 브랜치 보호 가이드
- [x] Issue 템플릿 (bug, feature, design token)
- [x] PR 템플릿

### Storybook

- [x] Storybook 설정
- [x] 접근성 애드온 (`@storybook/addon-a11y`)
- [x] 문서 애드온 (`@storybook/addon-docs`)
- [x] Vitest 통합 (`@storybook/addon-vitest`)

### 패키지 설정

- [x] 패키지 이름 (`@team-numberone/design-system`)
- [x] GitHub Packages 레지스트리 설정
- [x] Peer dependencies 설정 (React 19)
- [x] Package manager 고정 (`pnpm@10.19.0`)

## ⚠️ 부족한 항목 (사내 배포 전 필수)

### 1. 라이선스 파일

- [x] `LICENSE` 파일 추가
- [x] `package.json`의 `license` 필드 확인 (현재 "ISC")

### 2. 메타데이터 보완

- [x] `package.json`의 `author` 필드 추가
- [x] `homepage` 필드 추가 (GitHub Pages URL)
- [x] `bugs` 필드 추가 (GitHub Issues URL)
- [x] `repository.url` 확인

### 3. 버전 관리

- [x] `CHANGELOG.md` 파일 생성
- [x] 버전 관리 전략 문서화 (Semantic Versioning) - `.github/VERSIONING.md`
- [x] 릴리스 노트 템플릿 - `.github/RELEASE_TEMPLATE.md`

### 4. 테스트 커버리지

- [x] 커버리지 리포트 생성 스크립트 추가 (`test:coverage`)
- [x] CI에서 커버리지 리포트 업로드
- [x] 커버리지 임계값 설정 (80% - lines, functions, branches, statements)

### 5. 접근성 강화

- [x] Storybook의 a11y 테스트를 CI 환경에서 `'error'`로 변경 (환경 변수로 제어)
- [x] 접근성 가이드라인 문서화 (`.github/ACCESSIBILITY.md`)
- [x] CI에서 접근성 테스트 실패 시 빌드 실패하도록 설정

### 6. 사용 가이드

- [x] 컴포넌트 사용 예제 추가 (`docs/USAGE.md`)
- [x] 테마 커스터마이징 가이드 (`docs/THEMING.md`)
- [x] 스타일링 가이드 (`docs/STYLING.md`)
- [x] 마이그레이션 가이드 (`docs/MIGRATION.md`)

### 7. 기여 가이드

- [x] `CONTRIBUTING.md` 파일 생성
- [x] 코드 스타일 가이드 (Biome 설정, TypeScript 스타일, React 컴포넌트 스타일)
- [x] PR 프로세스 설명 (단계별 가이드, CI 체크, 코드 리뷰)
- [x] 컴포넌트 추가 가이드 (5단계 가이드, 체크리스트 포함)

### 8. Pre-commit 훅 (선택사항, 권장)

- [x] Husky 설정
- [x] Pre-commit에서 린트/타입 체크 실행
- [x] 커밋 메시지 컨벤션 강제 (commitlint)

### 9. 보안

- [ ] `npm audit` 정기 실행
- [ ] 의존성 업데이트 정책
- [ ] 보안 취약점 리포트 프로세스

### 10. 모니터링 & 분석

- [ ] 패키지 다운로드 통계 확인 방법
- [ ] 사용자 피드백 수집 프로세스
- [ ] 이슈 관리 프로세스

## 📋 배포 전 최종 체크

### 필수 체크

- [ ] 모든 테스트 통과
- [ ] 린트 오류 없음
- [ ] 타입 오류 없음
- [ ] 빌드 성공 확인
- [ ] Storybook 빌드 성공 확인
- [ ] 패키지 설치 테스트 (로컬)
- [ ] GitHub Packages 접근 권한 확인
- [ ] GitHub Actions 시크릿 설정 확인 (`MY_GITHUB_TOKEN`)

### 권장 체크

- [ ] 버전 번호 확인
- [ ] CHANGELOG 업데이트
- [ ] README 최신화
- [ ] 문서 링크 확인
- [ ] 예제 코드 테스트

## 🚀 배포 프로세스

1. **버전 업데이트**

   ```bash
   # package.json의 version 업데이트
   # CHANGELOG.md 업데이트
   ```

2. **커밋 & 푸시**

   ```bash
   git add .
   git commit -m "chore: bump version to X.Y.Z"
   git push origin main
   ```

3. **태그 생성 & 푸시**

   ```bash
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```

4. **자동 배포 확인**
   - GitHub Actions에서 배포 진행 상황 확인
   - GitHub Packages에서 패키지 확인
   - GitHub Release 확인
