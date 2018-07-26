//
const util = require('../../utils/util.js')
// object 内容在页面加载时会进行一次深拷贝，需考虑数据大小对页面加载的开销

// Page(object)中的object尽可能少
Page({
  // 页面的初始数据
  data: {
    isLoading: true,
    telIcon: '../../images/phone.png',
    detail: {},// 详情
    list: [],// 推荐列表
  },
  // cycle-hook 监听页面加载
  onLoad(options) {
    wx.showLoading({
      title: '正在加载..',
      mask: true
    });
    this.getDetail(options.id);
  },
  // 模拟数据列表
  mockoData() {
    var str = '我不知道这会随机出现什么字，但是我必须要用到这个随机汉字，只能这样了，你觉得好吗？那就嘿嘿嘿，字数不够啊，再来几个，这下应该够了吧';
    const types = ['出租', '车找人', '招聘', '失物招领']
    var olist = [];
    for (let index = 0; index < 10; index++) {
      const item = {
        id: index,
        name: index + 1 + 'item',
        type: types[index % 4],
        cont: str,
        time: index % 2 == 0 ? '06-14' : '07-13'
      }
      olist.push(item)
    }
    return olist;
  },
  // 获取详情
  getDetail(id) {
    setTimeout(() => {
      wx.hideLoading()
      const detail = {
        id: 1,
        title: '竹山绿松石城招贤' + id,
        tel: '13452259099',
        time: '2018-07-25 21:09:10',
        cont: '饭店招工，18-45岁，女，包吃包住，工资2300-2800,在十堰，我在宝丰，我爸妈在那上班，绝对真实。有意的联系15897805213。'
      }
      const list = this.mockoData()
      this.setData({
        detail,
        list,
        isLoading: false
      })
    }, 2000);
  },

})
