"use client";

export default function InnovationRadar() {
	const centerX = 200;
	const centerY = 200;
	const maxRadius = 180;

	// Define the concentric circles with their radii and colors
	const circles = [
		{ radius: maxRadius, color: "#f2f2f2", label: "very high" },
		{ radius: maxRadius * 0.85, color: "#ccf9fb", label: "high" },
		{ radius: maxRadius * 0.7, color: "#deeaf8", label: "moderate" },
		{ radius: maxRadius * 0.55, color: "#E8D4B8", label: "low" },
		{ radius: maxRadius * 0.4, color: "#fff1cc", label: "very low" },

		{ radius: maxRadius * 0.1, color: "#fbe6d5", label: "0" },
	];

	return (
		<div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg">
			<svg
				viewBox="0 0 400 400"
				className="w-full h-auto"
				role="img"
				aria-label="Innovation Radar Chart showing Product Innovation and Process Innovation"
			>
				{/* Draw concentric circles from largest to smallest */}
				{circles.map((circle, index) => (
					<g key={index}>
						<circle
							cx={centerX}
							cy={centerY}
							r={circle.radius}
							fill={circle.color}
							stroke="#333"
							strokeWidth="1.5"
						/>
						{/* Add labels around the circles */}
						{index < circles.length - 1 && (
							<>
								<text
									x={centerX + circle.radius * 0.7}
									y={centerY - circle.radius * 0.7}
									fontSize="10"
									fill="#a70303ff"
									textAnchor="end"
									className="font-sans font-bold"
								>
									{circle.label}
								</text>
							</>
						)}
					</g>
				))}

				{/* Center point */}
				<circle cx={centerX} cy={centerY} r="3" fill="#333" />
				<text
					x={centerX}
					y={centerY + 5}
					fontSize="12"
					fill="#333"
					textAnchor="middle"
					className="font-sans font-semibold"
				>
					0
				</text>

				{/* Diagonal line from bottom-left to top-right */}
				<line
					x1={centerX - maxRadius * 0.85}
					y1={centerY + maxRadius * 0.85}
					x2={centerX + maxRadius * 0.85}
					y2={centerY - maxRadius * 0.85}
					stroke="#333"
					strokeWidth="2"
				/>

				{/* Arrow heads for the diagonal line */}
				<polygon
					points={`${centerX + maxRadius * 0.85},${
						centerY - maxRadius * 0.85
					} ${centerX + maxRadius * 0.82},${centerY - maxRadius * 0.78} ${
						centerX + maxRadius * 0.78
					},${centerY - maxRadius * 0.82}`}
					fill="#333"
				/>
				<polygon
					points={`${centerX - maxRadius * 0.85},${
						centerY + maxRadius * 0.85
					} ${centerX - maxRadius * 0.82},${centerY + maxRadius * 0.78} ${
						centerX - maxRadius * 0.78
					},${centerY + maxRadius * 0.82}`}
					fill="#333"
				/>
			</svg>

			{/* Labels outside the chart */}
			<div className="relative -mt-8">
				<div className="absolute left-0 top-0">
					<p className="text-lg font-bold text-blue-800 uppercase tracking-wide">
						Product
						<br />
						Innovation
					</p>
				</div>
				<div className="absolute right-0 bottom-0">
					<p className="text-lg font-bold text-blue-800 uppercase tracking-wide text-right">
						Process
						<br />
						Innovation
					</p>
				</div>
			</div>
		</div>
	);
}
