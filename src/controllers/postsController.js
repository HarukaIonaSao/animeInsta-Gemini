import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
  const newPost = req.body;
  try {
    const postCriado = await criarPost(newPost);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha no servidor" });
  }
}

export async function uploadImagem(req, res) {
  console.log('Arquivo enviado',req.file); // Verifique se contém path, originalname, etc.

  const newPost = {
    descricao:"",
    data:"",
    imgUrl: req.file.originalname,
    alt:""    
  };
  res.send('Arquivo enviado com sucesso!');
  try {
    const postCriado = await criarPost(newPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado);
    console.log("Arquivo renomeado com sucesso!");
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ "Erro":"Falha na requisição"});
  }
}
