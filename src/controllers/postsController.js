import { getTodosPosts, criarPost } from "../models/postsModels.js";
import fs from 'fs';

export async function uploadImagem(req, res) {
    console.log(req.file); // Verifique se contém path, originalname, etc.

    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    
        // titulo:"",
        // genero:"",
        // ano:"",
        // episodios:"",
        // imgUrl: req.file.originalname,
        // alt:""
    };
    try {
        const postCriado = await criarPost(newPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha no servidor"})        
    }
}

export async function listarPosts (req, res)
{
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const newPost = req.body;
    try {
        
        const postCriado = await criarPost(newPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha no servidor"});     
    }
}


 


