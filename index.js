const express =require ('express');
const PORT = process.env.PORT || 4100;
const app = express();
const path =require ("path");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')));
app.get("/",(req,res)=>{
    res.sendFile("index.html");
});
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});