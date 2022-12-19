import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    const runAll = vscode.commands.registerCommand(
        "frappe-test-runner.runAllTests",
        () => {
            let command = getBaseTestCommand();
            if (command) {
                executeCommand(command);
            }
        }
    );

    const runSingle = vscode.commands.registerCommand(
        "frappe-test-runner.runSingleTest",
        () => {
            let command = getBaseTestCommand();
            if (!command) {
                return;
            }
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }
            let lineNumber = editor.selection.start.line;

            let testFunction;
            do {
                const line = editor.document.lineAt(lineNumber).text;
                if (!testFunction) {
                    testFunction = getTestFunctionName(line);
                }
                lineNumber--;
            } while (!testFunction && lineNumber >= 0);

            if (testFunction) {
                command += ` --test ${testFunction}`;
            }
            executeCommand(command);
        }
    );
    context.subscriptions.push(runAll);
    context.subscriptions.push(runSingle);
}

function getBaseTestCommand(): string | undefined {

    const config = vscode.workspace.getConfiguration("frappeTestRunner");
    const testModule = getTestModule(config.get("workspaceRoot"));
    if (!testModule) {
        return;
    }

    // Run module tests in terminal
    const siteName = config.get("siteName");
    const testArgs = config.get("testArgs") ?? "";
    return `bench --site ${siteName} run-tests --module ${testModule} ${testArgs}`;
}

function getTestModule(userWorkspaceRoot: string | undefined): string | undefined {

    const workspaceRoot = vscode.workspace.rootPath;
    if (!workspaceRoot) {
        console.log("No root path");
        return;
    }

    const editor = vscode.window.activeTextEditor;
    const filePath = editor?.document.fileName;
    if (!editor || !filePath) {
        console.log("No editor open");
        return;
    }

    let workspacePostfix = userWorkspaceRoot === "bench" ? "apps/" : "";
    const filePathRelativeToWorkspace = filePath.replace(
        `${workspaceRoot}/` + workspacePostfix,
        ""
    );

    // if not app folder, trim first app name from test dir
    let testModule = filePathRelativeToWorkspace;
    if (userWorkspaceRoot === "bench" || userWorkspaceRoot === "apps"){
        testModule = testModule.substring(testModule.indexOf("/") + 1);
    }

    testModule = testModule.replace(".py", "").replace(/\//g, ".");

    return testModule;
}

function getTestFunctionName(line: string): string | undefined {
    const match = line.match(/^\s*def (?<functionName>\w+)\(.*?\):/);
    return match?.groups?.functionName;
}

function executeCommand(cmd: string): void {
    const terminal = getTerminal();
    terminal.show(true);
    terminal.sendText(cmd);
}

function getTerminal(): vscode.Terminal {
    let terminal = vscode.window.terminals.find(
        (terminal) => terminal.name == "frappe-test-runner"
    );
    if (!terminal) {
        terminal = vscode.window.createTerminal("frappe-test-runner");
    }
    return terminal;
}

export function deactivate() {}
