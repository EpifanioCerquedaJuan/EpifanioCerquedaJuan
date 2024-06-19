var personArr = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "melbourne",
        "phoneNO": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "sydney",
        "phoneNO": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "perth",
        "phoneNO": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "perth",
        "phoneNO": "1234567890"
    }
];

function generateTable(data) {
    var table = document.createElement('table');

    // Crear la fila de encabezado
    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    var headers = Object.keys(data[0]);
    headers.forEach(header => {
        var th = document.createElement('th');
        th.textContent = header.charAt(0).toUpperCase() + header.slice(1);
        headerRow.appendChild(th);
    });

    // Crear las filas del cuerpo de la tabla
    var tbody = document.createElement('tbody');
    data.forEach(item => {
        var row = tbody.insertRow();
        headers.forEach(header => {
            var cell = row.insertCell();
            cell.textContent = item[header];
        });
    });

    table.appendChild(tbody);
    return table;
}

document.addEventListener('DOMContentLoaded', () => {
    var tableContainer = document.getElementById('table-container');
    var table = generateTable(personArr);
    tableContainer.appendChild(table);
});