// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "global-state-sync-test" is now active!');
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('global-state-sync-test.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from global-state-sync-test!');
		
	});
	
	context.subscriptions.push(disposable);
	
	// NOTE Number Trigger this command quickly enough (easier with hotkey), you'll see the update operation is not sync with your stroke
	context.subscriptions.push(vscode.commands.registerCommand("global-state-sync-test.testUpdate", async () => {
		var max = 100000;
		var id = Math.ceil(Math.random() * max);
		var idStr = "0".repeat((max + "").length - (id + "").length) + id;
		var num = context.globalState.get("testUpdate.cache") || 1;
		console.log(`[${idStr}] The cache is:        [${(num > 0) ? (" " + num) : num}] now (${new Date().valueOf()})`);
		num = num * -1;
		await context.globalState.update("testUpdate.cache", num);
		console.log(`[${idStr}] I have change it to: [${(num > 0) ? (" " + num) : num}]     (${new Date().valueOf()})`);
		
	}));
	
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
