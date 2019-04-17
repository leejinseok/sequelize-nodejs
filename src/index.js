import sync from './database/sync';
import { associate } from './database/sync';
import Member from './database/member';
import Article from './database/article';

async function init() {
  try {
    associate();
    const member = await Member.model.findOne({
      where: {
        id: 17
      }
    });

    const result = await member.getArticles();
  } catch (error) {
    console.error(error);    
  }
}

init();