//
const util = require('../../utils/util.js')
// object 内容在页面加载时会进行一次深拷贝，需考虑数据大小对页面加载的开销

// Page(object)中的object尽可能少
Page({
  // 页面的初始数据
  data: {
    uploadList: []
  },
  // cycle-hook 监听页面加载
  onLoad(options) {
    const uploadList = this.getUploadImgList()
    this.setData({
      uploadList
    })
  },
  // cycle-hook 监听页面初次渲染完成
  onReady() {
    this.getTypeList();
  },
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
  getTypeList() {
    const typeList = [
      { id: 1, name: '人找车' },
      { id: 2, name: '出售' },
      { id: 3, name: '招聘' },
      { id: 4, name: '转让' },
      { id: 5, name: '求助' },
      { id: 6, name: '车找人' },
      { id: 7, name: '出租' },
      { id: 8, name: '求职' },
      { id: 9, name: '求购' },
      { id: 10, name: '打听' },
    ]
    this.setData({
      typeList
    })
  },
  getUploadImgList() {
    let list = []
    for (let i = 0; i < 7; i++) {
      list.push({ id: i + 1, url: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg' })
    }
    return list
  },
  uploadImg() {
    let uploadList = this.data.uploadList;
    uploadList.push({ id: 'a' + uploadList.length, url: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg' });
    this.setData({ uploadList })
  }
})
