const {Favorite} = require("../DB_connection");

async function postFav(req, res) {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).send("Faltan datos");
        }

        const favorite = await Favorite.create({
            name,
            origin,
            status,
            image,
            species,
            gender,
        });

        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(500).json({ message: "Error al guardar el personaje favorito", error });
    }
};

module.exports = {
    postFav
};