<template>
  <div class="mySection">
      <div class="header">
      	<h1>{{title}}</h1>
      	<router-link :to="{name: 'more', params: {title: title, api: dataApi } }">更多</router-link>
      </div>
      <div class="row">
	        <ul>
	        	<li v-for="item in list">
	        		<router-link :to="{name: 'detail',params: {id: item.id }}">
	        			<div class="img" :style="{backgroundImage:'url('+item.images.medium+')'}"></div>
	        			<span>{{item.title}}</span>
	        			<div class="rating">
	        				<div class="starbox" v-if="item.rating.average">
	        					<span class="star" :class="[item.rating.average>=1? 'yellow ': 'gray']"></span>
	        					<span class="star" :class="[item.rating.average>=3 ? 'yellow ': 'gray']"></span>
	        					<span class="star" :class="[item.rating.average>=5 ? 'yellow ': 'gray']"></span>
	        					<span class="star" :class="[item.rating.average>=7 ? 'yellow ': 'gray']"></span>
	        					<span class="star" :class="[item.rating.average>=9? 'yellow ': 'gray']"></span>
	        					<span>{{item.rating.average}}</span>
	        				</div>
	        				<div v-else class="norating">暂无评分</div>
	        			</div>
	        		</router-link>
	        	</li>
	        </ul>
      	</div>
  </div>
</template>

<script>
export default {
  name: 'mySection',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.get(this.dataApi)
  },
  props: ['title', 'dataApi'],
  methods: {
    get (url) {
      this.$http.get('https://bird.ioliu.cn/v1/?url=' + url + '?count=8').then((res) => { // 箭头函数确保this指向vue实例
        this.list = res.data.subjects
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mySection{
	>.header{
		height:2rem;
		padding:0 1.12rem;
		>h1{
			margin:0;
			font-size:1.06rem;
			color:#111;
			font-weight:normal;
			display:inline-block;
			line-height:2rem;
		}
		>a{
			text-decoration:none;
			float:right;
			line-height:2rem;
			color:#42bd56;
			font-size:.9rem;
		}
	}
	.row{
		padding-bottom:20px;
		margin:0;
		white-space:nowrap;
		overflow-x:auto;
		ul{
			margin:0;
			padding:0;
			li{
				display:inline-block;
				list-style:none;
				width:100px;
				margin-left:.6rem;
				text-align:center;
				overflow:hidden;
				.img{
					width:100%;
					background-size:cover;
					background-position: center;
					height:147px;
				}
				a{
					text-decoration:none;
					color:#111;
					font-size:.94rem;
				}
				span{
					display:block;
					max-width:100%;
					overflow:hidden;
					white-space: nowrap;
   				    text-overflow: ellipsis;
				}
				.rating{
					font-size:.72rem;
					.starbox{
						span{
							display:inline-block;
							vertical-align:middle;
							color:#aaa;
							font-size:.72rem;
						}
						.star{
							display: inline-block;
   							margin-right: 1px;
						    background-color: transparent;
						    background-repeat: no-repeat;
						    height: 10px;
   							width: 10px;
   							background-size: cover;
						}
						.yellow{
							background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");
						}
						.gray{
							background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
						}
					}
					.norating{
						height:13.6px;		
					}
				}
			}
		}
	}
}

</style>
