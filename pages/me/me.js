// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //长按事件
    touchStartTime: 0,    // 触摸开始时间
    touchEndTime: 0,      // 触摸结束时间
    // imgs: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
    imgs: '/images/helloWorld.png'
  },

  //二维码图片预览  单击事件
  imgShow: function (e) {
    let that = this;
    let current_src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current_src, // 当前显示图片的http链接
      urls: [current_src] // 需要预览的图片http链接列表
    })
  },

  // 联系我们
  showContactMode:function(){
    wx.showModal({
      title: '联系方式',
      content: '联系邮箱：1455304928@qq.com',
      showCancel:false,
      // confirmColor: '#fff',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 跳转到指定页面
  toUrl: function (e) {
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../'+url,
    });
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