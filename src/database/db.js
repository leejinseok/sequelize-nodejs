import config from 'config';
import Sequelize from 'sequelize';

const db = new Sequelize(config.get('db'));

export default db;
