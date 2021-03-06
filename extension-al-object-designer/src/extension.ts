'use strict';

import * as vscode from 'vscode';
import { ALPanel } from './ALPanel';
import { ALObjectDesigner } from './ALModules';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.openALWindow', async () => {
        await ALPanel.open(context.extensionPath, ALObjectDesigner.PanelMode.List);
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.openALDesignWindow', async () => {
        await ALPanel.openDesigner(context.extensionPath);
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}