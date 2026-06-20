# Sistema de Gestão de Oficina Mecânica

🔧 Sistema completo de gestão para oficinas mecânicas desenvolvido com Vue.js 3, Tailwind CSS, TypeScript e Vite.

## 📋 Sobre o Projeto

Sistema web responsivo para gestão completa de oficinas mecânicas, incluindo controle de clientes, veículos, serviços, peças, ordens de serviço e dashboard com relatórios em tempo real. O projeto utiliza IndexedDB para armazenamento local dos dados.

## 🤖 Desenvolvimento com IA

Este projeto foi desenvolvido com o auxílio de ferramentas de Inteligência Artificial, incluindo GitHub Copilot e outros assistentes de IA, para demonstrar as melhores práticas de desenvolvimento moderno e acelerar o processo de criação.

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **DaisyUI** - Componentes para Tailwind CSS
- **Vite** - Build tool e dev server rápido
- **Composition API** - API moderna do Vue 3 com `<script setup>`
- **IndexedDB** - Banco de dados local do navegador
- **VueUse** - Coleção de utilitários para Vue 3

## 📦 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd oficina-vue-tailwind
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento (localhost:5173)
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run type-check` - Verifica os tipos TypeScript

## 🚀 Funcionalidades Técnicas

### Arquitetura
- **Composition API** com `<script setup>`
- **TypeScript** para tipagem forte
- **Composables** para lógica reutilizável
- **Reactive state** com Vue 3
- **Component communication** via eventos

### Banco de Dados
- **IndexedDB** para persistência local
- **Transações** para operações complexas
- **Validação** de dados em tempo real
- **Backup/Restore** em formato JSON

### Performance
- **Lazy loading** de componentes
- **Computed properties** para otimização
- **Virtual scrolling** para listas grandes
- **Debounced search** em filtros

### UX/UI
- **Loading states** em operações async
- **Error handling** com mensagens claras
- **Confirmation dialogs** para ações críticas
- **Responsive design** mobile-first

## 📁 Estrutura do Projeto

```
oficina-vue-tailwind/
├── public/                    # Arquivos estáticos
│   ├── backup-oficina-demo.json  # Dados de exemplo
│   └── vite.svg
├── src/
│   ├── components/            # Componentes Vue reutilizáveis
│   │   ├── ClientesList.vue      # Gestão de clientes
│   │   ├── VeiculosList.vue      # Gestão de veículos
│   │   ├── ServicosList.vue      # Gestão de serviços
│   │   ├── PecasList.vue         # Gestão de peças/estoque
│   │   ├── OrdemServicoList.vue  # Gestão de ordens de serviço
│   │   └── Dashboard.vue         # Dashboard com relatórios
│   ├── composables/           # Composables Vue
│   │   └── useSorting.ts         # Hook para ordenação de dados
│   ├── services/              # Camada de dados e serviços
│   │   ├── db.ts                 # Gerenciamento IndexedDB
│   │   ├── types.ts              # Tipos TypeScript
│   │   ├── validators.ts         # Validadores de dados
│   │   └── *Service.ts           # Serviços específicos por entidade
│   ├── assets/                # Recursos (imagens, estilos)
│   ├── App.vue                # Componente raiz
│   └── main.ts                # Ponto de entrada da aplicação
├── index.html                 # Template HTML principal
└── package.json               # Dependências e scripts
```

## 🎯 Funcionalidades Implementadas

### 📊 Dashboard
- [x] Visão geral com estatísticas em tempo real
- [x] Gráficos de ordens de serviço por status
- [x] Alertas de estoque baixo
- [x] Relatório de faturamento
- [x] Ordens de serviço recentes
- [x] Exportação e importação de dados
- [x] Reset do banco de dados

### 👥 Gestão de Clientes
- [x] Cadastro, edição e exclusão de clientes
- [x] Validação de dados (nome, email, telefone, CPF)
- [x] Sistema de busca e filtros
- [x] Ordenação por colunas
- [x] Interface responsiva

### 🚗 Gestão de Veículos
- [x] Cadastro de veículos vinculados aos clientes
- [x] Controle de placa, modelo e ano
- [x] Filtros por cliente, placa, modelo
- [x] Integração com ordens de serviço
- [x] Validação de dados

### 🔧 Gestão de Serviços
- [x] Cadastro de tipos de serviços
- [x] Controle de valores e status
- [x] Histórico de serviços por veículo
- [x] Sistema de busca e filtros
- [x] Edição inline de dados

### 📦 Gestão de Peças/Estoque
- [x] Controle completo de estoque
- [x] Alertas de estoque baixo/crítico
- [x] Preços de compra e venda
- [x] Status automático por quantidade
- [x] Integração com ordens de serviço
- [x] Validação de quantidades

### 📋 Ordens de Serviço
- [x] Criação e gestão completa de O.S.
- [x] Vinculação de serviços e peças
- [x] Controle de status (aberta, em andamento, concluída, cancelada)
- [x] Cálculo automático de valores
- [x] Baixa automática no estoque
- [x] Impressão de O.S.
- [x] Compartilhamento via WhatsApp
- [x] Filtros avançados por data, cliente, status
- [x] Numeração automática

### 💾 Persistência de Dados
- [x] Armazenamento local com IndexedDB
- [x] Backup e restauração de dados
- [x] Dados de demonstração inclusos
- [x] Sistema de validação completo

### 🎨 Interface e UX
- [x] Design responsivo e moderno
- [x] Tailwind CSS para estilização
- [x] Componentes reutilizáveis
- [x] Feedback visual (loading, mensagens)
- [x] Modais para formulários
- [x] Ordenação de tabelas
- [x] Sistema de filtros

## 📚 Recursos de Aprendizado

- [Vue.js 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [IndexedDB Guide](https://developer.mozilla.org/pt-BR/docs/Web/API/IndexedDB_API)
- [Vue Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

## 🎯 Características do Sistema

### Gestão Completa
Sistema completo para oficinas mecânicas com todas as funcionalidades necessárias para o dia a dia, desde o cadastro de clientes até a emissão de ordens de serviço.

### Dados Locais
Todos os dados são armazenados localmente no navegador usando IndexedDB, garantindo privacidade e funcionamento offline.

### Interface Moderna
Design responsivo e moderno usando Tailwind CSS, com componentes bem estruturados e experiência de usuário otimizada.

### TypeScript
Código totalmente tipado em TypeScript, garantindo maior segurança e produtividade no desenvolvimento.

## 📊 Exemplo de Uso

1. **Cadastre clientes** na aba correspondente
2. **Adicione veículos** vinculados aos clientes
3. **Configure serviços** e **peças** no estoque
4. **Crie ordens de serviço** combinando serviços e peças
5. **Acompanhe tudo** no dashboard com relatórios em tempo real

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 💖 Apoie este projeto
Se você gostou deste projeto e gostaria de apoiar seu desenvolvimento, considere fazer uma doação. 

- [Apoie através do GitHub Sponsors](https://github.com/sponsors/fvandrad) 

### 🇧🇷 Apoio Direto via Pix
Se você está no Brasil e quer me pagar um café de forma rápida, pode enviar qualquer valor via Pix:
* **Chave Pix (Celular):** `1992891621`
* **Instituição:** NU PAGAMENTOS - IP (Nubank)
* **Nome do Beneficiário:** Fernando Vanderlei de Andrade

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
