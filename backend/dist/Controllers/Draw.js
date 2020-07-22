"use strict";Object.defineProperty(exports, "__esModule", {value: true});class DrawController {
  constructor(User, generateDraw, sendMail) {
    this.User = User;
    this.generateDraw = generateDraw;
    this.sendMail = sendMail;
  }

  async create(req, res) {
    try {
      const userArray = await this.User.find({});
      await this.generateDraw(userArray, this.User);
      const draw = await this.User.find({});
      draw.map(user => {
        this.sendMail({ email: user.email, name: user.friend });
      }); 

      return res.status(200).json({
        description: 'Successfully created draw',
        error: false
      });
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({
        description: 'Failed to generate draw',
        error: true
      });
    }
  }
}

exports. default = DrawController;
