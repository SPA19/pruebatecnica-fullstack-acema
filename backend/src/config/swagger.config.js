import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Acema ingenieria API",
			version: "1.0.0",
			description:
				"API prueba tecnica task manager",
		},
		contact: {
			name: "Simon Posada Acosta",
			email: "simon.150@hotmail.com",
		},
		servers: [
			{
				url: `http://localhost:3000`,
				description: "Servidor de desarrollo",
			},
		],
	},
	apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
