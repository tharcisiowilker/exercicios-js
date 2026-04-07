# Exercícios de JavaScript

Repositório de exercícios da disciplina **Desenvolvimento Web** — IFNMG Campus Salinas.

## Como usar

1. Clique em **"Use this template"** → **"Create a new repository"** no GitHub
2. Abra seu repositório no **Codespaces**
3. Instale as dependências:

```bash
npm install
```

4. Cada aula tem uma pasta em `exercicios/`. Abra o arquivo `index.js` da aula e implemente as funções (o corpo está vazio — você preenche)
5. Rode os testes para verificar suas respostas:

```bash
# Testes de uma aula específica
npx vitest run exercicios/aula05

# Todos os testes de uma vez
npm test
```

6. Quando todos os testes passarem, faça o commit:

```bash
git add .
git commit -m "feat: resolve exercícios da aula XX"
git push
```

## Estrutura

```
exercicios/
├── aula05/          ← Fundamentos: variáveis, tipos, if/else, for
│   ├── index.js     ← VOCÊ EDITA — implemente as funções
│   └── index.test.js
├── aula06/          ← Funções e Arrays: map, filter, find, forEach
│   ├── index.js
│   └── index.test.js
├── aula07/          ← Async/Await e JSON
│   ├── index.js
│   └── index.test.js
└── aula08/          ← ES Modules: import/export
    ├── index.js
    ├── index.test.js
    └── utils/
        ├── matematica.js
        └── texto.js
```

## Regras

- **Edite apenas os arquivos `index.js`** (e os de `utils/` na aula 08)
- **Não mexa nos arquivos `.test.js`** — eles validam suas respostas
- Use `return` para devolver valores, não apenas `console.log`
- Todo o código usa **ES Modules** (`import`/`export`) — nunca `require`
