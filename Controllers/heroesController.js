const heroes= require('../data/heroes.json');

// let heroesO= JSON.stringify(heroes);
let nombre='';
for( let datos in heroes){
     nombre += `<strong>${heroes[datos].nombre}</strong> <br> <mark> Su profesion es :</mark> ${heroes[datos].profesion} <br><mark> Su lugar de residencia : </mark>  ${heroes[datos].pais} <br> <mark>Reseña :</mark>  ${heroes[datos].resenia} <br><br>`;
     
};

//console.log(heroesO);

// console.log(typeof heroes);

let heroesControlador={
     todos:(req, res)=>{
          res.send(`<h1> Estos son nuestros heroes!!!</h1> <br> ${nombre}`);
     },
     id: (req, res) => {
          //MUCHO MUY IMPORTANTE PRIMERO BUSCAR EL HEROE QUE CORRESPONDA, SE PUEDE UTILIZAR EL MÉTODO FIND!!
          let heroe= heroes.find(h => h.id == req.params.id);

               if(heroe){
                    res.send(`<h1>Héroe encontrado!!</h1><br> Hola, mi nombre es <strong> ${heroe.nombre} </strong>, y mi profesión es : <strong>${heroe.profesion} </strong>`)
               }else{
                    res.send(`No encontramos el heroe que buscas!`)
               }
          },
     bio:(req, res) => {
          let heroe= heroes.find(h => h.id == req.params.id);
          if(!heroes){
               res.send(`<h1>No encontramos el héroe que buscas!!</h1>`)
          }else{
               if(req.params.ok == 'ok'){
                    res.send(`<h1> Le presentamos al héroe!!!! </h1><br> <strong>${heroe.nombre}</strong> : ${heroe.resenia}`)
               }else{
                    res.send(`Mi nombre es <strong>${heroe.nombre}</strong>, lamento que no quieras saber más de mí :( `)
               }
          }
     }

}


module.exports=heroesControlador;
// //   if(!heroe) {// Si NO se encuentra al héroe se envía un mensaje
// res.send("No encontramos un héroe para mostrarte su biografía");
// } else { // Si se encuentra al héroe:
//     if(req.params.ok == 'ok') {
//             res.send(`${heroe.nombre}: ${heroe.resenia}`);
//         } else {// Si nó vino el parámetro se envía el mensaje de error
//             res.send(`${heroe.nombre}: "Lamento que no desees saber más de mi :("`);
//         }