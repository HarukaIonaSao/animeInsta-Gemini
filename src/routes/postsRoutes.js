import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const upload = multer({
    dest:"./uploads"
})
const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
    app.post("/posts",postarNovoPost);
    app.post("/upload",uploads.single("imagem"), uploadImagem)
}


export default routes;