let editor

function initializeEditor() {
    editor = ace.edit("editor")
    editor.setTheme("ace/theme/cobalt");
    editor.setOption("wrap", 80)
    editor.setFontSize(16)
    const session = editor.getSession()
    session.setMode("ace/mode/text")
    session.setOption("indentedSoftWrap", false)
    session.setUseWrapMode(true)
}

function wrapIt() {
    let text = editor.getSession().getValue()
    text = wrapify(text, 80, 0)
    editor.getSession().setValue(text)
}
