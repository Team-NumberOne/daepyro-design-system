/**
 * Storybook 빌드 환경에서 play 함수 실행 여부를 확인합니다.
 * @storybook/addon-vitest 환경에서만 play 함수를 실행하고, 빌드된 Storybook에서는 실행하지 않습니다.
 *
 * vitest.config.ts에서 globals: true로 설정되어 있으므로, vitest 환경에서는 expect가 전역으로 사용 가능합니다.
 * vitest.setup.ts에서 @testing-library/jest-dom/vitest를 import하므로 jest-dom matcher도 사용 가능합니다.
 *
 * @returns vitest 테스트 환경인지 여부
 */
export const isTestEnvironment =
  typeof globalThis !== "undefined" &&
  typeof (globalThis as { expect?: unknown }).expect !== "undefined";

/**
 * vitest 환경에서 전역 expect를 안전하게 가져옵니다.
 * isTestEnvironment가 true일 때만 호출해야 하며, 이 경우 expect는 항상 정의되어 있습니다.
 *
 * @returns vitest의 expect 함수
 * @throws isTestEnvironment가 false일 때 호출하면 에러 발생
 */
export function getExpect(): typeof import("vitest").expect {
  if (!isTestEnvironment) {
    throw new Error(
      "expect는 테스트 환경에서만 사용할 수 있습니다. isTestEnvironment를 확인해주세요."
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return (globalThis as { expect: typeof import("vitest").expect }).expect!;
}

/**
 * vitest 환경에서 전역 expect 타입 선언
 * stories 파일에서 전역 expect를 직접 사용할 때 타입 체크를 위해 사용합니다.
 * isTestEnvironment가 true일 때만 사용해야 합니다.
 */
declare global {
  // eslint-disable-next-line no-var
  var expect: typeof import("vitest").expect | undefined;
}
