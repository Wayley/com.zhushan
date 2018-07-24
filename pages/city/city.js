//
const util = require('../../utils/util.js')
// object 内容在页面加载时会进行一次深拷贝，需考虑数据大小对页面加载的开销

// Page(object)中的object尽可能少
Page({
  // 页面的初始数据
  data: {
    curCity: '深圳',
    visited: [{
      id: 1,
      name: '北京'
    }, {
      id: 2,
      name: '深圳'
    }, {
      id: 3,
      name: '上海'
    }, {
      id: 4,
      name: '广州'
    }, {
      id: 5,
      name: '武汉'
    }],
    // 热门
    hot: [{
      id: 1,
      name: '北京'
    }, {
      id: 2,
      name: '深圳'
    }, {
      id: 3,
      name: '上海'
    }, {
      id: 4,
      name: '广州'
    }, {
      id: 5,
      name: '武汉'
    }, {
      id: 6,
      name: '杭州'
    }],

  },
  // cycle-hook 监听页面加载
  onLoad(options) {
  },
  // cycle-hook 监听页面初次渲染完成
  onReady() { },
  // cycle-hook 监听页面显示
  onShow() { },
  // cycle-hook 监听页面隐藏
  onHid() { },
  // cycle-hook 监听页面卸载
  onUnload() { },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() { },
  // 页面上拉触底事件的处理事件
  onReachBottom() { },
  // 用户点击右上角转发
  onShareAppMessage() { },
  // 页面滚动触发事件的处理事件
  onPageScroll() { },
  // 当前是tab页时，点击tab页时触发
  onTabItemTap(item) { },



  // 自定义数据
  customData: {},
  // 自定义handler
  viewTap() { },

  goSearch() {
    wx.navigateTo({
      url: '../search/search'
    })
  }

})
