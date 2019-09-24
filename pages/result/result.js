// pages/result/result.js
//获取结果数据
var form_data = require('../../utils/utils.js')
//获取应用实例
var app = getApp()
Page({
  data:{
    result:{},
    condition:{},
    sign:{},
    code:{}
  },
  onLoad:function(options){
    var id = options['id']
    var tips = form_data.tips();
    var random = Math.floor(Math.random() * 15);
    var results = form_data.question_result();
    this.setData({
      result:results[id],
      condition: results[id].status,
      code: tips[random].tip
    })
    if(this.data.condition == 1){
      wx.request({
        url: 'https://health.stusar.com/upduser.php?high=1&&low=0',
      })
    }else if(this.data.condition ==0 ){
      wx.request({
        url: 'https://health.stusar.com/upduser.php?high=0&&low=1',
      })
    }
  },
  finish: function(){
    wx.showModal({
      title: '问卷调查',
      content: '感谢您的使用，请问您认为这个结果是否准确呢？',
      confirmText:'准确',
      cancelText:'不准',
      success: function(res){
        if(res.confirm){
          wx.request({
            url: 'https://health.stusar.com/updscore.php?right=1&&wrong=0',
            success:function(res){
                wx.showToast({
                  title: '已提交',
                  icon: 'succes',
                  duration: 1000,
                  mask: true
                })
               }
          }),
          setTimeout(function(){
            wx.redirectTo({
              url: '../index/index',
            })
          },1000)
        }else if(res.cancel){
          wx.request({
            url: 'https://health.stusar.com/updscore.php?right=0&&wrong=1',
            success: function (res){
              wx.showToast({
                title: '已提交',
                icon:'succes',
                duration:1000,
                mask:true
              })
            }
          }),
          setTimeout(function () {
            wx.redirectTo({
              url: '../index/index',
            })
          }, 1000)
        }
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