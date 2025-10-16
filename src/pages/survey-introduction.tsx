"use client";

import { useState } from "react";

export default function SurveyIntroduction() {
	const [productName, setProductName] = useState("");
	const [projectReference, setProjectReference] = useState("");

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-6 my-20">
			<div className="space-y-6">
				<h1 className="text-3xl font-bold text-gray-900 text-center">
					EVALUATION OF INNOVATION IN FAIR COMMUNITY FLOOD RESILIENCE PROJECTS
				</h1>

				<div className="space-y-4 text-gray-700 leading-relaxed">
					<p>
						This survey aims to evaluate the innovation of FAIR projects focused
						on community flood resilience. For clarity and ease of
						understanding, the innovations within the FAIR project have been
						grouped into two main categories:{" "}
						<strong>Product Innovation</strong> and{" "}
						<strong>Process Innovation</strong>.
					</p>

					<p>
						This does not imply that other forms of innovation, such as
						technological, environmental, green, supply chain or open innovation
						- do not exist. Rather, most of these can be considered subtypes or
						elements of either product or process innovation. Instead of
						creating a long, overlapping list of innovation types (which can
						sometimes be difficult to distinguish), we have chosen to keep the
						framework simple.
					</p>

					<p className="font-semibold text-gray-900">
						So, here's how we define the 2 types of Innovation:
					</p>

					<div className="bg-blue-50 border-l-4 border-blue-500 p-4 space-y-2">
						<p>
							<strong className="text-blue-900">Product innovation</strong>{" "}
							refers to the development of entirely new products or significant
							improvements to existing products in terms of their design,
							features, performance, or usability.
						</p>
					</div>

					<div className="bg-green-50 border-l-4 border-green-500 p-4 space-y-2">
						<p>
							<strong className="text-green-900">Process innovation</strong>{" "}
							refers to the introduction of new or significantly improved
							methods for producing, delivering, or managing goods and services.
							It focuses on changing how things are done, streamlining
							operations, adopting new technologies, or creating more effective
							systems, in order to improve efficiency, quality, or outcomes.
						</p>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-6 space-y-4">
					<h2 className="text-2xl font-bold text-gray-900">
						PRODUCT INNOVATION
					</h2>

					<p className="text-gray-700 leading-relaxed">
						The purpose of this survey is to evaluate the level of product
						innovation achieved within the FAIR (Flood, Aware, Inform and
						Resilient) projects. By "product innovation," we mean new or
						significantly improved tools, technologies, or services designed to
						strengthen community flood resilience. Your responses will help us
						understand how these products perform in terms of novelty,
						effectiveness, user acceptance, scalability, sustainability, and
						impact. The findings will guide future improvements, support funding
						decisions, and enable us to share best practices across communities.
						All responses will be kept confidential and used only for evaluation
						purposes.
					</p>

					<div className="space-y-4 pt-4">
						<div className="space-y-2">
							<label
								htmlFor="productName"
								className="block font-semibold text-gray-900"
							>
								The Product Name:
							</label>
							<input
								type="text"
								id="productName"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
								placeholder="Enter product name"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="projectReference"
								className="block font-semibold text-gray-900"
							>
								Project of reference:
							</label>
							<input
								type="text"
								id="projectReference"
								value={projectReference}
								onChange={(e) => setProjectReference(e.target.value)}
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
								placeholder="Enter project reference"
							/>
						</div>
					</div>

					<div className="bg-gray-50 border border-gray-200 rounded-md p-4 mt-6">
						<p className="text-gray-700 text-sm">
							The questionnaire is divided into a number of short sections and
							the questions only require ticks in the relevant boxes. For each
							statement, please indicate your level of agreement using the scale
							below:
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
