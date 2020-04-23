const express= require('express');
const app=express();

app.listen(3030, ()=> console.log('servidor corriendo'));


const rutasMain= require('./routes/main');

app.use('/', rutasMain);

const rutaHeroe= require('./routes/heroes');

app.use('/heroes', rutaHeroe);
// (req, res) => {
//      res.send('Hola');
// });


app.get( '*' , (req, res) => {
     res.status(404).send(('404 not found. <br> <h1>¡Houston, poseemos problemas!</h1><br> <img src="../img/houston2.jpg" alt="Houston">'))
});





// if(app.use == app.use('/')){
//      app.use('/',rutasMain)
// }


