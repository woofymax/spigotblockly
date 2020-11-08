var workspace = Blockly.inject('blocklyDiv',
        { toolbox: document.getElementById('toolbox') });

function getCode() {
    return Blocky.Java.workspaceToCode(workspace);
}
    