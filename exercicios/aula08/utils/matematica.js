// ========================================
// Aula 08 — Named Exports
// ========================================
// Implemente as quatro funções abaixo e exporte cada uma com "export".
// Todas recebem dois números (a, b) e retornam o resultado da operação.

export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}