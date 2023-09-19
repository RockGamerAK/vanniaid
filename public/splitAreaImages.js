let idName = `#${document.currentScript.getAttribute('idName')}`
if (idName === '#') {
    idName = ''
}
alert(idName)