"use client";

import { useState } from "react";

export default function ProcessSurveyIntroduction() {
	const [productName, setProductName] = useState("");
	const [projectReference, setProjectReference] = useState("");

	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-6 my-20">
			<div className="space-y-6">
				<div className="border-t border-gray-200 pt-6 space-y-4">
					<h2 className="text-2xl font-bold text-gray-900">
						PROCESS INNOVATION
					</h2>

					<p className="text-gray-700 leading-relaxed">
						The purpose of this survey is to evaluate the level of process
						innovation achieved within the FAIR (Flood, Aware, Inform and
						Resilient) project. By “process innovation,” we mean new or
						significantly improved ways of working, planning, collaborating, or
						engaging stakeholders that strengthen community flood resilience.
						Your responses will help us assess how these processes perform in
						terms of novelty, effectiveness and impact, stakeholder engagement
						and acceptance, efficiency and resource use, scalability and
						adaptability, sustainability and continuity, and monitoring and
						improvement. The results will inform future refinements, support
						funding decisions, and enable the sharing of best practices across
						communities. All responses will be treated confidentially and used
						solely for evaluation purposes.
					</p>

					<div className="space-y-4 pt-4">
						<div className="space-y-2">
							<label
								htmlFor="productName"
								className="block font-semibold text-gray-900"
							>
								The Process Name:
							</label>
							<input
								type="text"
								id="processName"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
								className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
								placeholder="Enter process name"
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
