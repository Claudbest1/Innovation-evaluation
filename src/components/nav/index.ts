import routesPath from "../../routes/routesPath";

const { HOME, PRODUCTFORM, PROCESSFORM } = routesPath;

export const navLinks = [
	{
		id: 1,
		title: "home",

		path: HOME,
	},
	{
		id: 2,
		title: "Product form",
		path: PRODUCTFORM,
	},
	{
		id: 3,
		title: "Process form",
		path: PROCESSFORM,
	},
];
