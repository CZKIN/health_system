// pages/statistics/statistics.js

var app = getApp();
Page({
  data:{
    total_user:{},
    user_high:{},
    user_low:{},
    user_wrong:{},
    user_right:{},
    user_total:{},
    user_rate:{}
  },
  onLoad:function(e){
    var windowWidth = 320;
    var that = this;
    wx.request({
      url: 'https://health.stusar.com/readscore.php',
      success:function(res){
        that.setData({
          user_wrong: res.data.user_wrong,
          user_right: res.data.user_right,
          user_total: res.data.user_total,
          user_rate: res.data.user_rate
        })
      }
    })
    wx.request({
      url: 'https://health.stusar.com/readuser.php',
      success:function(res){
        that.setData({
          total_user: res.data.user_total,
          user_high: res.data.user_high,
          user_low: res.data.user_low
        })
      }
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
      imageUrl: 'https://health.stusar.com/share.png',
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