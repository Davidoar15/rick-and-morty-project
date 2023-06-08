const router = require("express").Router();
const {getCharById} = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const {loginUser} = require("../controllers/login");

router.get("/character/:id", getCharById);
router.get("/login", loginUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;