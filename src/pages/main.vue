<template>
  <div class="hello">
    <div class="hexuan">
      <div class="hexuan-name">AM</div>
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
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
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

  .hexuan-table {
    display: table;
    width: 100%;
    // border: 1px solid red;
    // box-sizing: border-box;
    border-collapse: collapse;
    // border-spacing: 10px;

    tr {
      td {
        height: 90px;
        border: 2px solid gray;
      }
    }
  }
}
</style>
