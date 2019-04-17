import db from './db';
import Article from './article';
import Member from './member';

export function associate() {
  Member.associate();
  Article.associate();
}

export default function sync() {
  associate();
  db.sync({ force: true });
}