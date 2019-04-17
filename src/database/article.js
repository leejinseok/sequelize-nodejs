import Sequelize from 'sequelize';
import Member from './member';
import db from './db';

class Article {
  constructor() {
    this.model = db.define('article', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    });
  }

  associate() {
    this.model.belongsTo(Member.model);
  }
}

export default new Article();