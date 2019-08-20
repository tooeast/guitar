import axios from 'axios'

const json = {
  matrix: {},
  getMatrix() {
    return new Promise((res, rej) => {
      axios.get('./chords/chords.json').then(data => {
        if(data.status == 200) {
          this.matrix = JSON.parse(JSON.stringify(data.data));
          res(data.data);
        }

        rej('error');
      })
    })
  }
}

export default json;