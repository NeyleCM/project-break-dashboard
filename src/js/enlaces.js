   // AÑADE TU ENLACE

   const nameEnlace = document.getElementById('input-nameEnlace')
   const inputEnlace = document.getElementById('input-enlace')
   const buttonEnlaces = document.getElementById('buttonEnlaces')
   const ulList = document.getElementById('ul-list')
   const formulario = document.getElementById('formulario')

   const saveEnlaces = (e) => { 
       e.preventDefault() // (e) previene el evento de reinicio de la pag
       let inputName = nameEnlace.value
       let inputLink = inputEnlace.value
       let inputValues = {inputName, inputLink}
       //console.log(inputValues);
       const objetoEnlace = localStorage.getItem('arrEnlace') // en la primera vuelta no existe, en la segunda si.
       
       const names = objetoEnlace ? JSON.parse(objetoEnlace) : [] // nos queda un array vacio en la primera.
       console.log(names, `array antes del push`);
       names.push(inputValues) // aqui el array tiene el chiste
       console.log(names, `array después del push`);
   
       // console.log(array); //deberia mostrar chiste
   
       localStorage.setItem('arrEnlace', JSON.stringify(names))
       
       /*template(localStorage.getItem('nameEnlace', 'inputEnlace'))//Invocamos esta funcion y le pasamos los jokes guardados en la variable localStorage*/
   }


   buttonEnlaces.addEventListener('click', (e) => {
       console.log(e);
       saveEnlaces(e)
   })

