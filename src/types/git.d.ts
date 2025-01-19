import { Event } from "vscode";

export interface Repository {
  path: string;
  readonly inputBox: InputBox;
}

export interface API {
  repositories: Repository[];
}

export interface InputBox {
  value: string;
}

export interface GitExtension {
  readonly enabled: boolean;
  readonly onDidChangeEnablement: Event<boolean>;

  getAPI(version: 1): API;
}
