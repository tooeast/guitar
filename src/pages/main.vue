<template>
  <div class="hello">
    <chart :matrix="mixed" :name="name" :prefix="prefix" :desc="desc"></chart>

    <div class="show-num">{{ (nowIndex + 1) + '/' + totalNum }}</div>

    <div class="btn-area">
      <button class="btn" @click="nextChord">下一个</button>
    </div>
  </div>
</template>

<script>
import chart from '@/components/chart.vue'

import data from '@/data'

export default {
  name: 'Main',
  components: {
    chart
  },
  data () {
    return {
      name: 'Am',
      mixed: [
        [-1, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      timer: null,
      index: 0,
      prefix: 1,
      desc: [],
      nowIndex: 0,
      totalNum: 0,
      list: []
    }
  },
  mounted() {
    data.getMatrix().then(data => {
      this.list = data;
      // console.log(data);
      // this.nowIndex = 7;
      // this.mixed = data.C[this.nowIndex].matrix;
      // this.name = data.C[this.nowIndex].title;
      // this.prefix = Number(data.C[this.nowIndex].prefix);

      // this.desc = data.C[this.nowIndex].description;

      this.totalNum = data.length;

      this.initChordShow(data);
      console.log('request')
    })
  },
  methods: {
    initChordShow(arr) {
      this.nowIndex = 0;
      
      // this.totalNum = arr.C.length;

      this.updateNowInfo(this.nowIndex);
    },
    nextChord() {
      console.log('next');
      console.log(this.totalNum);
      // this.nowIndex++;

      if(this.nowIndex >= this.totalNum - 1) {
        this.nowIndex = 0;
      } else {
        this.nowIndex++;
      }
      // this.nowIndex = this.nowIndex >= this.totalNum ? 0 : this.nowIndex++;
      console.log(this.nowIndex);
      this.updateNowInfo(this.nowIndex);
    },
    updateNowInfo(index) {
      this.mixed = this.list[index].matrix;
      this.name = this.list[index].title;
      this.prefix = Number(this.list[index].prefix);

      this.desc = this.list[index].description;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.show-num {
  width: 310px;
  margin: 0 auto;
  text-align: right;
  font-size: 18px;
  line-height: 38px;
}

.btn-area {
  .btn {
    width: 320px;
    height: 80px;
    background-color: #42fff6;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
