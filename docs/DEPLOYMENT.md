# 배포 가이드

## 자동 배포 프로세스

이 저장소는 GitHub Actions를 통해 자동으로 빌드, 테스트, 배포됩니다.

### CI 프로세스

**트리거:**

- `main` 또는 `develop` 브랜치에 push
- Pull Request 생성
- Release 생성

**실행 작업:**

1. 코드 체크아웃
2. 의존성 설치
3. 린터 실행 (`pnpm run lint`)
4. 타입 체크 (`pnpm run check`)
5. 테스트 실행 (`pnpm test --run`)
6. 빌드 실행 (`pnpm run build`)
7. 빌드 아티팩트 업로드

### CD 프로세스 (자동 배포)

**트리거:**

- `v*` 형식의 태그가 push될 때 (예: `v1.0.0`)

**실행 작업:**

1. CI 프로세스와 동일한 검증 단계 실행
2. 태그에서 버전 추출
3. `package.json` 버전 업데이트
4. GitHub Packages에 배포
5. GitHub Release 생성

## 배포 방법

### 1. 버전 업데이트

`package.json`의 `version` 필드를 업데이트합니다:

```json
{
  "version": "1.0.0"
}
```

### 2. 태그 생성 및 Push

```bash
# 태그 생성
git tag v1.0.0

# 태그 push
git push origin v1.0.0
```

### 3. 자동 배포 확인

태그가 push되면 자동으로:

- CI가 실행되어 모든 검증 통과
- GitHub Packages에 패키지가 배포됨
- GitHub Release가 생성됨

## 패키지 사용 방법

배포된 패키지를 사용하려면:

### 1. `.npmrc` 파일 생성

프로젝트 루트에 `.npmrc` 파일을 생성합니다:

```
@daepyro:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. GitHub Personal Access Token 설정

환경 변수에 GitHub 토큰을 설정합니다:

```bash
export GITHUB_TOKEN=your_github_token
```

또는 `.npmrc` 파일에 직접 토큰을 입력할 수 있습니다 (보안상 권장하지 않음).

### 3. 패키지 설치

```bash
pnpm add @daepyro/design-system
```

## 수동 배포 (비상시)

자동 배포가 실패한 경우 수동으로 배포할 수 있습니다:

```bash
# 빌드
pnpm run build

# 배포
GITHUB_TOKEN=your_token pnpm publish
```


