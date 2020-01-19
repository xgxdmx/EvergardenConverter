var textarea_a = document.getElementById("textarea_a");
var textarea_b = document.getElementById("textarea_b");
var Editmode = document.getElementById("Editmode");
var editr = false;
method_b();
function method_b() {
    textarea_b.value = textarea_a.value;
}
function method_a() {
    textarea_a.value = textarea_b.value;
}
function onClick() {
    EditmodeFunction(true, true);
}
function onBlur() {
    EditmodeFunction(false, true);
}
function EditmodeFunction(isEdit, cchg) {
    if (cchg && editr) {
        editr = false;
        return;
    }
    if (isEdit) {
        textarea_b.style.display = "none";
        textarea_a.style.display = "inline";
        textarea_a.focus();
    } else {
        textarea_a.style.display = "none";
        textarea_b.style.display = "inline";
    }
    if (cchg) Editmode.checked = isEdit;
}
function EditmodeChange() {
    editr = true;
    EditmodeFunction(Editmode.checked);
}
function fontsizech(size) {
    textarea_b.style.fontSize = size.value;
}