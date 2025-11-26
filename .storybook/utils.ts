import { expect } from "vitest";

/**
 * Storybook 빌드 환경에서 play 함수 실행 여부를 확인합니다.
 * vitest 환경에서만 play 함수를 실행하고, 빌드된 Storybook에서는 실행하지 않습니다.
 *
 * @returns vitest 테스트 환경인지 여부
 */
export const isTestEnvironment =
  typeof expect !== "undefined" &&
  typeof expect.extend === "function" &&
  // vitest 환경인지 확인 (빌드된 Storybook에서는 expect가 다르게 설정됨)
  "customEqualityTesters" in expect;
