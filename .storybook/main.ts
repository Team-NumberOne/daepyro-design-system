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
        "@/components": path.resolve(dirname, "../src/components"),
        "@/tokens": path.resolve(dirname, "../src/tokens"),
        "@/stories": path.resolve(dirname, "../src/stories"),
      };
    }
    // React를 development 모드로 설정하여 production 빌드 체크 에러 방지
    config.define = {
      ...config.define,
      "process.env.NODE_ENV": JSON.stringify("development"),
      "import.meta.env.MODE": JSON.stringify("development"),
      "import.meta.env.DEV": "true",
      "import.meta.env.PROD": "false",
      __DEV__: "true",
      __PROD__: "false",
    };
    // Storybook은 항상 development 모드로 실행되어야 함
    config.mode = "development";
    // React를 development 빌드로 강제
    if (config.optimizeDeps) {
      config.optimizeDeps.esbuildOptions = {
        ...config.optimizeDeps?.esbuildOptions,
        define: {
          ...config.optimizeDeps?.esbuildOptions?.define,
          "process.env.NODE_ENV": '"development"',
        },
      };
    }
    return config;
  },
};
export default config;
