// Lógica de la aplicación
const fs = require("fs");

const index = (req, res) => {
  const listadoPosts = obtenerPosts();

  return res.render("index", { listadoPosts });
};

const getBySlug = (req, res) => {
  const listadoPosts = obtenerPosts();

  const post = listadoPosts.find((postDelListado) => {
    return postDelListado.slug == req.params.slug;
  });

  if (!post) {
    return res.render("posterror", {
      error: "No se encontró post con el slug " + req.params.slug,
    });
  }

  return res.render("detail", { post });
};

const obtenerPosts = () => {
  return JSON.parse(fs.readFileSync("data/posts.json"));
};

// Declaro lo exportable
module.exports = { index, getBySlug };
