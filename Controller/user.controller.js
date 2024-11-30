import userModel from "../Model/user.model.js";
// add new user ->post http method
export function createUser(req, res) {
  const { firstname, lastname, hobby } = req.body;
  const newUser = new userModel({
    firstname,
    lastname,
    hobby,
  });
  newUser
    .save()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.send(data);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
//get method -> get http method
export function findUser(req, res) {
  userModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.json(data);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
//get method -> get http method
export function findOneUser(req, res) {
  const userId = req.params.id;
  userModel
    .findById(userId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.json(data);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
//update method ->put http method
export function updateOneUser(req, res) {
  const userId = req.params.id;
  userModel
    .findByIdAndUpdate(userId, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.send(data);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
//delete method ->delete http method
export function deleteOneUser(req, res) {
  const userId = req.params.id;
  userModel
    .findByIdAndDelete(userId)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "data not found" });
      }
      res.json(data);
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
}
