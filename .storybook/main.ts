import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { fileURLToPath } from "url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    if (config.plugins) {
      config.plugins.push(vanillaExtractPlugin());
    }
    // Storybook에서도 alias 사용 가능하도록 설정
    // @storybook/* 패키지는 node_modules에서 찾아야 하므로 alias에서 제외
    if (config.resolve) {
      config.resolve.alias = {
        "@": path.resolve(dirname, "../src"),
      };
    }
    return config;
  },
};
export default config;
