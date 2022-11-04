let editor

function initializeEditor() {
    editor = ace.edit("editor")
    editor.setTheme("ace/theme/terminal");
    editor.session.setMode("ace/mode/text");
    editor.setOption("wrap", 80)
    editor.setFontSize(16)
    const session = editor.getSession()
    session.setOption("indentedSoftWrap", false)
    session.setUseWrapMode(true)
}

