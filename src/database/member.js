import Sequelize from 'sequelize';
import Article from './article';
import db from './db';

class Member {
  constructor() {
    this.model = db.define('member', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }
    });
  }

  associate() {
    this.model.hasMany(Article.model);
    // this.model.belongsTo(Article.model);
  }
}


export default new Member();
