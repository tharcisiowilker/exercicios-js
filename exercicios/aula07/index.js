// ========================================
// Aula 07 — Async/Await e JSON
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula07
// Não mexa no arquivo index.test.js.

// Exercício 1 — objetoParaJSON
export function objetoParaJSON(objeto) {
  // escreva seu código aqui
}

// Exercício 2 — jsonParaObjeto
export function jsonParaObjeto(texto) {
  // escreva seu código aqui
}

// Exercício 3 — clonarObjeto
export function clonarObjeto(objeto) {
  // escreva seu código aqui
}

// ──────────────────────────────────────────────────
// Função auxiliar — simula uma consulta ao banco que demora 100ms
// NÃO MEXA nesta função — ela já está pronta
// ──────────────────────────────────────────────────
function simularConsulta(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Aluno ${id}`, cidade: 'Salinas' })
    }, 100)
  })
}

// Exercício 4 — buscarDados
export async function buscarDados(id) {
  // escreva seu código aqui
}

// Exercício 5 — dividirSeguro
export async function dividirSeguro(a, b) {
  // escreva seu código aqui
}
