
import util from "../../utils/util";
import $apis from "../../API/index";
var appInstance = getApp()

Page({
  data: {
    curTid: '',// 信息类型
    curTname: '',// 信息类型名称
    page: 1,
    list: [],
  },
  onLoad(options) {
    // 获取页面信息类型参数
    const curTid = options.tid;
    const curTname = options.tname;
    this.setData({
      curTid,
      curTname
    });
    // 修改导航Title
    wx.setNavigationBarTitle({
      title: options.tname + ' 信息列表'
    })
    this.getData()
  },



  // 自定义数据
  customData: {
    aa: '222'
  },
  getData() {
    console.log(new Date(1523603666000), 99)

    const params = {
      page: this.data.page,
      newstype: this.data.curTid,
      town: appInstance.globalData.townId
    }
    $apis.request('queryNewsInfo', 'POST', params).then(res => {
      const list = res.data.news || [];
      this.setData({
        list
      })
    })
  },
  formatTime(date) {
    return new Date(date)
  },
  // 滚动
  searchScrollLower() {
    this.setData({
      page: this.data.page + 1
    })
    this.getData();
  },

})
