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
            <div id="step1" class="step">
                <label for="type">Tipo de Commit:</label>
                <select id="type">
                    <option value="feat">✨ feat: Nova funcionalidade</option>
                    <option value="fix">🐛 fix: Correção de bug</option>
                    <option value="docs">📝 docs: Documentação</option>
                    <option value="test">⚙️ test: Testes</option>
                    <option value="build">🏗️ build: Build</option>
                    <option value="perf">🚀 perf: Desempenho</option>
                    <option value="style">🎨 style: Estilo do código</option>
                    <option value="refactor">🔨 refactor: Refatoração</option>
                    <option value="chore">🔧 chore: Tarefas</option>
                    <option value="ci">🤖 ci: Integração contínua</option>
                    <option value="raw">📄 raw: Arquivos e dados</option>
                    <option value="cleanup">🧹 cleanup: Limpeza de código</option>
                    <option value="remove">❌ remove: Remoção</option>
                </select>
                <button id="next1">Próximo</button>
            </div>

            <div id="step2" class="step hidden">
                <label for="scope">Escopo:</label>
                <input id="scope" type="text" placeholder="Ex.: auth, ui">
                <button id="next2">Próximo</button>
            </div>

            <div id="step3" class="step hidden">
                <label for="body">Corpo do Commit:</label>
                <textarea id="body" rows="4" placeholder="Descrição detalhada"></textarea>
                <button id="next3">Próximo</button>
            </div>

            <div id="step4" class="step hidden">
                <label for="footer">Rodapé:</label>
                <textarea id="footer" rows="2" placeholder="Ex.: BREAKING CHANGE: ..."></textarea>

                <label for="issue">Referência à Issue:</label>
                <input id="issue" type="text" placeholder="Ex.: #123">

                <button id="commit">Fazer Commit</button>
            </div>

            <div id="commitResult"></div>
        </div>

        <script>
            const vscode = acquireVsCodeApi();

            let commitMessage = {
                type: '',
                scope: '',
                body: '',
                footer: '',
                issue: ''
            };

            function showStep(step) {
                const steps = document.querySelectorAll('.step');
                steps.forEach(s => s.classList.add('hidden'));
                document.getElementById('step' + step).classList.remove('hidden');
            }

            document.getElementById('next1').addEventListener('click', () => {
                commitMessage.type = document.getElementById('type').value;
                showStep(2);
            });

            document.getElementById('next2').addEventListener('click', () => {
                commitMessage.scope = document.getElementById('scope').value;
                showStep(3);
            });

            document.getElementById('next3').addEventListener('click', () => {
                commitMessage.body = document.getElementById('body').value;
                showStep(4);
            });

            document.getElementById('commit').addEventListener('click', () => {
                commitMessage.footer = document.getElementById('footer').value;
                commitMessage.issue = document.getElementById('issue').value;

                const finalMessage = \`\${commitMessage.type} (\${commitMessage.scope}): \${commitMessage.body}\\n\\n\${commitMessage.footer}\\n\\nRefs: \${commitMessage.issue}\`;

                vscode.postMessage({ command: 'commit', message: finalMessage });
                document.getElementById('commitResult').textContent = 'Commit realizado com sucesso!';
            });

            showStep(1);
        </script>
    </body>
    </html>
  `;
}
