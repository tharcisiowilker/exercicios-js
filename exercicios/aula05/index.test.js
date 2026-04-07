// ========================================
// Testes — Aula 05
// ========================================
// NÃO EDITE ESTE ARQUIVO.
// Rode com: npx vitest run exercicios/aula05

import { describe, test, expect } from 'vitest'
import {
  classificarIdade,
  calcularDesconto,
  verificarAprovacao,
  somarPares,
  contarLetra
} from './index.js'

// ── classificarIdade ──────────────────────────────

describe('classificarIdade', () => {
  test('retorna "criança" para idade menor que 12', () => {
    expect(classificarIdade(5)).toBe('criança')
  })

  test('retorna "criança" para idade 0', () => {
    expect(classificarIdade(0)).toBe('criança')
  })

  test('retorna "criança" para idade 11', () => {
    expect(classificarIdade(11)).toBe('criança')
  })

  test('retorna "adolescente" para idade 12 (limite inferior)', () => {
    expect(classificarIdade(12)).toBe('adolescente')
  })

  test('retorna "adolescente" para idade 15', () => {
    expect(classificarIdade(15)).toBe('adolescente')
  })

  test('retorna "adolescente" para idade 17 (limite superior)', () => {
    expect(classificarIdade(17)).toBe('adolescente')
  })

  test('retorna "adulto" para idade 18 (limite inferior)', () => {
    expect(classificarIdade(18)).toBe('adulto')
  })

  test('retorna "adulto" para idade 30', () => {
    expect(classificarIdade(30)).toBe('adulto')
  })
})

// ── calcularDesconto ──────────────────────────────

describe('calcularDesconto', () => {
  test('aplica desconto de 25% em 100 → 75', () => {
    expect(calcularDesconto(100, 25)).toBe(75)
  })

  test('aplica desconto de 50% em 200 → 100', () => {
    expect(calcularDesconto(200, 50)).toBe(100)
  })

  test('aplica desconto de 10% em 80 → 72', () => {
    expect(calcularDesconto(80, 10)).toBe(72)
  })

  test('aplica desconto de 0% — preço não muda', () => {
    expect(calcularDesconto(150, 0)).toBe(150)
  })

  test('aplica desconto de 100% — preço vira 0', () => {
    expect(calcularDesconto(99, 100)).toBe(0)
  })
})

// ── verificarAprovacao ────────────────────────────

describe('verificarAprovacao', () => {
  test('retorna "aprovado" para nota 60 (limite)', () => {
    expect(verificarAprovacao(60)).toBe('aprovado')
  })

  test('retorna "aprovado" para nota 100', () => {
    expect(verificarAprovacao(100)).toBe('aprovado')
  })

  test('retorna "recuperação" para nota 40 (limite)', () => {
    expect(verificarAprovacao(40)).toBe('recuperação')
  })

  test('retorna "recuperação" para nota 59', () => {
    expect(verificarAprovacao(59)).toBe('recuperação')
  })

  test('retorna "reprovado" para nota 39', () => {
    expect(verificarAprovacao(39)).toBe('reprovado')
  })

  test('retorna "reprovado" para nota 0', () => {
    expect(verificarAprovacao(0)).toBe('reprovado')
  })
})

// ── somarPares ────────────────────────────────────

describe('somarPares', () => {
  test('soma apenas os pares de [1, 2, 3, 4, 5, 6] → 12', () => {
    expect(somarPares([1, 2, 3, 4, 5, 6])).toBe(12)
  })

  test('retorna 0 quando não há pares', () => {
    expect(somarPares([1, 3, 5, 7])).toBe(0)
  })

  test('retorna 0 para array vazio', () => {
    expect(somarPares([])).toBe(0)
  })

  test('soma pares negativos e positivos', () => {
    expect(somarPares([-2, 3, 4, -1])).toBe(2)
  })

  test('funciona com um único par', () => {
    expect(somarPares([8])).toBe(8)
  })
})

// ── contarLetra ───────────────────────────────────

describe('contarLetra', () => {
  test('conta 3 letras "a" em "banana"', () => {
    expect(contarLetra('banana', 'a')).toBe(3)
  })

  test('conta 0 quando a letra não existe no texto', () => {
    expect(contarLetra('hello', 'z')).toBe(0)
  })

  test('conta letras em texto com espaços', () => {
    expect(contarLetra('ana e maria', 'a')).toBe(4)
  })

  test('retorna 0 para texto vazio', () => {
    expect(contarLetra('', 'a')).toBe(0)
  })

  test('diferencia maiúsculas de minúsculas', () => {
    expect(contarLetra('Ana', 'a')).toBe(1)
  })
})
