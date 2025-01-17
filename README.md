# GitIcons Commit Helper

A **GitIcons Commit Helper** é uma extensão do Visual Studio Code que facilita a criação de mensagens de commit seguindo a convenção de "Commit Semântico". Com essa extensão, você pode adicionar ícones representativos aos seus commits, selecionar um escopo, fornecer uma descrição detalhada e até mesmo referenciar issues diretamente na sua mensagem de commit.

## Funcionalidades

- **Seleção de Ícones**: Escolha entre ícones para diferentes tipos de commit, como:
  - ✨ Nova Funcionalidade
  - 🐛 Correção de Bug
  - 📝 Documentação
  - 🚀 Desempenho
- **Escopo do Commit**: Adicione um escopo para especificar a área afetada pelo commit (exemplo: `auth`, `ui`).
- **Corpo do Commit**: Insira uma descrição detalhada sobre as mudanças realizadas.

- **Rodapé do Commit**: Especifique informações adicionais como "BREAKING CHANGE" ou outras observações.

- **Referência a Issues**: Adicione uma referência à issue relacionada ao commit (exemplo: `#123`).

- **Pré-visualização do Commit**: Visualize como sua mensagem de commit ficará antes de enviá-la.

- **Execução de Commit**: Com um clique, sua mensagem de commit é gerada e pronta para ser usada.

## Instalação

1. Abra o Visual Studio Code.
2. Acesse a seção de **Extensões** (ícone de quadrado no painel lateral).
3. Procure por **GitIcons Commit Helper** e clique em **Instalar**.

## Como Usar

1. Após a instalação, abra o **Command Palette** (Ctrl+Shift+P ou Cmd+Shift+P no macOS).
2. Digite **GitIcons Commit** e selecione a opção **GitIcons Commit**.
3. Uma janela será aberta onde você pode:
   - Escolher o ícone do commit.
   - Inserir o escopo.
   - Escrever a descrição do commit.
   - Inserir o rodapé (opcional).
   - Referenciar uma issue (opcional).
4. Clique em **Pré-visualizar** para ver como sua mensagem de commit ficará.
5. Clique em **Fazer Commit** para enviar sua mensagem de commit para o console.

## Exemplo de Commit Gerado

Abaixo está um exemplo de como uma mensagem de commit gerada pela extensão pode se parecer:

`
✨ (auth): Adiciona nova funcionalidade de login

Adiciona a autenticação com Google.

BREAKING CHANGE: A API de autenticação foi modificada.

Refs: #123
`

## Contribuição

Se você deseja contribuir para esta extensão, fique à vontade para abrir um pull request ou reportar problemas através da aba **Issues**.

## Licença

Esta extensão é licenciada sob a licença [MIT](LICENSE).
