import mongoose, { connect } from "mongoose";

const conectarBD = () =>{
    const urlConexion = String(process.env.MONGO_URL);
    connect(urlConexion)
        .then(con =>{
            console.log(`Conexión establecida con : ${urlConexion}`);
        })
        .catch(error =>{
            console.log(error);
        });
};

export default conectarBD;