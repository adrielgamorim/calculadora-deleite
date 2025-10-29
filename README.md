# Calculadora Deleite 🍰

Aplicação web para calcular preços de bolos baseado em ingredientes, conjuntos e embalagens. Desenvolvida com React + TypeScript + Vite, usando Firebase para autenticação e armazenamento de dados.

## 🚀 Funcionalidades

- **Gestão de Ingredientes**: Cadastro de ingredientes com preço, quantidade e unidade
- **Conjuntos de Ingredientes**: Agrupe ingredientes relacionados para facilitar criação de receitas
- **Receitas de Bolos**: Crie bolos usando ingredientes e conjuntos, com quantidades específicas
- **Calculadora de Preços**: Calcule automaticamente:
  - Preço base (custo dos ingredientes)
  - Preço com embalagem (por tamanho: 15cm, 25cm, 35cm)
  - Preço convertido (com margem de lucro)
  - Preço por fatia
- **Dashboard com Estatísticas**: 
  - Visão geral com métricas
  - Top 3 bolos mais caros
  - Ingredientes e conjuntos mais usados
  - Distribuição por tamanho
- **Busca e Filtros**: Procure por ingredientes, conjuntos e bolos
- **Filtro de Colunas**: Personalize quais colunas exibir na calculadora
- **Autenticação Google**: Login seguro com lista de emails autorizados
- **PWA**: Funciona offline após primeira visita

## 🛠️ Tecnologias

- **Frontend**: React 19.1, TypeScript 5.8, Vite 7
- **Backend**: Firebase (Firestore + Authentication)
- **Roteamento**: React Router DOM 7
- **Componentes**: react-select, react-icons
- **Estilização**: CSS Modules
- **Deploy**: GitHub Pages

## 📁 Estrutura do Projeto

```
src/
├── auth/           # Contexto e provider de autenticação
├── components/     # Componentes reutilizáveis
├── data/           # Constantes e configurações
├── helpers/        # Funções utilitárias
├── hooks/          # Hooks customizados
├── models/         # Interfaces TypeScript
├── pages/          # Páginas da aplicação
│   ├── Dashboard/  # Dashboard com calculadora e overview
│   ├── Bundles.tsx
│   ├── Cakes.tsx
│   ├── Config.tsx
│   └── Ingredients.tsx
├── requests/       # Camada de comunicação com Firebase
└── styles/         # Arquivos CSS
```

## 🔐 Autenticação

A aplicação usa Google OAuth através do Firebase. O acesso é restrito a emails listados na variável de ambiente `VITE_WHITELIST` (separados por vírgula).

## 🧮 Cálculo de Preços

O sistema calcula preços seguindo esta lógica:

1. **Preço Base**: Soma dos custos de ingredientes diretos + ingredientes dos conjuntos
2. **Preço com Embalagem**: Preço base + custo de embalagem (varia por tamanho)
3. **Preço Convertido**: Aplica margem de lucro configurável
4. **Preço por Fatia**: Divide por número de fatias (15cm: 8, 25cm: 12, 35cm: 16)

## 📝 Licença

Este projeto é privado e de uso exclusivo da Calculadora D'Leite.

## 👥 Autor

Desenvolvido por Adriel GImenes

---

**Versão atual**: Veja no footer da aplicação ou em `package.json`

