import InnovationRadar from "./innovation-radar";

const Home = () => {
	return (
		<main className="min-h-screen bg-background py-12 px-4 flex items-center justify-center">
			<div className="w-full max-w-5xl space-y-12 flex flex-col items-center">
				<InnovationRadar />
			</div>
		</main>
	);
};

export default Home;
