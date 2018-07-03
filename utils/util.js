const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//
function getSearchMusic(keyword, pageindex, callbackcount, callback) {
  // api()
  wx.request({
    url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      w: keyword,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf-8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: callbackcount,  //返回数据的个数
      p: pageindex,
      remoteplace: 'txt.mqq.all',
      _: Date.now()
    },
    method: 'GET',
    header: { 'content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}
function api(url, methods, data = {}) {
  if (!url) {
    console.log('url必填');
    return;
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
}
module.exports = {
  formatTime: formatTime,
  getSearchMusic: getSearchMusic
}


