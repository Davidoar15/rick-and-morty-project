const {User} = require("../DB_connection");

async function postUser(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password || email === "" || password === "") {
          return res.status(400).json({ message: "Faltan datos" });
        }

        const [user, created] = await User.findOrCreate({
          where: { email },
          defaults: { password },
        });
    
        if (!created) {
          return res.status(200).json({ message: "Usuario ya existente", user });
        }
    
        return res.status(201).json({ message: "Usuario creado", user });
      } catch (error) {
        return res.status(500).json({ message: "Error al crear el usuario", error });
      }
};

module.exports = {
    postUser
};