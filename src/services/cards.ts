import axios from 'axios';

class Cards {
  static async all() {
    const resp = await axios.get('/cards.json');
    return resp.data;
  }
}

export default Cards;
