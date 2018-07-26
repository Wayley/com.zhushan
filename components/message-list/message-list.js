Component({
  // 组件属性
  properties: {
    title: {
      type: String,
      value: '',
    },
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    goDetail(e) {
      const id = e.currentTarget.dataset['id'];
      const url = '../detail/detail?id=' + id;
      wx.navigateTo({
        url
      })
    }
  }
})