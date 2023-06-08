import { agregarGasto } from "./agregarGasto.js";
import { saveGastos, getGastos } from "./guardarGastos.js";

const crearOperacion = async () => {
	const gasto = await agregarGasto();
	const gastoJson = await getGastos("./gastos.json");
	const nuevoGasto = [...gastoJson, gasto];
	saveGastos("./gastos.json", nuevoGasto);
};

crearOperacion();
