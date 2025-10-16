import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// or wherever you defined it
import { Menu, X } from "lucide-react"; // Optional: install Lucide icons
import { navLinks } from ".";

const TopNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useLocation();

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
			<nav className="px-6 md:px-32">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="text-2xl font-bold  text-gray-700">
						Flood Resilience
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex space-x-6">
						{navLinks.map((link) => (
							<Link
								key={link.id}
								to={link.path}
								className={`capitalize text-sm font-medium transition-all duration-300 ${
									pathname === link.path
										? "text-primary border-b-2 border-primary pb-1"
										: "text-gray-600 hover:text-primary"
								}`}
							>
								{link.title}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button onClick={toggleMenu} className="md:hidden focus:outline-none">
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Nav */}
				{isOpen && (
					<div className="md:hidden flex flex-col gap-4 py-4">
						{navLinks.map((link) => (
							<Link
								key={link.id}
								to={link.path}
								onClick={() => setIsOpen(false)}
								className={`capitalize text-sm font-medium px-2 py-1 rounded ${
									pathname === link.path
										? "text-primary bg-gray-100"
										: "text-gray-700 hover:text-primary"
								}`}
							>
								{link.title}
							</Link>
						))}
					</div>
				)}
			</nav>
		</header>
	);
};

export default TopNav;
