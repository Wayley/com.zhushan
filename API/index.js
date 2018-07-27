const $apis = {

  api(url, methods, data = {}) {
    if (!url) {
      throw Error('url必填');
    }
    wx.showNavigationBarLoading()
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method: methods || 'GET',
        header: { 'content-Type': 'application/json' },
        success: (res) => {
          if (res.statusCode == 200) {
            resolve(res.data);
          } else {
            reject(res)
          }
          wx.hideNavigationBarLoading();
        },
        fail: (msg) => {
          wx.hideNavigationBarLoading();
          reject(msg || 'fail')
        }
      })
    })
  },
}