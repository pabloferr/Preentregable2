const divContenido = document.getElementById("contenedor")
console.log(divContenido)


const parrafos = document.getElementsByClassName("primerParrafoPrueba")
console.log(parrafos[0])
parrafos [0].innerText = "No esperes mas!! nuestras mascotas estan esperando un hogar"
parrafos [1].innerText = "Ahora podes busca y encontra tu mascota ideal"

const mascotas = [
    {
        id:1,
        Mascota: "Perro",
        Nombre: "Aquiles",
        Sexo: "Macho",
        img: "./img/perro11.jpg"
    },
    {
        id:2,
        Mascota: "Gato",
        Nombre: "Lila",
        Sexo: "Hembra",
        img: "./img/gato.jpg"
    },
    {
        id:3,
        Mascota: "Conejo",
        Nombre: "Peluchin",
        Sexo: "Macho",
        img: "./img/conejo.jpg"
    }, 
    {
        id:4,
        Mascota: "Perro",
        Nombre: "Candy",
        Sexo: "Hembra",
        img: "./img/perro2.jpg"
    }
]

mascotas.forEach((mascota) => {
    let contenedorMasco = document.createElement ("div")
    contenedorMasco.innerHTML = `<div id="${mascota.id}" style="width: 18rem;">
    <img src="${mascota.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mascota.Nombre}</h5>
      <p class="card-text">${mascota.Nombre}</p>
      <p class="card-text">${mascota.Sexo}</p>
      <a href="#" class="btnAdopcion">ADOPTAR</a>
    </div>
  </div>`   

  divContenido.appendChild (contenedorMasco)
})


const boton = document.querySelector ("button")
const parrafo = document.querySelector ("p")

let contador = 0;
boton.addEventListener("click", () => {
    console.log ("click");
    contador++;
    parrafo.textContent = contador;
});

const botonAlerta = document.getElementById("botonAlerta")
botonAlerta.addEventListener("click", aviso)
function aviso (){
    alert("Felicidades ya adotaste!!")
}

const form = document.getElementById ("formulario")
form.addEventListener ("submit", (e) =>{
    crearUsuario(e)
})  
function crearUsuario (e){
    e.preventDefault()
     let inputNombre = document.getElementById ("nombre")
     let inputApodo = document.getElementById ("apodo")
     let inputGmai = document.getElementById ("gmail")

     const user = {
        nombre: inputNombre.value,
        apodo: inputApodo.value,
        gmail: inputGmai.value,
     }  
        console.log(user)

localStorage.setItem("user", JSON.stringify(user))

}   
 