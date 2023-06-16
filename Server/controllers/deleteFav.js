const {Favorite} = require("../DB_connection");

async function deleteFav(req, res) {
    const { id } = req.params;
  
    try {
      await Favorite.destroy({ where: { id } });
      const allFavorites = await Favorite.findAll();
      return res.status(200).json(allFavorites);
    } catch (error) {
      return res.status(500).json({ message: "Error al eliminar el personaje favorito", error });
    }
};

module.exports = {
    deleteFav
};