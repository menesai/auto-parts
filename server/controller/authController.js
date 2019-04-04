const bcrypt = require("bcryptjs");

   const register = async (req, res) => {
    const {username, password} = req.body;
    const db = req.app.get('db');
    const result = await db.loginUser([username]);
    const existingUser = result[0];
    if(existingUser){
        return res.status(200).json('Username taken')
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt);
    const registerUser = await db.registerUser([username, hash])
    const user = registerUser[0];
    req.session.user = {username: user.username, id: user.id}
    return res.status(200).json(req.session.user)
}
 

const login = async (req, res) => {
  const db = req.app.get("db");

  const findUser = await db.loginUser([req.body.username]);
  const user = findUser[0];

  if (!user) {
    res.status(401).json("User not found.");
  } else {
    const isMatch = bcrypt.compareSync(
      req.body.password,
      user.hash
    );
    if (!isMatch) {
      res.status(403).json("Incorrect username or password");
    } else {
      req.session.user = {
        isAdmin: user.isAdmin,
        id: user.id,
        username: user.username,
        
      };
      res.status(200).json(req.session.user);
    }
  }
};

const logout = (req, res) => {
  req.session.destroy();
};

const getUser = (req,res,next) => {
    // const db = req.app.get('db');
    res.json(req.session.user)
}

module.exports ={
    register,
    login,
    logout,
    getUser
}