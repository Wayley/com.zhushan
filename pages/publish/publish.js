//
import { filterValue } from '../../utils/util';
// object 内容在页面加载时会进行一次深拷贝，需考虑数据大小对页面加载的开销

// Page(object)中的object尽可能少
Page({
  // 页面的初始数据
  data: {
    newsTypeId: '',// 信息类型id
    content: '',// 发布的内容
    phone: '',// 发布者电话
    uploadList: [],
    typeList: {},
  },
  // cycle-hook 监听页面加载
  onLoad(options) {
    const uploadList = this.getUploadImgList()
    this.setData({
      uploadList
    });
    this.getTypeList()
  },

  getTypeList() {
    const typeList = {
      "201": "人找车",
      "202": "出售",
      "203": "招聘",
      "204": "转让",
      "205": "求助",
      "206": "车找人",
      "207": "出租",
      "208": "求职",
      "209": "求购",
      "210": "打听"
    }
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
  },
  // 选择信息类型
  chooseTag(e) {
    const newsTypeId = e.target.dataset['id'];
    this.setData({
      newsTypeId
    })
    console.log(e)
  },
  submit() {
    const params = {
      openid: "32412421544125",
      townId: 101,
      newsTypeId: 201,
      content: "我测试一下看不能发个信息",
      phone: "13564554522",
      imageurl: "https://www.wuliaokankan.cn/file/wlkk/headimg/19.jpg"
    }
    const a = filterValue(this.data, ['newsTypeId', "content", "phone"])
    console.log(a)
  }
})
