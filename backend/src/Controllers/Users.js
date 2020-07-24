class UsersController {
  constructor(User) {
    this.User = User;
  }

  async get(req, res) {
    try {
      const users = await this.User.find({});
      return res.status(200).json(users);

    } catch (err) {
      console.log(err.message);
      res.status(400).json({
        description: 'Failed to list users',
        error: true
      });
    }
  }

  async getById(req, res) {
    const { params: { id } } = req;
    try {
      const user = await this.User.findById(id, '-__v');
      return res.status(200).json(user);

    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        description: 'Failed to list user',
        error: true
      });
    }
  }

  async create(req, res) {
    const user = new this.User(req.body);
    try {
      await user.save();
      return res.status(201).json(user);

    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        description: 'Failed to create user',
        error: true
      });
    }
  }

  async update(req, res) {
    try {
      const result = await this.User.updateOne({ _id: req.params.id }, req.body);
      return res.sendStatus(204);

    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        description: 'Failed to update user',
        error: true
      });
    }
  }

  async remove(req, res) {
    try {
      await this.User.deleteOne({ _id: req.params.id });
      return res.sendStatus(204);

    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        description: 'Failed to delete user',
        error: true
      });
    }
  }
}

export default UsersController;
