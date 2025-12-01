# Husky Pre-commit 훅 설정 가이드

이 문서는 Husky를 사용한 Pre-commit 훅 설정 방법을 설명합니다.

## 설치

Husky는 이미 설치되어 있으며, `pnpm install` 실행 시 자동으로 초기화됩니다.

## 설정된 훅

### Pre-commit 훅 (`.husky/pre-commit`)

커밋 전에 자동으로 실행되는 검사:

1. **린트 체크** (`pnpm lint`)
   - Biome을 사용한 코드 린트 검사
   - 오류가 있으면 커밋이 차단됩니다

2. **타입 체크** (`pnpm check`)
   - TypeScript 타입 검사
   - 타입 오류가 있으면 커밋이 차단됩니다

3. **포맷팅 체크** (`pnpm biome check`)
   - 코드 포맷팅 검사 (자동 수정하지 않음)
   - 포맷팅 오류가 있으면 커밋이 차단됩니다

### Commit-msg 훅 (`.husky/commit-msg`)

커밋 메시지가 Conventional Commits 컨벤션을 따르는지 검사합니다.

## 커밋 메시지 컨벤션

커밋 메시지는 다음 형식을 따라야 합니다:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type (필수)

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가/수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등
- `ci`: CI 설정 변경

### Scope (선택)

변경된 범위를 명시합니다 (예: `Button`, `docs`, `ci`).

### Subject (필수)

변경 사항을 간단히 설명합니다:

- 50자 이하
- 첫 글자는 소문자
- 마침표(.)로 끝나지 않음
- 명령형으로 작성 (예: "추가" 대신 "add")

### 예시

```bash
# 좋은 예
feat(Button): 새로운 variant prop 추가
fix(Button): disabled 상태 스타일 수정
docs: README 사용법 추가
chore: 의존성 업데이트

# 나쁜 예
feat: 버튼 추가  # scope 누락
fix: 버그 수정  # 구체적이지 않음
update button  # 컨벤션 미준수
```

## 훅 비활성화 (비상시)

필요한 경우 `--no-verify` 플래그로 훅을 건너뛸 수 있습니다:

```bash
git commit --no-verify -m "emergency fix"
```

**주의**: 이 방법은 권장되지 않으며, CI에서도 실패할 수 있습니다.

## 문제 해결

### 훅이 실행되지 않는 경우

1. Husky가 제대로 설치되었는지 확인:

   ```bash
   pnpm exec husky --version
   ```

2. Git 훅이 활성화되어 있는지 확인:

   ```bash
   ls -la .git/hooks/pre-commit
   ```

3. Husky 재설치:
   ```bash
   pnpm exec husky install
   ```

### 린트 오류 수정

자동으로 수정 가능한 오류는 다음 명령어로 수정:

```bash
pnpm format
```

### 타입 오류 수정

TypeScript 타입 오류를 수정한 후 다시 커밋을 시도하세요.

## 참고 자료

- [Husky 공식 문서](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint 공식 문서](https://commitlint.js.org/)




