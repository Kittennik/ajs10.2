import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsed = await json(data);
      return parsed;
    } catch (e) {
      throw new Error(e);
    }
  }
}
