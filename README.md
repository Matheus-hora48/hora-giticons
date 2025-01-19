# GitIcons Commit Helper

A **GitIcons Commit Helper** é uma extensão para o Visual Studio Code que simplifica a criação de mensagens de commit seguindo a convenção de **Commit Semântico**. Com esta ferramenta, você pode adicionar ícones representativos aos seus commits, selecionar escopos, fornecer descrições detalhadas e até mesmo referenciar issues diretamente na mensagem.

---

## 📋 Funcionalidades

- **Seleção de Ícones**: Escolha entre diversos ícones que representam diferentes tipos de commit, como:
  - ✨ Nova Funcionalidade
  - 🐛 Correção de Bug
  - 📝 Documentação
  - 🚀 Desempenho
  - 🎨 Estilo de Código
  - ♻️ Refatoração
  - 🔧 Configuração de Build
  - 🧪 Testes
  - E muito mais!
- **Escopo do Commit**: Especifique o escopo do commit para indicar a área do projeto que foi modificada (exemplo: `auth`, `ui`, `api`).

- **Corpo do Commit**: Descreva detalhadamente as alterações feitas no commit.

- **Rodapé do Commit**: Adicione informações complementares, como:

  - `BREAKING CHANGE` para indicar mudanças significativas.
  - Qualquer observação importante relacionada ao commit.

- **Referência a Issues**: Inclua automaticamente referências às issues relacionadas ao commit (exemplo: `#123`).

- **Pré-visualização da Mensagem**: Visualize como a mensagem final do commit será exibida antes de enviá-la.

- **Integração com o Source Control**: A mensagem de commit é automaticamente preenchida no campo de commit do Visual Studio Code.

---

## 📦 Instalação

1. Abra o Visual Studio Code.
2. Vá para a seção de **Extensões** no painel lateral (ícone de quadrado ou use `Ctrl+Shift+X`).
3. Pesquise por **GitIcons Commit Helper**.
4. Clique em **Instalar**.

---

## 🚀 Como Usar

1. Certifique-se de que seu projeto está conectado a um repositório Git.
2. Abra o **Command Palette** (`Ctrl+Shift+P` no Windows/Linux ou `Cmd+Shift+P` no macOS).
3. Digite `GitIcons Commit` e selecione o comando **GitIcons Commit Helper**.
4. Siga os passos no assistente interativo:
   - Escolha o tipo de commit (ícone).
   - Insira o escopo (opcional).
   - Adicione uma descrição detalhada para o commit.
   - Inclua informações adicionais ou footer (opcional).
   - Referencie uma issue (opcional).
5. A mensagem será automaticamente preenchida no campo de commit do Source Control.
6. Verifique a mensagem no painel de controle do Git e envie o commit.

---

## 💡 Exemplo de Commit Gerado

```plaintext
✨ feat(auth): Adiciona nova funcionalidade de login

Adiciona autenticação via Google no sistema.

BREAKING CHANGE: A API de autenticação foi modificada.

Refs: #123
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você encontrou algum problema ou deseja sugerir uma melhoria, siga os passos abaixo:

1. Crie uma **issue** na aba de problemas do repositório.
2. Faça um **fork** do projeto.
3. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
4. Envie um pull request com suas alterações.

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Linguagem utilizada para desenvolver a extensão.
- **VS Code API**: Para integração direta com o editor e funcionalidades do Git.

---

## 🔒 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usá-lo e adaptá-lo conforme necessário.

---

## 🌟 Agradecimentos

Obrigado por usar a **GitIcons Commit Helper**! Se você gostou da extensão, considere deixar uma avaliação no marketplace do Visual Studio Code. 🙌
