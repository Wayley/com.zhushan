//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menus: [
      {
        id: 1,
        url: '',
        label: '已发布信息'
      }, {
        id: 2,
        url: '',
        label: '新手攻略'
      }, {
        id: 3,
        url: '',
        label: '分享给好友'
      }, {
        id: 4,
        url: '',
        label: '投诉与建议'
      }, {
        id: 5,
        url: '',
        label: '联系客服'
      }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // button open-type="getUserInfo"的事件函数
  getUserInfo: function (data) {
    app.globalData.userInfo = data.detail.userInfo
    this.setData({
      userInfo: data.detail.userInfo,
      hasUserInfo: true
    })
  },
})
