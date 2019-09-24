//index.js
//获取实例
var app = getApp()
Page({
  data:{
    rate:{},  //准确率
    //图片轮播变量
    mode: "scaleToFill",  
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

  },
  onLoad:function(){
    //准确率
    var that = this
    wx.request({
      url: 'https://health.stusar.com/readscore.php',
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        that.setData({
          rate:res.data.user_rate
        })
      }
    })
    //图片轮播
    var array = this.data.arr
    for(let i = 1; i < 3; i++){
      array.push("../../image/"+ i + ".png")
    }
    this.setData({
      arr:array
    })
  },
  //事件处理函数
  question1: function(){
    wx.redirectTo({
      url: '../show/show?id=1',
    })
  },
  question2: function(){
    wx.redirectTo({
      url: '../show/show?id=2',
    })
  },
  to_news:function(){
    wx.navigateTo({
      url: '../news/news',
    })
  },

  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '糖尿病风险预测系统',
      path: 'pages/index/index',
      imageUrl:'https://health.stusar.com/share.png',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }
})