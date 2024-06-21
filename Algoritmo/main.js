function vendingMachine() {
    const prices = {
        A: 270,
        B: 340,
        C: 390
    };

    const coins = [100, 50, 10];

    let name = prompt("Ingrese su nombre:");

    while (true) {
        let productChoice = prompt("Productos disponibles:\nA: $270\nB: $340\nC: $390\nElija el producto (A, B, C) o 'salir' para terminar:").toUpperCase();
        
        if (productChoice === 'SALIR') {
            break;
        }
        
        if (!prices[productChoice]) {
            alert("Producto no válido, por favor elija nuevamente.");
            continue;
        }

        let price = prices[productChoice];
        alert(`Ha elegido el producto ${productChoice} con un precio de $${price}`);

        let totalInserted = 0;

        while (totalInserted < price) {
            let coin = parseInt(prompt("Ingrese moneda ($10, $50, $100):"));

            if (!coins.includes(coin)) {
                alert("Moneda no válida, por favor ingrese una moneda aceptada.");
                continue;
            }

            totalInserted += coin;
            alert(`Total ingresado: $${totalInserted}`);
        }

        let change = totalInserted - price;
        let changeGiven = [];

        if (change > 0) {
            alert("Su cambio es:");
            for (let coin of coins) {
                while (change >= coin) {
                    changeGiven.push(coin);
                    change -= coin;
                }
            }
            alert(changeGiven.join(", "));
        }

        alert(`Gracias por su compra, ${name}!`);
    }
}

// Ejecutar la función
vendingMachine();
