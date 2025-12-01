import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@/icons/index";
import { Close, Delete, Edit, Home, Search } from "@/icons/index";

type IconComponent = React.ComponentType<{
	size?: number;
	"aria-label"?: string;
}>;

// 모든 아이콘을 동적으로 가져와서 배열로 변환
const allIcons = Object.entries(Icons)
	.filter(([, component]) => {
		// React 컴포넌트인지 확인 (함수 또는 객체)
		return (
			typeof component === "function" ||
			(typeof component === "object" && component !== null)
		);
	})
	.map(([name, component]) => ({
		name,
		component: component as IconComponent,
	}));

// Logo를 별도로 분리
const LogoComponent = allIcons.find((icon) => icon.name === "Logo");
const icons = allIcons
	.filter((icon) => icon.name !== "Logo")
	.sort((a, b) => a.name.localeCompare(b.name));

const meta = {
	title: "Icons/Icons",
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
	render: () => (
		<div style={{ padding: "24px" }}>
			{/* Logo를 독립적으로 왼쪽 위에 배치 */}
			{LogoComponent && (
				<div
					style={{
						marginBottom: "32px",
						padding: "16px",
						border: "1px solid #e5e7eb",
						borderRadius: "8px",
						backgroundColor: "#ffffff",
						display: "inline-block",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: "8px",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "flex-start",
								color: "#222530",
							}}
						>
							<LogoComponent.component size={60} />
						</div>
						<span
							style={{
								fontSize: "12px",
								color: "#6b7280",
								textAlign: "left",
							}}
						>
							{LogoComponent.name}
						</span>
					</div>
				</div>
			)}
			{/* 나머지 아이콘들을 그리드로 배치 */}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
					gap: "24px",
				}}
			>
				{icons.map(({ name, component: Icon }) => (
					<div
						key={name}
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "8px",
							padding: "16px",
							border: "1px solid #e5e7eb",
							borderRadius: "8px",
							backgroundColor: "#ffffff",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "64px",
								height: "64px",
								color: "#222530",
							}}
						>
							<Icon size={32} />
						</div>
						<span
							style={{
								fontSize: "12px",
								color: "#6b7280",
								textAlign: "center",
								wordBreak: "break-word",
							}}
						>
							{name}
						</span>
					</div>
				))}
			</div>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				padding: "24px",
			}}
		>
			{icons.slice(0, 3).map(({ name, component: Icon }) => (
				<div
					key={name}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						padding: "16px",
						border: "1px solid #e5e7eb",
						borderRadius: "8px",
						backgroundColor: "#ffffff",
					}}
				>
					<span
						style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}
					>
						{name}
					</span>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "24px",
							flexWrap: "wrap",
						}}
					>
						{[16, 24, 32, 48, 64].map((size) => (
							<div
								key={size}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: `${size + 16}px`,
										height: `${size + 16}px`,
										color: "#222530",
									}}
								>
									<Icon size={size} />
								</div>
								<span style={{ fontSize: "11px", color: "#6b7280" }}>
									{size}px
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	),
};

export const Colors: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				padding: "24px",
			}}
		>
			{icons.slice(0, 3).map(({ name, component: Icon }) => (
				<div
					key={name}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						padding: "16px",
						border: "1px solid #e5e7eb",
						borderRadius: "8px",
						backgroundColor: "#ffffff",
					}}
				>
					<span
						style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}
					>
						{name}
					</span>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "24px",
							flexWrap: "wrap",
						}}
					>
						{[
							{ name: "기본", color: "#222530" },
							{ name: "Primary", color: "#3b82f6" },
							{ name: "Success", color: "#10b981" },
							{ name: "Warning", color: "#f59e0b" },
							{ name: "Error", color: "#ef4444" },
						].map(({ name: colorName, color }) => (
							<div
								key={colorName}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "64px",
										height: "64px",
										color,
									}}
								>
									<Icon size={32} />
								</div>
								<span style={{ fontSize: "11px", color: "#6b7280" }}>
									{colorName}
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	),
};

export const Accessibility: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "24px",
			}}
		>
			<div
				style={{
					padding: "16px",
					border: "1px solid #e5e7eb",
					borderRadius: "8px",
					backgroundColor: "#ffffff",
				}}
			>
				<h3
					style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px" }}
				>
					접근성 레이블이 있는 아이콘
				</h3>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "16px",
						flexWrap: "wrap",
					}}
				>
					<Close size={24} aria-label="닫기" />
					<Search size={24} aria-label="검색" />
					<Home size={24} aria-label="홈으로 이동" />
					<Edit size={24} aria-label="편집" />
					<Delete size={24} aria-label="삭제" />
				</div>
				<p style={{ fontSize: "12px", color: "#6b7280", marginTop: "12px" }}>
					aria-label을 제공하면 스크린 리더에서 읽을 수 있습니다.
				</p>
			</div>
			<div
				style={{
					padding: "16px",
					border: "1px solid #e5e7eb",
					borderRadius: "8px",
					backgroundColor: "#ffffff",
				}}
			>
				<h3
					style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px" }}
				>
					장식용 아이콘 (aria-hidden)
				</h3>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "16px",
						flexWrap: "wrap",
					}}
				>
					<Close size={24} />
					<Search size={24} />
					<Home size={24} />
					<Edit size={24} />
					<Delete size={24} />
				</div>
				<p style={{ fontSize: "12px", color: "#6b7280", marginTop: "12px" }}>
					aria-label을 제공하지 않으면 자동으로 aria-hidden="true"가 설정되어
					장식용으로 처리됩니다.
				</p>
			</div>
		</div>
	),
};

