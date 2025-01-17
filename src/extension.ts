import * as vscode from "vscode";
import { createCommitPanel } from "./panel";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("gitIcons.openCommitPanel", () => {
      createCommitPanel(context);
    })
  );
}

export function deactivate() {}
