import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao");
    const colecao = db.collection("animes");
    return colecao.find().toArray();
}

export async function criarPost(newPost) {
    const db = conexao.db("imersao");
    const colecao = db.collection("animes");
    return colecao.insertOne(newPost);
}
