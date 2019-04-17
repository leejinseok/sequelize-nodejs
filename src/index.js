import { associate } from './database/sync';
import Member from './database/member';
import Article from './database/article';

async function init() {
  try {
    associate();
    const members = await Member.findAll();
    console.log('[Members]', members[0]);
  } catch (error) {
    console.error('[Error]', error);    
  }
}

init();