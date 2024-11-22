import { getTodosPosts, criarPost } from "../models/postsModels.js";

export async function listarPosts (req, res)
{
    const posts =  await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const newPost = req.body;
    try {
        const postCriado = await criarPost(newPost)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha no servidor"})        
    }
}

