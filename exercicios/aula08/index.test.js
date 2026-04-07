// ========================================
// Testes — Aula 08
// ========================================
// NÃO EDITE ESTE ARQUIVO.
// Rode com: npx vitest run exercicios/aula08

import { describe, test, expect } from 'vitest'
import {
  somar,
  subtrair,
  multiplicar,
  dividir,
  formatarNome
} from './index.js'

// ── somar ─────────────────────────────────────────

describe('somar', () => {
  test('soma dois positivos', () => {
    expect(somar(3, 5)).toBe(8)
  })

  test('soma com zero', () => {
    expect(somar(7, 0)).toBe(7)
  })

  test('soma negativos', () => {
    expect(somar(-3, -2)).toBe(-5)
  })
})

// ── subtrair ──────────────────────────────────────

describe('subtrair', () => {
  test('subtrai dois positivos', () => {
    expect(subtrair(10, 4)).toBe(6)
  })

  test('resultado pode ser negativo', () => {
    expect(subtrair(3, 8)).toBe(-5)
  })

  test('subtrair zero não muda o valor', () => {
    expect(subtrair(5, 0)).toBe(5)
  })
})

// ── multiplicar ───────────────────────────────────

describe('multiplicar', () => {
  test('multiplica dois positivos', () => {
    expect(multiplicar(4, 3)).toBe(12)
  })

  test('multiplicar por zero dá zero', () => {
    expect(multiplicar(99, 0)).toBe(0)
  })

  test('multiplicar por 1 não muda o valor', () => {
    expect(multiplicar(7, 1)).toBe(7)
  })

  test('multiplicar negativos', () => {
    expect(multiplicar(-3, -4)).toBe(12)
  })
})

// ── dividir ───────────────────────────────────────

describe('dividir', () => {
  test('divide dois positivos', () => {
    expect(dividir(10, 2)).toBe(5)
  })

  test('divisão com resultado decimal', () => {
    expect(dividir(10, 3)).toBeCloseTo(3.33, 1)
  })

  test('retorna null quando b é zero', () => {
    expect(dividir(10, 0)).toBeNull()
  })

  test('divide negativo por positivo', () => {
    expect(dividir(-10, 2)).toBe(-5)
  })
})

// ── formatarNome ──────────────────────────────────

describe('formatarNome', () => {
  test('capitaliza nome minúsculo', () => {
    expect(formatarNome('maria')).toBe('Maria')
  })

  test('formata nome todo maiúsculo', () => {
    expect(formatarNome('JOÃO')).toBe('João')
  })

  test('formata nome com letras misturadas', () => {
    expect(formatarNome('aNA')).toBe('Ana')
  })

  test('funciona com nome de uma letra', () => {
    expect(formatarNome('a')).toBe('A')
  })
})

// ── imports funcionando ───────────────────────────

describe('imports', () => {
  test('todas as funções estão importadas e são funções', () => {
    expect(typeof somar).toBe('function')
    expect(typeof subtrair).toBe('function')
    expect(typeof multiplicar).toBe('function')
    expect(typeof dividir).toBe('function')
    expect(typeof formatarNome).toBe('function')
  })
})
