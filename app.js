const express = require("express");
const hbs = require("hbs");
require("dotenv").config();


const app = express();
const port=process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", (err)=> err)

//servir contenido estatico
app.use(express.static("public"));


// app.get("/",(req,res)=>{
//     res.send("Home page");
// })

app.get("/",(req, res)=>{
    res.render("home",{
        nombre: "ROberto",
        titulo: "Curso de monda"
    })
})
app.get("/generic",(req, res)=>{
    res.render("generic",{
        nombre: "ROberto",
        titulo: "Curso de monda"
    })
})
app.get("/elements",(req, res)=>{
    res.render("elements",{
        nombre: "ROberto",
        titulo: "Curso de monda"
    })
})

app.get("/elements",(req, res)=>{
    res.sendFile(__dirname+"/public/elements.html")
})

app.get("*",(req,res)=>{
    // esto para enviar un mensaje como respuesta al servidor
    // si una pagina no es encontrada pero debemos usar el res.sendfile
    // para que nos redireeccione a la ruta que estamos especificando 
    res.sendFile(__dirname +"/public/404.html");
})

app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
});