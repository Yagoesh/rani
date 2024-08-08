export function dateFormat(fechaStr) {
  // Diccionario para la conversión del mes en número al nombre del mes en español
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Convertir la cadena de fecha a un objeto Date
  const fecha = new Date(fechaStr);

  // Obtener el día, mes y año
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();

  // Formatear la fecha en el formato deseado
  return `${dia.toString().padStart(2, "0")} de ${mes} del ${anio}`;
}
