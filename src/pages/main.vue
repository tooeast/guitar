<template>
  <div class="hello">
    <chart :matrix="mixed" :name="name"></chart>
  </div>
</template>

<script>
import chart from '@/components/chart.vue'

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
      index: 0
    }
  },
  mounted() {
    // console.log(matrixs.length);
    // this.mixed = matrixs[0].matrix;
    // this.name = matrixs[0].name;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hexuan {
  position: relative;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;

  .hexuan-name {
    font-size: 60px;
  }

  .hexuan-wrapper {
    position: relative;
    width: 100%;
    box-sizing: border-box;

    .hexuan-table-wrapper {
      width: 100%;

      .hexuan-table {
        display: inline-table;
        // padding: 0 30px;
        border-collapse: collapse;
        border-top: 5px solid gray;
        border-radius: 2px;

        tr {
          td {
            width: 49px;
            height: 90px;
            border: 2px solid gray;
          }
        }
      }
    }

    .hexuan-point-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;

      .hexuan-point {
        display: inline-table;
        // width: 100%;
        border-collapse: collapse;
        margin-top: 5px;

        tr {
          td {
            position: relative;
            width: 49px;
            height: 90px;
            border: 2px solid transparent;

            &.select {
              &::before {
                content: '';
                display: block;
                position: absolute;
                left: 50%;
                top: 50%;
                width: 20px;
                height: 20px;
                background-color: red;
                border-radius: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }

          // td.select {
          //   position: relative;
          //   height: 90px;
          //   border: 2px solid transparent;

          //   &::before {
          //     content: '';
          //     display: block;
          //     position: absolute;
          //     left: 50%;
          //     top: 50%;
          //     width: 20px;
          //     height: 20px;
          //     background-color: red;
          //     border-radius: 50%;
          //     transform: translate(-50%, -50%);
          //   }
          // }
        }
      }
    }
  }


}
</style>
