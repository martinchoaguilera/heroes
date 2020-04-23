let mainControllers={
     index: (req, res)=>{
          res.send('<h1>Bienvenidos a Heroes Digital House </h1><br> ​Ni <strong>Superman, Iron Man o La Mujer Maravilla</strong> son tan importantes cómo las y los Heroes de carne y    hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
     },
     creditos:(req,res)=>{
          res.send(`<strong>Martin Aguilera</strong><br> Digital House<br> <img src="../img/dh.png" alt="DH"><br> <a href="https://www.digitalhouse.com/ar" text-decoration="none" color="black">Digital House</a>`)
     },
}

module.exports= mainControllers;