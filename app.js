const readlineSync = require("readline-sync");
const { mostrarListadoEstudiantes } = require("./lista_estudiantes");

const registrarEstudiante = () => {
  const cantidadEstudiante = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar:"
  );
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiante; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i}:`
    );
    const edad = readlineSync.question(`Ingrese la edad de ${nombre}:`);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }

  mostrarListadoEstudiantes(estudiantes);
};

registrarEstudiante();
