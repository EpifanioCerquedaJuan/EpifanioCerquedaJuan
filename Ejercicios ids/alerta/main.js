document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos 'li'
    var listItems = document.querySelectorAll('li');

    // Añadir un evento de clic a cada 'li'
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            var country = this.textContent;
            var id = this.getAttribute('data-id');
            var dialCode = this.getAttribute('data-dial-code');
            
            alert(`Country: ${country}\nID: ${id}\nDial Code: ${dialCode}`);
        });
    });
});