import { getTodosPosts, criarPost, uploadImagem } from "../models/postsModels.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})


const upload = multer({ dest: "./uploads" , storage})

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

export async function uploadImagem(req, res) {
    const newPost = {
        titulo:"",
        genero:"",
        ano:"",
        episodios:"",
        imgUrl:req.file.originalname,
        alt:""
    };
    try {
        const postCriado = await criarPost(newPost)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha no servidor"})        
    }
}


