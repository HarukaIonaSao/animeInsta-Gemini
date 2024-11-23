import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
        console.log('Salvando em uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname);
        console.log('Renomeando...');        
    }
});

const upload = multer({ storage: storage });
    
const routes = (app) => {
    app.use(express.json());    
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;