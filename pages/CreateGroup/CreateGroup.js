// pages/CreateGroup/CreateGroup.js
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
    imgs: [],             //上传图片的url路径
    img_ids: [],          //上传图片的id
    img_count: 1,         //目前可以上传图片的数量

    uploaderImg: "/images/upload.png",
  },

  selectImg: function () {
    let that = this;
    wx.chooseImage({
      count: that.data.img_count, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        for (var i = 0; i < tempFilePaths.length; i++) {
          wx.uploadFile({
            // url: app.globalData.url +'wx/img_file',
            url: config.imgFileUrl,
            filePath: tempFilePaths[i],
            method: "POST",
            name: 'img',
            formData: {
              token: app.globalData.token,
              openId: app.globalData.openId,
              org_id: that.data.org_id
            },
            header: {
              'content-type': 'multipart/form-data' // 默认值
            },
            success: function (res) {
              if (res.data.code == 1403) {
                app.errorPrompt(res.data);
              }
              let arrs1 = that.data.img_ids.concat(res.data);
              that.setData({
                img_ids: arrs1
              })
            }
          })
        }
        let old_imgs = that.data.imgs.concat(tempFilePaths);
        let count = that.data.img_count - tempFilePaths.length;
        that.setData({
          imgs: old_imgs,
          img_count: count
        });
      }
    })
  },

  bindPickerChangeArea: function (e) {
    let that = this;
    let index = e.detail.value;
    // let array_area_id = that.data.array_area[index].id;
    that.setData({
      index_area: index
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