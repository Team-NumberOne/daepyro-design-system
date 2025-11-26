import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/react-vite";
import * as projectAnnotations from "./preview";
// Storybook에서 play 함수의 jest-dom matcher를 사용하기 위해 import
// vitest 환경에서만 실행되므로 안전하게 import 가능
import "@testing-library/jest-dom/vitest";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
