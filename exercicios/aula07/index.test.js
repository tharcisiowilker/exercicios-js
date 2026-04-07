// ========================================
// Testes — Aula 07
// ========================================
// NÃO EDITE ESTE ARQUIVO.
// Rode com: npx vitest run exercicios/aula07

import { describe, test, expect } from 'vitest'
import {
  objetoParaJSON,
  jsonParaObjeto,
  clonarObjeto,
  buscarDados,
  dividirSeguro
} from './index.js'

// ── objetoParaJSON ────────────────────────────────

describe('objetoParaJSON', () => {
  test('converte objeto simples para JSON', () => {
    expect(objetoParaJSON({ nome: 'Maria' })).toBe('{"nome":"Maria"}')
  })

  test('converte objeto com múltiplas propriedades', () => {
    const obj = { nome: 'Maria', cidade: 'Salinas' }
    const json = objetoParaJSON(obj)
    // Parse de volta para comparar sem depender da ordem das chaves
    expect(JSON.parse(json)).toEqual(obj)
  })

  test('converte objeto com número', () => {
    const obj = { id: 1, nome: 'Maria' }
    const json = objetoParaJSON(obj)
    expect(JSON.parse(json)).toEqual(obj)
  })

  test('converte array para JSON', () => {
    expect(objetoParaJSON([1, 2, 3])).toBe('[1,2,3]')
  })
})

// ── jsonParaObjeto ────────────────────────────────

describe('jsonParaObjeto', () => {
  test('converte JSON simples para objeto', () => {
    expect(jsonParaObjeto('{"nome":"Maria"}')).toEqual({ nome: 'Maria' })
  })

  test('converte JSON com múltiplas propriedades', () => {
    const texto = '{"nome":"Maria","cidade":"Salinas"}'
    expect(jsonParaObjeto(texto)).toEqual({ nome: 'Maria', cidade: 'Salinas' })
  })

  test('converte JSON de array', () => {
    expect(jsonParaObjeto('[1,2,3]')).toEqual([1, 2, 3])
  })

  test('converte JSON com booleano e null', () => {
    const texto = '{"ativo":true,"foto":null}'
    expect(jsonParaObjeto(texto)).toEqual({ ativo: true, foto: null })
  })
})

// ── clonarObjeto ──────────────────────────────────

describe('clonarObjeto', () => {
  test('retorna um objeto com os mesmos valores', () => {
    const original = { nome: 'Maria', nota: 85 }
    expect(clonarObjeto(original)).toEqual(original)
  })

  test('a cópia é independente — alterar a cópia não muda o original', () => {
    const original = { nome: 'Maria', nota: 85 }
    const copia = clonarObjeto(original)
    copia.nome = 'João'
    expect(original.nome).toBe('Maria')
  })

  test('funciona com objetos aninhados', () => {
    const original = { aluno: { nome: 'Ana', cidade: 'Salinas' } }
    const copia = clonarObjeto(original)
    copia.aluno.nome = 'Leo'
    expect(original.aluno.nome).toBe('Ana')
  })
})

// ── buscarDados ───────────────────────────────────

describe('buscarDados', () => {
  test('retorna os dados do aluno com o id informado', async () => {
    const resultado = await buscarDados(1)
    expect(resultado).toEqual({ id: 1, nome: 'Aluno 1', cidade: 'Salinas' })
  })

  test('funciona com outro id', async () => {
    const resultado = await buscarDados(42)
    expect(resultado).toEqual({ id: 42, nome: 'Aluno 42', cidade: 'Salinas' })
  })

  test('retorna uma Promise', () => {
    const resultado = buscarDados(1)
    expect(resultado).toBeInstanceOf(Promise)
  })
})

// ── dividirSeguro ─────────────────────────────────

describe('dividirSeguro', () => {
  test('retorna o resultado da divisão', async () => {
    expect(await dividirSeguro(10, 2)).toBe(5)
  })

  test('retorna resultado com decimais', async () => {
    expect(await dividirSeguro(10, 3)).toBeCloseTo(3.33, 1)
  })

  test('lança erro quando b é zero', async () => {
    await expect(dividirSeguro(10, 0)).rejects.toThrow('Divisão por zero')
  })

  test('funciona com números negativos', async () => {
    expect(await dividirSeguro(-10, 2)).toBe(-5)
  })

  test('retorna uma Promise', () => {
    const resultado = dividirSeguro(10, 2)
    expect(resultado).toBeInstanceOf(Promise)
  })
})
