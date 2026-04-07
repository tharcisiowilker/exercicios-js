// ========================================
// Testes — Aula 06
// ========================================
// NÃO EDITE ESTE ARQUIVO.
// Rode com: npx vitest run exercicios/aula06

import { describe, test, expect } from 'vitest'
import {
  criarSaudacao,
  filtrarAprovados,
  extrairNomes,
  buscarAluno,
  calcularMedia
} from './index.js'

// ── criarSaudacao ─────────────────────────────────

describe('criarSaudacao', () => {
  test('retorna saudação com o nome', () => {
    expect(criarSaudacao('Maria')).toBe('Olá, Maria!')
  })

  test('funciona com outro nome', () => {
    expect(criarSaudacao('João')).toBe('Olá, João!')
  })

  test('funciona com nome composto', () => {
    expect(criarSaudacao('Ana Clara')).toBe('Olá, Ana Clara!')
  })
})

// ── filtrarAprovados ──────────────────────────────

describe('filtrarAprovados', () => {
  const turma = [
    { nome: 'Ana', nota: 85 },
    { nome: 'Leo', nota: 30 },
    { nome: 'Maria', nota: 60 },
    { nome: 'João', nota: 59 }
  ]

  test('retorna apenas alunos com nota >= 60', () => {
    const resultado = filtrarAprovados(turma)
    expect(resultado).toEqual([
      { nome: 'Ana', nota: 85 },
      { nome: 'Maria', nota: 60 }
    ])
  })

  test('retorna array vazio quando ninguém passou', () => {
    expect(filtrarAprovados([{ nome: 'Leo', nota: 30 }])).toEqual([])
  })

  test('retorna todos quando todos passaram', () => {
    const todos = [{ nome: 'Ana', nota: 100 }, { nome: 'Leo', nota: 60 }]
    expect(filtrarAprovados(todos)).toEqual(todos)
  })

  test('retorna array vazio para array vazio', () => {
    expect(filtrarAprovados([])).toEqual([])
  })
})

// ── extrairNomes ──────────────────────────────────

describe('extrairNomes', () => {
  test('extrai os nomes de uma lista de alunos', () => {
    const alunos = [
      { nome: 'Ana', nota: 85 },
      { nome: 'Leo', nota: 30 },
      { nome: 'Maria', nota: 60 }
    ]
    expect(extrairNomes(alunos)).toEqual(['Ana', 'Leo', 'Maria'])
  })

  test('retorna array vazio para array vazio', () => {
    expect(extrairNomes([])).toEqual([])
  })

  test('funciona com um único aluno', () => {
    expect(extrairNomes([{ nome: 'João', nota: 70 }])).toEqual(['João'])
  })
})

// ── buscarAluno ───────────────────────────────────

describe('buscarAluno', () => {
  const turma = [
    { nome: 'Ana', nota: 85 },
    { nome: 'Leo', nota: 30 },
    { nome: 'Maria', nota: 60 }
  ]

  test('encontra o aluno pelo nome', () => {
    expect(buscarAluno(turma, 'Leo')).toEqual({ nome: 'Leo', nota: 30 })
  })

  test('retorna o primeiro quando há nomes iguais', () => {
    const comDuplicata = [...turma, { nome: 'Ana', nota: 50 }]
    expect(buscarAluno(comDuplicata, 'Ana')).toEqual({ nome: 'Ana', nota: 85 })
  })

  test('retorna undefined quando não encontra', () => {
    expect(buscarAluno(turma, 'Pedro')).toBeUndefined()
  })

  test('retorna undefined para array vazio', () => {
    expect(buscarAluno([], 'Ana')).toBeUndefined()
  })
})

// ── calcularMedia ─────────────────────────────────

describe('calcularMedia', () => {
  test('calcula a média de três notas', () => {
    expect(calcularMedia([80, 60, 90])).toBeCloseTo(76.67, 1)
  })

  test('calcula a média de duas notas', () => {
    expect(calcularMedia([100, 50])).toBe(75)
  })

  test('retorna o próprio valor quando há uma nota só', () => {
    expect(calcularMedia([70])).toBe(70)
  })

  test('retorna 0 para array vazio', () => {
    expect(calcularMedia([])).toBe(0)
  })

  test('calcula média com notas iguais', () => {
    expect(calcularMedia([80, 80, 80])).toBe(80)
  })
})
