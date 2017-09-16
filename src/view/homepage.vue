<template>
  <div class="homepage">
    {{msg}}
    <p>面向手机用户的页面，请打开调试模式！</p>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: '主页!目前只开发了电影页面。请不用期待....'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 	.homepage{
 		font-size: 1rem;
 	}
</style>
