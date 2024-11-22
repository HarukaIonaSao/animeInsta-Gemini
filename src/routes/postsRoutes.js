import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
        console.log('Salvando em uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage});

const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    // app.post("/upload", upload.single("imagem1"), uploadImagem);
    app.post('/upload', upload.single("imagem"), uploadImagem => {
        console.log(req.file); // Exibe informações do arquivo
        if (!req.file) {
            return res.status(400).json({ erro: 'Arquivo não enviado!' });
        }
        res.status(200).json({ mensagem: 'Arquivo recebido com sucesso!', file: req.file });
        console.log("req.file:", req.file);
console.log("postCriado:", postCriado);
console.log("Imagem atualizada:", imagemAtualizada);

    });
}


export default routes;