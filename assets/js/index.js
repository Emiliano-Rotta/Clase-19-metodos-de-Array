

// const arrayFor = [
//     {
//         nombre:"Joaquin",
//         edad:28,
//         conocimientos:["CSS", "JS"]
//     },
//     {
//         nombre:"Damian",
//         edad:25,
//         conocimientos:["HTML", "CSS"]
//     },
//     {
//         nombre:"Dylan",
//         edad:22,
//         conocimientos: ["JS","HTML"]
//     },
//     {
//         nombre:"Emiliano",
//         edad:30,
//         conocimientos: ["JS","HTML"]
//     },
//     {
//         nombre:"Camila",
//         edad:24,
//         conocimientos: ["JS","HTML"]
//     }
// ]

// for (let i = 0; i < arrayFor.length; i++) {
//     console.log(arrayFor[i].nombre)
// }

// console.log(arrayFor[0].nombre)
// console.log(arrayFor[1].nombre)
// console.log(arrayFor[2].nombre)
// console.log(arrayFor[3].nombre)
// console.log(arrayFor[4].nombre)



    fetch("https://rickandmortyapi.com/api/character")
    .then((res)=> res.json())
    .then((data) =>{
        console.log(data.results)
        let element = document.querySelector("#tarjetas")
        let html = ""

        for (let i = 0; i < data.results.length; i++) {
            
           html +=
           `
           <div class="card">
               <h2>${data.results[i].name}</h2>
               <img src=${data.results[i].image} alt"">
               <p>Genero: ${data.results[i].gender}</p>
             </div>
           ` 
            
        }



 
        element.innerHTML = html
        totalPagina.textContent = `Total de páginas:${data.info.pages}`
        paginaActual.textContent= "Pagina actual: 1"
    })
// })
