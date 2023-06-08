import fs from "fs";

export const getGastos = (file) => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, "utf-8", (error, data) => {
			if (error) {
				reject(error);
				return;
			}
			if (data) {
				resolve(JSON.parse(data));
			} else {
				resolve([]);
			}
		});
	});
};

export const saveGastos = (file, newData) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, JSON.stringify(newData), (error) => {
			if (error) {
				reject(error);
			} else {
				resolve("Se guardo correctamente.");
			}
		});
	});
};
