<template>
  <div class="warning-block" v-bind:class="[ show ? 'show' : 'hide']">
      <div class="top-bar">
        <div class="orange-info">
          <img src="/info.svg" alt="information">
          <span>I'm sorry but..</span>
        </div>
        <img src="/close.svg" alt="close" class="close" v-on:click="() => this.$emit('closeBlock')">
      </div>
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'warningBlock',
  props: ['message', 'show']
}
</script>

<style lang="scss" scoped>

.warning-block{
    padding: 25px;
    position: absolute;
    background-color: #fff;
    transform: translate(15vw, 10vh);
    border: none;
    border-radius: 20px;
    box-shadow: 10px 30px 100px #0000001c;
    .top-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: #FFBC7E;
        .orange-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        img{
            height: 30px;
            margin-right: 10px;
        }
        span{
            font-size: 1rem;
            font-family: sk-modernist-bold, sans-serif;
        }
        }
        .close{
        height: 15px;
        cursor: pointer;
        }
    }
    p{
        margin-left: 40px;
        font-size: 1.1rem;
    }
}
</style>