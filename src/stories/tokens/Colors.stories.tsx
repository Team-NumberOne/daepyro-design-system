import type { Meta, StoryObj } from "@storybook/react";
import { type ColorPalette, colors } from "@/tokens/colors";

const meta = {
  title: "Design Tokens/Colors",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "디자인 시스템의 색상 팔레트입니다. 모든 색상은 일관된 명명 규칙과 타입 안전성을 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// 색상 팔레트 컴포넌트
function ColorPaletteView({
  palette,
  paletteName,
}: {
  palette: Record<string | number, string>;
  paletteName: string;
}) {
  const shades = Object.entries(palette);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "1rem",
          textTransform: "capitalize",
        }}
      >
        {paletteName}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "0.5rem",
        }}
      >
        {shades.map(([shade, color]) => {
          const shadeNum = parseInt(shade, 10);
          const isLight = !Number.isNaN(shadeNum) && shadeNum < 500;
          const textColor = isLight ? "#000" : "#fff";

          return (
            <div
              key={shade}
              style={{
                backgroundColor: color,
                borderRadius: "8px",
                padding: "1rem",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: textColor,
                    marginBottom: "0.25rem",
                  }}
                >
                  {shade}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: textColor,
                    opacity: 0.8,
                    fontFamily: "monospace",
                  }}
                >
                  {color}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const AllColors: Story = {
  render: () => {
    const palettes: ColorPalette[] = ["base", "grey", "orange", "green", "red"];

    return (
      <div>
        {palettes.map((paletteName) => (
          <ColorPaletteView
            key={paletteName}
            palette={colors[paletteName]}
            paletteName={paletteName}
          />
        ))}
      </div>
    );
  },
};
