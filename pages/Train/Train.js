// pages/Train/Train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 0,   //那个显示active
    leftArr: [
      { 'id': '0', 'name': '新手指南' },
      { 'id': '1', 'name': '反恐防范' },
      { 'id': '2', 'name': '求职安全' },
      { 'id': '3', 'name': '游泳安全' },
      { 'id': '4', 'name': '娱乐安全' },
    ],
    rightArr: [
      { id: "11", src: "/images/icon.png", name: "电脑" },
      { id: "11", src: "/images/icon.png", name: "电脑" },
      { id: "11", src: "/images/icon.png", name: "电脑" },
      { id: "11", src: "/images/icon.png", name: "电脑" }
    ]
  },

  switchRightTab: function (e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    // console.log();
    that.setData({
      curNav: id,
      rightArr: [
        { id: id, src: "/images/icon.png", name: "电脑" + id },
        { id: id, src: "/images/icon.png", name: "电脑" + id },
        { id: id, src: "/images/icon.png", name: "电脑" + id },
        { id: id, src: "/images/icon.png", name: "电脑" + id },
        { id: id, src: "/images/icon.png", name: "电脑" + id },
        { id: id, src: "/images/icon.png", name: "电脑" + id },
        { id: id, src: "/images/icon.png", name: "电脑" + id }
      ]
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