//
const util = require('../../utils/util.js')
// object 内容在页面加载时会进行一次深拷贝，需考虑数据大小对页面加载的开销

// Page(object)中的object尽可能少
Page({
  // 页面的初始数据
  data: {
    olist: [],
    list: [],
    page: 1,

    bannerList: [
      {
        id: 'football1',
        url: '/pages/my/my',
        img: '/images/banner_1.png'
      }, {
        id: 'football2',
        url: '/pages/my/my',
        img: '/images/banner_2.png'
      }
    ],

    menuList: [
      {
        id: 1,
        url: '/pages/my/my',
        iconClass: 'for-car',
        name: '人找车'
      }, {
        id: 2,
        url: '/pages/my/my',
        iconClass: 'sale',
        name: '出售'
      }, {
        id: 3,
        url: '/pages/my/my',
        iconClass: 'employ',
        name: '招聘'
      }, {
        id: 4,
        url: '/pages/my/my',
        iconClass: 'transfer',
        name: '转让'
      }, {
        id: 5,
        url: '/pages/my/my',
        iconClass: 'help',
        name: '求助'
      }, {
        id: 6,
        url: '/pages/my/my',
        iconClass: 'for-person',
        name: '车找人'
      }, {
        id: 7,
        url: '/pages/my/my',
        iconClass: 'land',
        name: '出租'
      }, {
        id: 8,
        url: '/pages/my/my',
        iconClass: 'for-job',
        name: '求职'
      }, {
        id: 9,
        url: '/pages/my/my',
        iconClass: 'for-goods',
        name: '求购'
      }, {
        id: 0,
        url: '/pages/my/my',
        iconClass: 'asking',
        name: '打听'
      },
    ],

    recomNews: [
      {
        id: 1,
        title: '勒布朗-詹姆斯的经纪团队正式宣布，詹姆斯与湖人达成4年1.54亿美元口头协议，其中第四年为球员选项，双方将等到当地时间7月6日合约冻结期结束后正式签约。',
        url: '/pages/my/my',
      },
      {
        id: 2,
        title: '2018年休赛期最大悬念至此揭晓，詹姆斯结束与老东家骑士的合作，NBA生涯首次转战西部',
        url: '/pages/my/my',
      },
      // {
      //   id: 3,
      //   title: '生涯首次转战西部',
      //   url: '/pages/my/my',
      // }
    ],


  },
  // cycle-hook 监听页面加载
  onLoad(options) {
    this.mockoData();
    this.getData();
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

  mockoData() {
    var str = '我不知道这会随机出现什么字，但是我必须要用到这个随机汉字，只能这样了，你觉得好吗？那就嘿嘿嘿，字数不够啊，再来几个，这下应该够了吧';
    const types = ['出租', '车找人', '招聘', '失物招领']
    var olist = [];
    for (let index = 0; index < 100; index++) {
      const item = {
        index,
        name: index + 1 + 'item',
        type: types[index % 4],
        cont: str,
        time: index % 2 == 0 ? '06-14' : '07-13'
      }
      olist.push(item)
    }
    this.setData({
      olist
    });
  },
  getData() {
    let list = this.data.list;
    const s = (this.data.page - 1) * 15;
    const e = (this.data.page + 1) * 15;
    const nlist = this.data.olist.slice(s, e);
    list = list.concat(nlist)
    // console.log(nlist, s, e)

    this.setData({
      list
    })
  },
  searchScrollLower() {
    this.setData({
      page: this.data.page + 1
    })
    console.log(this.data.page)
    this.getData();
  },

})
