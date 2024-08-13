export const formatDate = (fecha) => {
  // Diccionario para convertir los meses en palabras a números
  const meses = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12",
  };

  // Dividir la fecha en sus componentes: día, mes y año
  const [dia, , mesTexto, , año] = fecha.split(" ");

  // Convertir el mes de texto a su equivalente numérico
  const mes = meses[mesTexto.toLowerCase()];

  // Formatear la fecha en el formato deseado
  return `${dia}/${mes}/${año}`;
};
