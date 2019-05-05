// pages/GroupDetail/GroupDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页轮播图
    imgUrls: [
      {
        imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        article_id: '1'
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        article_id: '2'
      },
      {
        imgUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        article_id: '3'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    listData: [
      { "code": "1", "time": "2019-01-17", "type": "type1" },
      { "code": "2", "time": "2019-04-20", "type": "type2" },
    ]
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