# 使用VUE仿豆瓣h5页面
### vue vue-router axios 豆瓣API JsonBird
> 使用了JsonBird进行跨域

大概是几个月前自己就看完了vue文档，仿写过别人的一些vue项目，但是中间因为找实习和去实习导致这几个月基本上没有怎么用vue。学完不用的东西就等于没学。所以忙里偷闲自己赶快捡起来练练。  
准确来说这是我自己独立完成的第一个VUE项目，因为之前的项目都是模仿比人的做的，所以给自己的印象不是很深刻！     
## 预览
[![项目gif](http://wx1.sinaimg.cn/mw690/005NdwvWly1fjlpr209wyg30co0m4npd.gif "项目gif")](http://wx1.sinaimg.cn/mw690/005NdwvWly1fjlpr209wyg30co0m4npd.gif "项目gif")
## 体会
经过这次的项目我充分感受到了组件化对前端工程带来的便利性。因为这次的movie页面我基本上只写了一个组件<my-section>就完成了整个页面。同时进一步加深了对vue-router的理解，使用动态参数传递类似'/movie/:id'来传递值，唯一不足的是没有用到vuex，因为项目本身也比较简单。

## TODO
昨天开的项目，今天周六大概写了8个小时写完了一个页面感觉还是很快，这个项目的出发点就是练手可能也不会这更新了。将来可能会对按需加载，状态保持等做进一步研究！  


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
