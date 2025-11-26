import type { Preview } from "@storybook/react-vite";
// Storybook에서 play 함수의 jest-dom matcher를 사용하기 위해 import
import "@testing-library/jest-dom/vitest";

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
