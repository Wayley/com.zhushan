
import utils_ from "../../utils/util";
import $apis from "../../API/index";


const app = getApp()

Page({
  // 页面的初始数据
  data: {
    curCity: '深圳',
    visited: {
      '10002': '北京',
      '100044': '宝丰'
    },
    // 热门
    hot: {
      '10002': '北京',
      '10003': '深圳',
    },
    // 全部
    townList: {},
  },
  // cycle-hook 监听页面加载
  onLoad(options) {
    $apis.request('getDataType/100').then(res => {
      const townList = res.data || {};
      this.setData({
        townList
      })
    })
  },



  // 自定义数据
  customData: {},
  // 选择位置
  confirmLocation(e) {
    const townId = e.target.dataset['id'] || '';
    // 手动更改位置
    app.globalData.townId = townId;
    wx.switchTab({
      url: '../index/index'
    })
  },

  goSearch() {
    wx.navigateTo({
      url: '../search/search'
    })
  }

})
