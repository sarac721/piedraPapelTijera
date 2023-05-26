let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuaria =  document.querySelector('.mano-usuaria')
let manoCompu =  document.querySelector('.mano-computadora')
let puntajeUsuaria =  document.querySelector('.puntaje-usuaria p')
let puntajeComputadora =  document.querySelector('.puntaje-computadora p')
let labelResultado =  document.querySelector('.resultado')
let tablero =  document.querySelector('.tablero')

let eleccionUsuario=""
let eleccionCompu = ""

let contadorUsuario = 0
let contadorComputadora = 0

Swal.fire(
    'Vamos a jugar?',
    'Gana el primero que tenga 3 puntos'
)

const eleccionComputadora = () => {
    let opcionAlzar = Math.floor(Math.random()*3);
    
    
    //Opcion piedra

    if(opcionAlzar ==0 ){
        manoCompu.src="assets/piedra_computadora.png"
        eleccionCompu = "piedra"
    }
    else if (opcionAlzar == 1){
        manoCompu.src="assets/papel_computadora.png"
        eleccionCompu="papel"
    }
    else{
        manoCompu.src="assets/tijera_computadora.png"
        eleccionCompu = "tijera"
    }

}


botonPiedra.onclick = () => {
 manoUsuaria.src="assets/piedra_user.png"
 manoCompu.src="assets/piedra_computadora.png"
 labelResultado.textContent= '...'
 tablero.classList.add("jugando");
 setTimeout(() =>{
    eleccionUsuario =("piedra");
    manoUsuaria.src = "assets/piedra_user.png"
    eleccionComputadora();
    resultado()

    //aca llamamos  la funcon que nos manda el resultado de computador eleccionador()
    //llamamos funcion resultado()

    tablero.classList.remove("jugando")
 },200);
}
botonPapel.onclick = () => {
    manoUsuaria.src="assets/papel_user.png"
    manoCompu.src="assets/papel_computadora.png"
    
    labelResultado.textContent= '...'
    tablero.classList.add("jugando");
    setTimeout(() =>{
        eleccionUsuario =("papel");
        manoUsuaria.src = "assets/papel_user.png"
        eleccionComputadora();
        resultado()
    
        //aca llamamos  la funcon que nos manda el resultado de computador eleccionador()
        //llamamos funcion resultado()
    
        tablero.classList.remove("jugando")
     },200);
}
botonTijera.onclick = () => {
    manoUsuaria.src="assets/tijera_user.png"
    manoCompu.src="assets/tijera_computadora.png"

    labelResultado.textContent= '...'
    tablero.classList.add("jugando");
    setTimeout(() =>{
        eleccionUsuario =("tijera");
        manoUsuaria.src = "assets/tijera_user.png"
        eleccionComputadora();
        resultado()
    
        //aca llamamos  la funcon que nos manda el resultado de computador eleccionador()
        //llamamos funcion resultado()
    
        tablero.classList.remove("jugando")
     },200);
}

 const resultado = ()  => {
    if(eleccionUsuario == "piedra"){
        if (eleccionCompu == "piedra"){
            labelResultado.textContent = "Empate"
        }
        if(eleccionCompu == "papel"){
            labelResultado.textContent = "Perdio"
            contadorComputadora ++;
            puntajeComputadora.textContent = contadorComputadora;
            ganador(contadorUsuario, contadorComputadora)
        }
        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Gano"
            contadorUsuario ++
            puntajeUsuaria.textContent = contadorUsuario;
            ganador(contadorUsuario, contadorComputadora)
        }
    }

    if(eleccionUsuario == "papel"){
        if (eleccionCompu == "papel"){
            labelResultado.textContent = "Empate"
        }
        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Perdio"
            contadorComputadora ++
            puntajeComputadora.textContent = contadorComputadora;
            ganador(contadorUsuario, contadorComputadora)
        }
        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Gano"
            contadorUsuario ++
            puntajeUsuaria.textContent = contadorUsuario;
            ganador(contadorUsuario, contadorComputadora)
        }
    }

    if(eleccionUsuario == "tijera"){
        if (eleccionCompu == "tijera"){
            labelResultado.textContent = "Empate"
        }
        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Perdio"
            contadorComputadora ++
            puntajeComputadora.textContent = contadorComputadora;
            ganador(contadorUsuario, contadorComputadora)
        }
        if(eleccionCompu == "papel"){
            labelResultado.textContent = "Gano"
            contadorUsuario ++
            puntajeUsuaria.textContent = contadorUsuario;
            ganador(contadorUsuario, contadorComputadora)

        }
    }
     
    
    
}



function ganador (user, comp){
    if(user == 3){
        Swal.fire(
            'Gano'
        )
        contadorUsuario = 0
        puntajeUsuaria.textContent = contadorUsuario;
        contadorComputadora = 0 
        puntajeComputadora.textContent = contadorComputadora;

    }
    if(comp == 3){
        Swal.fire(
            'Perdio'
        )
        contadorUsuario = 0
        puntajeUsuaria.textContent = contadorUsuario;
        contadorComputadora = 0 
        puntajeComputadora.textContent = contadorComputadora;
    }
    

}