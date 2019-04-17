import db from '../database/db';
import sync from '../database/sync';

const migrate = async () => {
  await db.authenticate();
  sync();
};

migrate();