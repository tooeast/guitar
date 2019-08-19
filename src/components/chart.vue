<template>
    <div class="hexuan">
        <div class="hexuan-name" v-if="name">{{ name }}</div>
        <div class="hexuan-wrapper">
        <div class="hexuan-table-wrapper">
            <table class="hexuan-table">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </table>
        </div>

        <div class="hexuan-point-wrapper">
            <table class="hexuan-point">
            <tr v-for="(todo, index) in realMatrix" :key="index">
                <td v-for="(item, key) in todo" :key="key" :class="item ? 'select' : ''"></td>
            </tr>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    name: {
        type: String,
        default: ''
    },
    matrix: {
        type: Array,
        default: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    }
  },
  data() {
      return {
         defaultArr: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
         ],
         realMatrix: []
      }
  },
  watch: {
    matrix: {
        immediate: true,
        handler (val) {
            // console.log(val)
            // for(let i = 0; i )
            this.realMatrix = this.defaultArr.map((todo, index) => {
                return todo.map((item, key) => {
                    return (val[index] && val[index][key]) ? val[index][key] : item;
                })
            })
        }
    }
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
        }
      }
    }
  }
}
</style>
