// pages/UserInfo/UserInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_area: [
      { id: 1, name: '市级' },
      { id: 2, name: '增城区' },
      { id: 3, name: '从化区' }
    ],
    index_area: 0,
  },

  bindPickerChangeArea: function (e) {
    let that = this;
    let index = e.detail.value;
    // let array_area_id = that.data.array_area[index].id;
    that.setData({
      index_area:index
    })
    // console.log(array_area_id);
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