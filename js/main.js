// Función para calcular el pago mensual en cuotas
function calcularPagoCuotas(monto, cuotas) {
  // Verificar que el número de cuotas sea válido
  if (cuotas <= 0 || cuotas % 1 !== 0) {
      return "El número de cuotas debe ser un entero positivo.";
  }

  // Calcular el pago mensual aproximado
  let pagoMensual = Math.ceil(monto / cuotas);

  // Verificar si el pago mensual es menor que el monto prestado
  if (pagoMensual * cuotas < monto) {
      let intereses = monto - (pagoMensual * cuotas);
      pagoMensual += intereses / cuotas;
  }

  return pagoMensual;
}

// Función para mostrar el plan de pagos
function mostrarPlanPagos(monto, cuotas) {
  // Verificar que el monto y el número de cuotas sean válidos
  if (monto <= 0 || cuotas <= 0 || cuotas % 1 !== 0) {
      return "El monto y el número de cuotas deben ser valores numéricos positivos.";
  }

  // Calcular el pago mensual
  let pagoMensual = calcularPagoCuotas(monto, cuotas);

  // Calcular intereses adicionales
  let intereses = monto - (pagoMensual * cuotas);

  // Mostrar el plan de pagos
  let planPagos = "Plan de pagos:\n";
  for (let i = 1; i <= cuotas; i++) {
      let cuota = pagoMensual;
      if (i === cuotas) {
          cuota += intereses;
      }
      planPagos += `Cuota ${i}: $${cuota.toFixed(0)}\n`;
  }

  return planPagos;
}

// Obtener el monto del préstamo del usuario
let montoPrestamo = Number(prompt("Ingrese el monto del préstamo:"));

// Obtener el número de cuotas del usuario
let numeroCuotas = Number(prompt("Ingrese el número de cuotas:"));

// Mostrar el plan de pagos
alert(mostrarPlanPagos(montoPrestamo, numeroCuotas));
