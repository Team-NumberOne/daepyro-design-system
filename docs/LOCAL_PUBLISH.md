# 로컬에서 배포하기

## GitHub Personal Access Token 생성

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" 클릭
3. 다음 권한 선택:
   - `write:packages` - GitHub Packages에 업로드
   - `read:packages` - GitHub Packages에서 다운로드
   - `repo` - Private 저장소의 경우
4. 토큰 생성 후 복사 (한 번만 표시됨!)

## 환경 변수 설정

### macOS/Linux

```bash
# 현재 세션에만 적용
export GITHUB_TOKEN=your_github_token_here

# 영구적으로 적용하려면 ~/.zshrc 또는 ~/.bashrc에 추가
echo 'export GITHUB_TOKEN=your_github_token_here' >> ~/.zshrc
source ~/.zshrc
```

### Windows (PowerShell)

```powershell
# 현재 세션에만 적용
$env:GITHUB_TOKEN="your_github_token_here"

# 영구적으로 적용하려면
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'your_github_token_here', 'User')
```

## 배포 실행

```bash
# 빌드 및 배포
pnpm publish --no-git-checks
```

## 주의사항

⚠️ **보안**: 토큰을 코드에 커밋하지 마세요!
- `.npmrc`에 직접 토큰을 작성하지 마세요
- 환경 변수 사용을 권장합니다
- 토큰이 유출되면 즉시 GitHub에서 토큰을 삭제하세요

## 권장 방법: GitHub Actions 사용

로컬 배포 대신 GitHub Actions를 사용하는 것을 강력히 권장합니다:

```bash
# 변경사항 커밋
git add .
git commit -m "chore: setup project"

# 태그 생성 및 push (자동 배포)
git tag v1.0.0
git push origin v1.0.0
```

이 방법이 더 안전하고 자동화되어 있습니다.


