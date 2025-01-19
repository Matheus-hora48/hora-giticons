import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "commitHelper.openPicker",
    async () => {
      const commitTypes = [
        {
          label: "✨ feat:",
          description: "Adiciona uma nova funcionalidade ao projeto",
        },
        {
          label: "🐛 fix:",
          description: "Corrige um bug ou problema no código",
        },
        {
          label: "📚 docs:",
          description: "Adiciona ou atualiza a documentação do projeto",
        },
        { label: "🧪 test:", description: "Adiciona ou modifica testes" },
        {
          label: "📦 build:",
          description:
            "Modifica a configuração ou arquivos do sistema de build",
        },
        {
          label: "🚀 perf:",
          description: "Melhora a performance do sistema ou aplicação",
        },
        {
          label: "🎨 style:",
          description:
            "Alterações de estilo como espaçamento, indentação, etc.",
        },
        {
          label: "♻️ refactor:",
          description: "Refatora o código sem alterar a funcionalidade",
        },
        {
          label: "🔧 chore:",
          description:
            "Tarefas de manutenção como atualizar dependências, configurar ferramentas, etc.",
        },
        {
          label: "🧱 ci:",
          description:
            "Alterações no fluxo de integração contínua ou automações",
        },
        {
          label: "🗃️ raw:",
          description:
            "Alterações diretas ou não processadas em arquivos específicos",
        },
        {
          label: "🧹 cleanup:",
          description:
            "Limpeza de código ou remoção de arquivos desnecessários",
        },
        {
          label: "🗑️ remove:",
          description: "Remove funcionalidades ou arquivos do projeto",
        },
      ];

      const selected = await vscode.window.showQuickPick(commitTypes, {
        placeHolder: "Escolha o tipo de commit semântico",
      });

      if (selected) {
        const scope = await vscode.window.showInputBox({
          prompt:
            "Digite o escopo do commit (ex: auth, ui, etc.) - deixe em branco se não houver",
          placeHolder: "Escopo do commit (opcional)",
        });

        const issue = await vscode.window.showInputBox({
          prompt: "Referencie a issue relacionada ao commit (ex: #123)",
          placeHolder: "Referência da issue",
        });

        const footer = await vscode.window.showInputBox({
          prompt:
            "Digite informações adicionais ou footer para o commit (opcional)",
          placeHolder: "Informações adicionais ou footer",
        });

        const commitMessage = await vscode.window.showInputBox({
          prompt: `Mensagem para o commit (${selected.label}):`,
          placeHolder: "Digite a mensagem do commit...",
          validateInput: (text) => {
            return text.trim().length === 0
              ? "A mensagem de commit não pode ser vazia"
              : null;
          },
        });

        if (commitMessage) {
          let finalCommitMessage = `${selected.label}: ${commitMessage}`;

          if (scope) {
            finalCommitMessage = `${selected.label}(${scope}): ${commitMessage}`;
          }

          if (issue) {
            finalCommitMessage += ` #${issue}`;
          }

          if (footer) {
            finalCommitMessage += `\n\n${footer}`;
          }

          const sourceControl = vscode.scm.createSourceControl(
            "git",
            "Git Source Control"
          );

          if (sourceControl && sourceControl.inputBox) {
            sourceControl.inputBox.value = finalCommitMessage;
            vscode.window.showInformationMessage(
              "Mensagem de commit inserida com sucesso!"
            );
          } else {
            vscode.window.showErrorMessage(
              "Não foi possível acessar o Source Control."
            );
          }
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
