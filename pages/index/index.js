//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 首页轮播图
    imgUrls: [
      { 
        imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        article_id:'1'
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
    // 首页公告展示数据
    notice:{
      imgUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      url: 'https://www.baidu.com'
    }
  },
  toTabUrl:function(e){
    let url = e.currentTarget.dataset.tabUrl;
    console.log(url);
    wx.navigateTo({
      url: url
    })
  },
  //事件处理函数
  toArticleInfo: function(e){
    let article_id = e.currentTarget.dataset.articleId;
    // console.log(article_id);
    wx.redirectTo({
      url: '/pages/index/index?id=' + article_id,
    })
  },
  //首页公告
  toNotice: function(e){
    let notice_url = e.currentTarget.dataset.notice;
    console.log("跳转到公告所指位置");
    wx.redirectTo({
      url: notice_url,
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
