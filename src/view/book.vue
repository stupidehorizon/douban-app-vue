<template>
  <div class="homepage">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: '图书 开发中....(我自己都不信)'
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

