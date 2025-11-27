import type { Preview } from "@storybook/react-vite";
// Pretendard 폰트 CSS import
import "pretendard/dist/web/static/pretendard.css";
// @testing-library/jest-dom/vitest는 vitest.setup.ts에서만 import합니다.
// preview.ts는 Storybook 빌드 환경에서도 실행되므로 vitest 관련 import를 하지 않습니다.

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      // CI 환경에서는 환경 변수 STORYBOOK_A11Y_TEST='error'로 설정
      // 로컬 개발 환경에서는 'todo'로 설정하여 경고만 표시
      test:
        typeof process !== "undefined" &&
        process.env.STORYBOOK_A11Y_TEST === "error"
          ? "error"
          : "todo",
    },
  },
};

export default preview;
