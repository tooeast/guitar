import axios from 'axios'

const json = {
  matrix: [],
  getMatrix() {
    return new Promise((res, rej) => {
      axios.get('./chords/chords.json').then(data => {
        if(data.status == 200) {
          // this.matrix = JSON.parse(JSON.stringify(data.data));

          // this.matrix = Object.assign({}, ...Object.values(data.data));

          Object.values(data.data).forEach(item => {
            this.matrix = [...this.matrix, ...item]
          })
          res(this.matrix);
        }

        rej('error');
      })
    })
  }
}

export default json;