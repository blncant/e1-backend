import inquirer from "inquirer";

const questions = [
	{
		type: "number",
		name: "monto",
		message: "Ingrese el monto del gasto",
	},
	{
		type: "input",
		name: "descripcion",
		message: "Ingrese el nombre del gasto",
	},
	{
		type: "input",
		name: "categoria",
		message: "Ingrese la categoria del gasto",
	},
	{
		type: "list",
		name: "cuenta",
		message: "Selecciona el medio de pago utilizado",
		choices: [
			{ value: 1, name: "Billetera" },
			{ value: 2, name: "Debito" },
			{ value: 3, name: "Credito" },
		],
	},
	{
		type: "date",
		name: "fecha",
		message: "Ingrese la fecha del gasto",
	},
];

export const agregarGasto = () => {
	return new Promise((resolve, reject) => {
		try {
			inquirer.prompt(questions).then((res) => {
				resolve(res);
			});
		} catch (error) {
			reject(error);
		}
	});
};
