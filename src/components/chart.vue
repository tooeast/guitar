<template>
  <div class="hexian">
    <div class="hexian-name" v-if="name">{{ name }}</div>
    <div class="hexian-wrapper">
      <div class="hexian-table-wrapper">
        <table class="hexian-table">
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div class="hexian-point-wrapper">
        <table class="hexian-point">
          <tr v-for="(todo, index) in realMatrix" :key="index">
            <td v-for="(item, key) in todo" :key="key" :class="getClassName(item)" :data-num="item"></td>
          </tr>
        </table>
      </div>

      <div class="hexian-prefix">{{ prefix }}</div>
    </div>

    <div class="hexian-desc">
      <p>
        <span>{{ desc.join(', ') }}</span>
      </p>
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
      type: Array
    },
    prefix: {
      type: Number,
      default: 1
    },
    desc: {
      type: Array
    }
  },
  data() {
      return {
         defaultArr: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
         ],
         realMatrix: []
      }
  },
  watch: {
    matrix: {
        immediate: true,
        handler (val) {
            this.realMatrix = this.defaultArr.map((todo, index) => {
                return todo.map((item, key) => {
                    return (val[index] && val[index][key]) ? val[index][key] : item;
                })
            })
        }
    }
  },
  methods: {
    getClassName(item) {
      return item > 0 ? 'select' : (item < 0 ? 'delete' : ''); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hexian {
  position: relative;
  width: 360px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;

  .hexian-name {
    font-size: 60px;
  }

  .hexian-wrapper {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    // margin-left: 20px;

    .hexian-table-wrapper {
      width: 100%;
      padding: 0 26.5px;
      box-sizing: border-box;

      .hexian-table {
        display: inline-table;
        width: 100%;
        margin-top: 35px;
        border-collapse: collapse;
        border-top: 5px solid gray;
        border-radius: 2px;

        tr {
          td {
            // width: 49px;
            height: 60px;
            border: 2px solid gray;
          }
        }
      }
    }

    .hexian-point-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;

      .hexian-point {
        display: inline-table;
        width: 100%;
        border-collapse: collapse;
        // margin-top: 5px;

        tr {
          &:first-child {
            td {
              position: relative;
              width: 49px;
              height: 35px;
              border: 2px solid transparent;

              &.select {
                &::before {
                  content: '';
                  display: block;
                  position: absolute;
                  left: 50%;
                  top: 0;
                  width: 28px;
                  height: 28px;
                  background-color: #fff;
                  border: 1px solid gray;
                  border-radius: 50%;
                  transform: translateX(-50%);
                }
              }

              &.delete {
                &::before, &::after {
                  content: '';
                  display: block;
                  position: absolute;
                  left: 50%;
                  top: 15px;
                  width: 32px;
                  height: 2px;
                  background-color: gray;
                }

                &::before {
                  transform: rotate(45deg) translateX(-50%);
                  transform-origin: left;
                }

                &::after {
                  transform: rotate(-45deg) translateX(-50%);
                  transform-origin: left;
                }
              }
            }
          }

          td {
            position: relative;
            // width: 49px;
            height: 60px;
            border: 2px solid transparent;

            &.select {
              &::before {
                content: attr(data-num);
                display: block;
                position: absolute;
                left: 50%;
                top: 50%;
                width: 30px;
                height: 30px;
                background-color: green;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                text-align: center;
                line-height: 30px;
                font-weight: bold;
                font-size: 20px;
              }
            }
          }
        }
      }
    }

    .hexian-prefix {
      position: absolute;
      left: -15px;
      top: 45px;
      width: 30px;
      height: 40px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
    }
  }

  .hexian-desc {
    width: 320px;
    min-height: 70px;
    margin: 20px auto 0;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: #ebebeb;
    border-radius: 4px;

    p {
      margin: 0;
      line-height: 25px;
      text-align: left;
    }
  }
}
</style>
