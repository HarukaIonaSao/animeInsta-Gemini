import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//         console.log('Salvando em uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage: storage});

const upload = multer({
    storage: multer.diskStorage({
      destination: 'uploads/',
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
})
});

const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    // app.post("/upload", upload.single("imagem1"), uploadImagem);
    app.post('/upload', upload.single("imagem"), async (req,res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ erro: 'Nenhum arquivo foi enviado.' });
            }

            console.log(req.file); // Exibe informações do arquivo
  // Chamada para a função uploadImagem

  const allowedTypes = ['.png', '.jpg', '.jpeg', '.gif'];
        if (!allowedTypes.includes(path.extname(req.file.originalname).toLowerCase())) {
            return res.status(400).json({ erro: 'Tipo de arquivo não permitido.' });
        }
  await uploadImagem(req, res);
              res.status(200).json({ mensagem: 'Arquivo recebido com sucesso!', file: req.file });


        } catch (error) {
            console.error(error);
            return res.status(400).json({ erro: 'Erro ao fazer upload: ' + error.message });

        } 
        // if (!req.file) {
        //     return res.status(400).json({ erro: 'Arquivo não enviado!' });
        // }
        // console.log("req.file:", req.file);
console.log("postCriado:", postCriado);
console.log("Imagem atualizada:", imagemAtualizada);

    });
}


export default routes;