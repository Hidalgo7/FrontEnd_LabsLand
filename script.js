function addEntryToTable(title, description, availability, level, author){
    var tabla = document.getElementById('tabla');
    var fila = tabla.insertRow(-1)
    for (var i = 0, j = arguments.length; i < j;i++){
        var celda = fila.insertCell(i)
        celda.innerHTML = arguments[i].value
    }
}