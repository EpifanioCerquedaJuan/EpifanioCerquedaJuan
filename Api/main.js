fetch('https://hp-api.onrender.com/api/characters')
 .then(respuesta => {
    return respuesta.json();
   
 })

 .then((respuesta) =>
    {
    const data = respuesta;
        personajes(data);
console.log(respuesta)
function personajes(respuesta) {
    const contenido = document.querySelector('.contenido')
    console.log(respuesta)
    const { value } = respuesta;
    //console.log(value)
    const html = 
    `
    <section>
    <p>${value}</p>
    
    </section>
    
    `;
    contenido.innerHTML += html;
}
    })
    .catch(error =>{
        const modalError = `<h1>${error.message}</h1>`
        document.DOCUMENT_TYPE_NODE.innerHTML = modalError;
    });