export const CloseIconCustomization: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "32px",
				padding: "24px",
			}}
		>
			{/* 배경과 X 색상 분리 예시 */}
			<div
				style={{
					padding: "16px",
					border: "1px solid #e5e7eb",
					borderRadius: "8px",
					backgroundColor: "#ffffff",
				}}
			>
				<h3
					style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
				>
					배경과 X 색상 분리하기
				</h3>
				<p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "16px" }}>
					CloseIcon을 수정하여 배경과 X를 별도의 path로 분리하면, CSS로 각각
					다른 색상을 지정할 수 있습니다.
				</p>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "24px",
						flexWrap: "wrap",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "8px",
						}}
					>
						{/* 배경 파란색, X 흰색 */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={32}
							height={32}
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fill="#3b82f6"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							/>
							<path
								fill="#ffffff"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.28767 7.225L12 10.9373L15.7123 7.22499L16.7729 8.28565L13.0606 11.998L16.7729 15.7103L15.7123 16.7709L12 13.0586L8.28766 16.7709L7.227 15.7103L10.9393 11.998L7.22701 8.28566L8.28767 7.225Z"
							/>
						</svg>
						<code style={{ fontSize: "11px", color: "#6b7280" }}>
							배경: 파란색, X: 흰색
						</code>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "8px",
						}}
					>
						{/* 배경 초록색, X 흰색 */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={32}
							height={32}
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fill="#10b981"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							/>
							<path
								fill="#ffffff"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.28767 7.225L12 10.9373L15.7123 7.22499L16.7729 8.28565L13.0606 11.998L16.7729 15.7103L15.7123 16.7709L12 13.0586L8.28766 16.7709L7.227 15.7103L10.9393 11.998L7.22701 8.28566L8.28767 7.225Z"
							/>
						</svg>
						<code style={{ fontSize: "11px", color: "#6b7280" }}>
							배경: 초록색, X: 흰색
						</code>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "8px",
						}}
					>
						{/* 배경 빨간색, X 흰색 */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={32}
							height={32}
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fill="#ef4444"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							/>
							<path
								fill="#ffffff"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.28767 7.225L12 10.9373L15.7123 7.22499L16.7729 8.28565L13.0606 11.998L16.7729 15.7103L15.7123 16.7709L12 13.0586L8.28766 16.7709L7.227 15.7103L10.9393 11.998L7.22701 8.28566L8.28767 7.225Z"
							/>
						</svg>
						<code style={{ fontSize: "11px", color: "#6b7280" }}>
							배경: 빨간색, X: 흰색
						</code>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: "8px",
						}}
					>
						{/* 배경 회색, X 파란색 */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={32}
							height={32}
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fill="#e5e7eb"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
							/>
							<path
								fill="#3b82f6"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8.28767 7.225L12 10.9373L15.7123 7.22499L16.7729 8.28565L13.0606 11.998L16.7729 15.7103L15.7123 16.7709L12 13.0586L8.28766 16.7709L7.227 15.7103L10.9393 11.998L7.22701 8.28566L8.28767 7.225Z"
							/>
						</svg>
						<code style={{ fontSize: "11px", color: "#6b7280" }}>
							배경: 회색, X: 파란색
						</code>
					</div>
				</div>
				<pre
					style={{
						marginTop: "16px",
						padding: "12px",
						backgroundColor: "#f9fafb",
						borderRadius: "4px",
						fontSize: "11px",
						color: "#374151",
						overflow: "auto",
					}}
				>
					{`/* CloseIcon을 수정하여 배경과 X를 분리한 예시 */
<svg viewBox="0 0 24 24">
  {/* 원형 배경 */}
  <path fill="#3b82f6" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
  {/* X 모양 */}
  <path fill="#ffffff" d="M8.28767 7.225L12 10.9373L15.7123 7.22499L16.7729 8.28565L13.0606 11.998L16.7729 15.7103L15.7123 16.7709L12 13.0586L8.28766 16.7709L7.227 15.7103L10.9393 11.998L7.22701 8.28566L8.28767 7.225Z" />
</svg>

/* CSS로 제어하려면 */
.close-icon-bg-blue-x-white path:first-child {
  fill: #3b82f6; /* 배경 */
}
.close-icon-bg-blue-x-white path:last-child {
  fill: #ffffff; /* X */
}`}
				</pre>
			</div>
		</div>
	),
};
