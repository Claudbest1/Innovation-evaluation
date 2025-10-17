"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import {
	section1bStatements,
	section2Statements,
	section3Statements,
	section4Statements,
	section5Statements,
	section6Statements,
	section7Statements,
} from "./data";
import ProcessSurveyIntroduction from "./survey-introduction-process";

type LikertValue = "1" | "2" | "3" | "4" | "5";

interface FormData {
	q1: string;
	q2: string;
	q31: string;
	q32: string;
	section1b: Record<number, LikertValue>;
	section2: Record<number, LikertValue>;
	section3: Record<number, LikertValue>;
	section4: Record<number, LikertValue>;
	section5: Record<number, LikertValue>;
	section6: Record<number, LikertValue>;
	section7: Record<number, LikertValue>;
}

const ProcessSurveyForm = () => {
	const [processSurveyData] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [, setSuccess] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		q1: "",
		q2: "",
		q31: "",
		q32: "",
		section1b: {},
		section2: {},
		section3: {},
		section4: {},
		section5: {},
		section6: {},
		section7: {},
	});

	// Removed useEffect with onChange as it is not defined or needed

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setSuccess(false);

		try {
			const payload = {
				product: processSurveyData,
			};

			const res = await fetch(
				"https://questionaire-app-1.orender.com/api/questionnaires",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);

			if (!res.ok) throw new Error("Failed to submit survey");

			setSuccess(true);
		} catch (error) {
			console.error("Survey submission failed:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="py-12 px-6 md:px-36">
			<ProcessSurveyIntroduction />
			<Card className="w-full">
				<CardHeader>
					{/* <CardTitle className="text-2xl">Novelty of the process</CardTitle> */}
					<CardDescription className="text-base">
						1 – Strongly Disagree; 2 – Disagree; 3 – Neutral; 4 – Agree and; 5 –
						Strongly Agree
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Section 1a */}
						<div className="space-y-6">
							<h3 className="text-lg font-semibold">
								Section 1a – Novelty of the process
							</h3>

							{/* Question 1 */}
							<div className="space-y-3">
								<Label className="text-base font-medium">
									1. How new or unique do you perceive this process innovation
									to be compared to existing methods currently in use?
								</Label>
								<RadioGroup
									value={formData.q1}
									onValueChange={(value) =>
										setFormData({ ...formData, q1: value })
									}
									className="flex flex-wrap gap-4"
								>
									{[
										{ value: "not-new", label: "Not new at all" },
										{ value: "slightly-new", label: "Slightly new" },
										{ value: "moderately-new", label: "Moderately new" },
										{ value: "very-new", label: "Very new" },
										{ value: "completely-new", label: "Completely new" },
									].map((option) => (
										<div key={option.value} className="flex items-center gap-2">
											<RadioGroupItem
												value={option.value}
												id={`q1-${option.value}`}
											/>
											<Label
												htmlFor={`q1-${option.value}`}
												className="font-normal cursor-pointer"
											>
												{option.label}
											</Label>
										</div>
									))}
								</RadioGroup>
							</div>

							{/* Question 2 */}
							<div className="space-y-3">
								<Label className="text-base font-medium">
									2. Compared with the previous process or similar existing
									processes, how substantial are the changes introduced in its
									design or operation?
								</Label>
								<RadioGroup
									value={formData.q2}
									onValueChange={(value) =>
										setFormData({ ...formData, q2: value })
									}
									className="flex flex-wrap gap-4"
								>
									{[
										{ value: "no-change", label: "No change at all" },
										{ value: "minor-change", label: "Minor change" },
										{ value: "moderate-change", label: "Moderate change" },
										{
											value: "significant-change",
											label: "Significant change",
										},
										{ value: "major-change", label: "Major change" },
									].map((option) => (
										<div key={option.value} className="flex items-center gap-2">
											<RadioGroupItem
												value={option.value}
												id={`q2-${option.value}`}
											/>
											<Label
												htmlFor={`q2-${option.value}`}
												className="font-normal cursor-pointer"
											>
												{option.label}
											</Label>
										</div>
									))}
								</RadioGroup>
							</div>
						</div>

						{/* Section 1b */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 1b – Novelty of the process
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section1bStatements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section1b-${statement.id}`}
																value={value}
																checked={
																	formData.section1b[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section1b: {
																			...formData.section1b,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 2 – Effectiveness & Impact */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 2 – Effectiveness & Impact
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section2Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section2-${statement.id}`}
																value={value}
																checked={
																	formData.section2[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section2: {
																			...formData.section2,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 3 – Stakeholder Engagement & Acceptance */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 3 – Stakeholder Engagement & Acceptance
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section3Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section3-${statement.id}`}
																value={value}
																checked={
																	formData.section3[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section3: {
																			...formData.section3,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 4 – Efficiency & Resource Use */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 4 – Efficiency & Resource Use
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section4Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section4-${statement.id}`}
																value={value}
																checked={
																	formData.section4[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section4: {
																			...formData.section4,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 5 – Sustainability & Continuity */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 5 – Sustainability & Continuity
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section5Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section5-${statement.id}`}
																value={value}
																checked={
																	formData.section5[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section5: {
																			...formData.section5,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 6 – Scalability & Adaptability */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 6 – Scalability & Adaptability
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section6Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section6-${statement.id}`}
																value={value}
																checked={
																	formData.section6[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section6: {
																			...formData.section6,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 7 – Monitoring & Improvement */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 7 – Monitoring & Improvement
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section7Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section7-${statement.id}`}
																value={value}
																checked={
																	formData.section7[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section7: {
																			...formData.section7,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 8 - Open-Ended Questions */}
						<div className="space-y-6 border-t pt-8">
							<h3 className="text-lg font-semibold">
								Section 8 – Open-Ended Questions (Optional)
							</h3>

							{/* Question 31 */}
							<div className="space-y-3">
								<Label htmlFor="q31" className="text-base font-medium">
									31. What aspects of the process do you consider most
									innovative?
								</Label>
								<textarea
									id="q31"
									value={formData.q31}
									onChange={(e) =>
										setFormData({ ...formData, q31: e.target.value })
									}
									placeholder="Please provide your response here..."
									className="w-full min-h-32 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
								/>
							</div>

							{/* Question 32 */}
							<div className="space-y-3">
								<Label htmlFor="q32" className="text-base font-medium">
									32. How could the process be improved to enhance its
									effectiveness, sustainability, or adaptability?
								</Label>
								<textarea
									id="q32"
									value={formData.q32}
									onChange={(e) =>
										setFormData({ ...formData, q32: e.target.value })
									}
									placeholder="Please provide your response here..."
									className="w-full min-h-32 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
								/>
							</div>
						</div>

						<div className="flex justify-end pt-4">
							<Button
								type="submit"
								size="lg"
								disabled={submitting}
								variant="default"
							>
								{submitting ? "Submitting..." : "Submit Survey"}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProcessSurveyForm;
