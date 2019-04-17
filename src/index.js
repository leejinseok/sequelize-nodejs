import Member from './database/member';
import sync from './database/sync';

async function init () {
  try {
    sync();
    const result = await Member.model.findAll();
  } catch (error) {
    console.error(error);
  }
}

init();