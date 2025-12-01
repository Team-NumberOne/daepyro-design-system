import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    dts({
      insertTypesEntry: true,
      exclude: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "DesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "styles.css";
          }
          return assetInfo.name || "asset";
        },
      },
    },
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: [
      "@storybook/addon-docs",
      "@storybook/addon-docs/blocks",
      "@storybook/addon-vitest/internal/setup-file",
      "@storybook/addon-vitest/internal/global-setup",
      "@storybook/addon-vitest/internal/test-utils",
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.stories.{ts,tsx}",
        "**/*.test.{ts,tsx}",
        "**/*.config.{ts,js}",
        ".storybook/",
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom",
          include: ["**/*.test.{ts,tsx}"],
          exclude: ["**/*.stories.{ts,tsx}", "node_modules/**"],
          setupFiles: ["./vitest.setup.ts"],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
