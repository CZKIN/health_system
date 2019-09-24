// pages/show/show.js
var form_data = require('../../utils/utils.js')

//获取应用实列
var app = getApp()
Page({
  data:{
    answers:{},
    answer:{},
    tupian:{},
    checked_0:false,
    checked_1:false
  },

  formSubmit:function(e){
    var random = Math.floor(Math.random() * 12);
    var nextId = e.detail.value.nextId;
    if(nextId == ""){
      return;
    }
    if (nextId.indexOf('result') != -1){
      var results = nextId.split('_');
      wx.redirectTo({
        url: '../result/result?id='+results[1]
      })
    }
    else{
      this.setData({
        checked_0:false,
        checked_1:false,
        answer:this.data.answers[nextId]
      });
    }
    this.setData({
      tupian: random
    })
  },
  onLoad: function (options){
    var random = Math.floor(Math.random() * 12);
    var id = options['id']
    var ans = form_data.question1_answer();
    if(id==2){
      ans = form_data.question2_answer();
    }
    this.setData({
      answers:ans,
      answer:ans[0],
    });
    this.setData({
      tupian:random
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