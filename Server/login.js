const {User} = require("./DB_connection");

function login(req, res) {
    const { email, password } = req.query;
    if (!email || !password || email === "" || password === "") {
      return res.status(400).send("Faltan datos");
    }

    User.findOne({ where: { email } })
    .then(user => {
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      if (user.password !== password) {
        return res.status(403).send("Contraseña incorrecta");
      }
      return res.status(200).json({ access: true });
    })
    .catch(error => {
      return res.status(500).json({ message: "Error al iniciar sesión", error });
    });
};

module.exports = {
    login
};