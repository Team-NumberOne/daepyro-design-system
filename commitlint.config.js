export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 새로운 기능
        "fix", // 버그 수정
        "docs", // 문서 변경
        "style", // 코드 포맷팅, 세미콜론 누락 등
        "refactor", // 리팩토링
        "perf", // 성능 개선
        "test", // 테스트 추가/수정
        "chore", // 빌드 업무 수정, 패키지 매니저 설정 등
        "ci", // CI 설정 변경
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
};

