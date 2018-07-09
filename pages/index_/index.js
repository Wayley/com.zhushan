//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //
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
    //最新消息
    infoList: [],
    page: 1,
    pagesize: 15

  },
  //事件处理函数
  bindViewTap: function () {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  goSearch: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  onLoad: function () {
    this.getData()

    //
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
  getUserInfo: function (e) {
    wx.showToast({
      title: 'hhh',
      duration: 2000
    })
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  mockData() {
    wx.showNavigationBarLoading()
    return new Promise((resolve, reject) => {
      let arr = []
      for (let i = 0; i < this.data.pagesize; i++) {
        let item = {
          id: i,
          cont: i + '===' + this.data.page + '今天是个好日子,深圳市即将开通通往M43星球的航班。这是国内首次通往外太空的民营航线。售票电话：13886871980',
          type: '出租',
          time: '2018-7-3'
        }
        arr.push(item)
      }
      resolve(arr)
    })
  },
  getMore() {
    console.log(this.data.page, '====12')
    this.setData({
      page: this.data.page + 1
    });
    this.getData();
  },
  getData: function () {
    this.mockData().then(res => {
      console.log(123, '-----', res)
      this.setData({
        infoList: res
      })
    })
  }
})
