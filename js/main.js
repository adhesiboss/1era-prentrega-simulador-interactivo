// Funcion para calcular el pago mensual en cuotas
function calcularPagoCuotas(monto, cuotas) {
    // Verificar que el numero de cuotas sea correcto
    if (cuotas <= 0 || cuotas % 1 !== 0) {
        return "El número de cuotas debe ser un numero  positivo.";
    }

    // Calculo del pago mensual
    let pagoMensual = monto / cuotas;
    return pagoMensual;
}

// Funcion para mostrar el plan de pagos
function mostrarPlanPagos(monto, cuotas) {
    // Verificar que el monto y el numero de cuotas sean correcto
    if (monto <= 0 || cuotas <= 0 || cuotas % 1 !== 0) {
        return "El monto y el número de cuotas deben ser valores numéricos positivos.";
    }

    // Calculo del pago mensual
    let pagoMensual = calcularPagoCuotas(monto, cuotas);

    // Muestra el plan de pagos
    let planPagos = "Plan de pagos:\n";
    for (let i = 1; i <= cuotas; i++) {
        planPagos += `Cuota ${i}: $${pagoMensual}\n`;
    }

    return planPagos;
}

// Anotar el monto del prestamo del usuario
let montoPrestamo = Number(prompt("Ingrese el monto del préstamo:"));

// Anotar el numero de cuotas del usuario
let numeroCuotas = Number(prompt("Ingrese el número de cuotas:"));

// Muestra el plan de pagos
alert(mostrarPlanPagos(montoPrestamo, numeroCuotas));
