const userServices = require('../services/userServices');
const tokenServices = require('../services/tokenServices');

exports.signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const userExists = await userServices.emailInUse(email);
    if (userExists) {
      return res.status(409).json({
        error: "Email already in use."
      });
    }
    const usernameIsTaken = await userServices.usernameIsTaken(username);
    if (usernameIsTaken) {
      return res.status(409).json({
        error: "Username taken."
      });
    }
    const user = await userServices.createUser({ email, password, username });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const accountExists = await userServices.accountExists(email, password);
    if (!accountExists) {
      return res.status(401).json({
        error: "Invalid email or password"
      });
    }
    // Get the user 
    const user = await userServices.getUser(email, password);
    // Register a new token (based on the uid)
    const token = await tokenServices.createToken(user);
    // Send token to the client
    return res.status(201).json(token);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
