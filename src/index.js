import sync from './database/sync';
import { associate } from './database/sync';
import Member from './database/member';
import Article from './database/article';

async function init() {
  try {
    associate();
    const members = await Member.findAll();
    console.log(members);
  } catch (error) {
    console.error(error);    
  }
}

init();