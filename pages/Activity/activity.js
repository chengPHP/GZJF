// pages/Activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active_index:1,
    activ_name:'',
    array_area: [
      { id: 1, name: '全部' },
      { id: 2, name: '市级' },
      { id: 3, name: '增城区' },
      { id: 4, name: '从化区' }
    ],
    array_type: [
      { id: 1, name: '全部'},
      { id: 2, name: '巡防' },
      { id: 3, name: '信息' },
      { id: 4, name: '宣传' },
      { id: 5, name: '调解' },
      { id: 6, name: '其他' }
    ],
    array_status: [
      {id: '1',name: '全部'},
      {id: '2', name: '未开始'},
      {id: '3', name: '进行中'},
      ],
    index_area: 0,
    index_type: 0,
    index_status: 0
  },

  tabItemShow:function(e){
    let that = this;
    let index = e.currentTarget.dataset.id;
    console.log(index);
    that.setData({
      active_index : index
    });
  },
  toActivityDetail:function (){
    wx.navigateTo({
      url: '/pages/ActivityDetail/ActivityDetail'
    })
  },

  bindPickerChangeArea: function (e) {
    let that = this;
    let index = e.detail.value;
    let array_area_id = that.data.array_area[index].id;
    console.log(array_area_id);
  },

  bindPickerChangeType: function (e) {
    let that = this;
    let index = e.detail.value;
    let array_type_id = that.data.array_type[index].id;
    console.log(array_type_id);
  },

  bindPickerChangeStatus:function (e){
    let that = this;
    let index = e.detail.value;
    let array_status_id = that.data.array_status[index].id;
    console.log(array_status_id);
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