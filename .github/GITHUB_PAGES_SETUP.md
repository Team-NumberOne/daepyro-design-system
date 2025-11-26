# GitHub Pages 스토리북 배포 설정 가이드

## 설정 단계

### 1단계: GitHub 저장소에서 Pages 활성화

1. GitHub 저장소로 이동: `https://github.com/Team-NumberOne/daepyro-design-system`
2. **Settings** 탭 클릭
3. 왼쪽 사이드바에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Source**: `GitHub Actions` 선택
5. 저장 (Save)

### 2단계: 워크플로우 확인

`.github/workflows/storybook.yml` 파일이 이미 생성되어 있습니다. 이 파일은:

- `main` 브랜치에 push될 때마다 자동으로 스토리북을 빌드하고 배포합니다
- `workflow_dispatch`로 수동 실행도 가능합니다

### 3단계: 첫 배포 실행

#### 방법 1: 자동 배포 (권장)

```bash
# main 브랜치에 push하면 자동으로 배포됩니다
git add .
git commit -m "chore: setup GitHub Pages for Storybook"
git push origin main
```

#### 방법 2: 수동 배포

1. GitHub 저장소 → **Actions** 탭
2. 왼쪽에서 **Deploy Storybook** 워크플로우 선택
3. **Run workflow** 버튼 클릭
4. 브랜치 선택 후 **Run workflow** 실행

### 4단계: 배포 확인

배포가 완료되면 (약 2-3분 소요):

- GitHub 저장소 → **Settings** → **Pages**에서 URL 확인
- 기본 URL 형식: `https://team-numberone.github.io/daepyro-design-system/`

## 배포 상태 확인

### GitHub Actions에서 확인

1. **Actions** 탭에서 워크플로우 실행 상태 확인
2. 초록색 체크 표시가 나타나면 배포 성공

### Pages 설정에서 확인

1. **Settings** → **Pages**에서 배포 상태 확인
2. "Your site is live at..." 메시지 확인

## 커스텀 도메인 설정 (선택사항)

1. **Settings** → **Pages** → **Custom domain**에 도메인 입력
2. DNS 설정에서 CNAME 레코드 추가
3. GitHub에서 자동으로 SSL 인증서 발급

## 트러블슈팅

### 배포가 실패하는 경우

1. **워크플로우 로그 확인**
   - Actions 탭 → 실패한 워크플로우 클릭 → 로그 확인

2. **일반적인 문제**
   - 의존성 설치 실패: `pnpm-lock.yaml` 확인
   - 빌드 실패: 로컬에서 `pnpm build-storybook` 테스트
   - 권한 문제: Settings → Actions → General에서 권한 확인

3. **로컬에서 빌드 테스트**
   ```bash
   pnpm build-storybook
   # storybook-static 폴더가 생성되는지 확인
   ```

### 배포는 성공했지만 페이지가 보이지 않는 경우

1. Pages 설정에서 Source가 `GitHub Actions`로 설정되어 있는지 확인
2. 브라우저 캐시 삭제 후 재시도
3. 배포 후 몇 분 기다린 후 재시도 (CDN 전파 시간)

## 자동 배포 동작

- `main` 브랜치에 push할 때마다 자동으로 배포됩니다
- PR을 merge하면 자동으로 배포됩니다
- 배포는 약 2-3분 정도 소요됩니다

## 배포 URL

배포가 완료되면 다음 URL에서 스토리북을 확인할 수 있습니다:

```
https://team-numberone.github.io/daepyro-design-system/
```

## 추가 정보

- 배포된 스토리북은 공개적으로 접근 가능합니다
- Private 저장소의 경우에도 Pages는 공개됩니다 (필요시 설정 변경 가능)
- 배포 히스토리는 Actions 탭에서 확인할 수 있습니다
