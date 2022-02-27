import * as vscode from 'vscode';

class CpmdCompletionItemProvider {
	completionList: vscode.CompletionItem[] = [];;

	constructor() {
		const words = ['Version', 'UseImport', 'UseFileImport', 'UseWebImport', 'TypeToImport', 'RequiredVar', 'Var']
		for (let word of words) {
			this.completionList.push({
				label: '#' + word,
				kind: vscode.CompletionItemKind.Keyword,
				insertText: word,
			});
		}
	}

	provideCompletionItems() {
		return this.completionList;
	}
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			'cpmd', new CpmdCompletionItemProvider(), '#'
		)
	);
}

export function deactivate() {}
