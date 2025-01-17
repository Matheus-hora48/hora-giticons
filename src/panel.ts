import * as vscode from "vscode";
import * as path from "path";

export function createCommitPanel(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    "gitIcons",
    "GitIcons Commit",
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.file(path.join(context.extensionPath, "media")),
      ],
    }
  );

  panel.webview.html = getWebviewContent(context, panel.webview);

  panel.webview.onDidReceiveMessage(async (message) => {
    if (message.command === "commit") {
      const commitMessage = message.message;
      console.log("Commit message: ", commitMessage);

      panel.webview.postMessage({
        command: "commitResult",
        message: "Commit realizado com sucesso!",
      });
    }
  });
}

function getWebviewContent(
  context: vscode.ExtensionContext,
  webview: vscode.Webview
): string {
  const stylePath = webview.asWebviewUri(
    vscode.Uri.file(path.join(context.extensionPath, "media", "styles.css"))
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${stylePath}" rel="stylesheet">
        <title>GitIcons Commit</title>
    </head>
    <body>
        <h1>GitIcons: Commit Helper</h1>
        <div class="container">
            <label for="icon">Escolha um ícone:</label>
            <select id="icon">
                <option value="✨">✨ Nova Funcionalidade</option>
                <option value="🐛">🐛 Correção de Bug</option>
                <option value="📝">📝 Documentação</option>
                <option value="🚀">🚀 Desempenho</option>
            </select>

            <label for="scope">Escopo:</label>
            <input id="scope" type="text" placeholder="Ex.: auth, ui">

            <label for="body">Corpo do Commit:</label>
            <textarea id="body" rows="4" placeholder="Descrição detalhada"></textarea>

            <label for="footer">Rodapé:</label>
            <textarea id="footer" rows="2" placeholder="Ex.: BREAKING CHANGE: ..."></textarea>

            <label for="issue">Referência à Issue:</label>
            <input id="issue" type="text" placeholder="Ex.: #123">

            <button id="preview">Pré-visualizar</button>
            <button id="commit">Fazer Commit</button>

            <div id="commitResult"></div>
        </div>

        <script>
            const vscode = acquireVsCodeApi();

            // Evento do botão de Commit
            document.getElementById('commit').addEventListener('click', () => {
                const icon = document.getElementById('icon').value;
                const scope = document.getElementById('scope').value;
                const body = document.getElementById('body').value;
                const footer = document.getElementById('footer').value;
                const issue = document.getElementById('issue').value;

                const commitMessage = \`\${icon} (\${scope}): \${body}\\n\\n\${footer}\\n\\nRefs: \${issue}\`;

                // Enviar a mensagem para o backend (extension.ts)
                vscode.postMessage({ command: 'commit', message: commitMessage });
            });

            document.getElementById('preview').addEventListener('click', () => {
                const icon = document.getElementById('icon').value;
                const scope = document.getElementById('scope').value;
                const body = document.getElementById('body').value;
                const footer = document.getElementById('footer').value;
                const issue = document.getElementById('issue').value;

                const previewMessage = \`\${icon} (\${scope}): \${body}\\n\\n\${footer}\\n\\nRefs: \${issue}\`;

                document.getElementById('commitResult').textContent = previewMessage;
            });
        </script>
    </body>
    </html>`;
}
