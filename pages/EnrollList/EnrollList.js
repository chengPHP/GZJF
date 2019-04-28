// pages/EnrollList/EnrollList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false,  //“没有数据”的变量，默认false，隐藏  
    page: 1,   //分页
    items: [],
    content: '1',    //判断上拉是否还有数据
    itemsLength: ''  //获取有无数据
  },

  //下拉刷新
  onPullDownRefresh: function () {
    let that = this;
    wx.showNavigationBarLoading() //在标题栏中显示加载

    wx.request({
      url: config.repairListUrl,
      method: "POST",
      data: {
        role: app.globalData.role,
        token: app.globalData.token,
        status: that.data.status,
        openId: app.globalData.openId,
        page: 1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          items: [],
          page: 1,
          itemsLength: '1',
          content: '1',
        });
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        if (res.data.code == 0) {
          that.setData({
            itemsLength: '0',
            content: '1',
            page: 1
          })

        } else if (res.data.code == 1403) {
          app.errorPrompt(res.data);
        } else {
          let arr = [];
          let data = res.data;
          for (var i = 0; i < data.length; i++) {
            arr[i] = [[data[i].img_url], data[i].name, data[i].path, data[i].repair_id];
          }
          that.setData({
            items: arr,
            page: 1,
            itemsLength: 1,
            content: '1',
          })
        }
      },
      fail: function () {
        wx.hideLoading();
        app.requestError();
      }
    })
  },

  //上拉加载更多 
  //滚动到底部触发事件  
  searchScrollLower: function () {
    let that = this;
    if (that.data.content != '0') {
      wx.showLoading();
      wx.request({
        url: config.repairListUrl,
        method: "POST",
        data: {
          role: app.globalData.role,
          token: app.globalData.token,
          status: that.data.status,
          openId: app.globalData.openId,
          page: that.data.page + 1
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if (res.data.length > 0) {
            let arr = [];
            let data = res.data;
            for (var i = 0; i < data.length; i++) {
              arr[i] = [[data[i].img_url], data[i].name, data[i].path, data[i].repair_id];
            }
            let arr1 = that.data.items;
            let arrs = arr1.concat(arr);
            that.setData({
              items: arrs,
              page: that.data.page + 1
            });
          } else if (res.data.code == 1403) {
            app.errorPrompt(res.data);
          }
          if (res.data.length < 10) {
            that.setData({
              content: '0'
            })
          }
          if (res.data.code == 0) {
            that.setData({
              content: '0'
            })
          }
        },
        fail: function () {
          wx.hideLoading();
          app.requestError();
        },
        complete: function () {
          wx.hideLoading();
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})