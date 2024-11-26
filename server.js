import express from "express";
import routes from "./src/routes/postsRoutes.js";
import conectarAoBanco from "./src/config/dbConfig.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Server listening...");
});

