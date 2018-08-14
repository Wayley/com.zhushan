import config from "../config";

const $apis = {
  // 网络请求
  request(url, methods = '', data = {}) {
    if (!url) {
      throw Error('url必填');
    }
    url = config.baseURL + '/' + url;// 添加前缀
    wx.showNavigationBarLoading();
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method: methods.toUpperCase() || 'GET',
        header: { 'content-type': 'application/json' },
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
export default $apis;