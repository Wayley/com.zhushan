const utils = {
  $date: {
    getMD(date) {

    }
  },
  formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
  },
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  getSearchMusic(keyword, pageindex, callbackcount, callback) {
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
  },
  filterValue(orginData, keyArray) {
    let nobj = {};
    // [].forEach(orginData, (value, key) => {
    //   var isNeed = Array.indexOf(keyArray, key) > -1;

    //   if (isNeed) {
    //     nobj[key] = value;
    //   }
    // });
    return nobj;
  },
}



module.exports.default = module.exports = utils