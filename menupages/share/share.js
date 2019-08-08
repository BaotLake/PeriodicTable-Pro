// pages/menupage/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo:null,
    navigationBarData: {
      "full": false,  //wdith满宽，及box-shadow阴影
      "info": [   //控制按钮列表，比如 返回、主页
        {
          "tem": "navigationCustom",
          "data": {
            "icon": "../../data/image/icon/menu_d5_w.png",
            "bindtap": "openleftpage",
          }
        }, {
          "tem": "navigationTitle",
          "data": {
            "title": "元素周期表Pro"
          }
        }, {
          "tem": "navigationCustom",
          "data": {
            "icon": "../../data/image/icon/search_d5.png",
            "bindtap": "search",
            "style": "position:absolute;left:calc(100vw - 90pt - 46px);"
          }
        }
      ],
      //"bd": "background-color:#fff;",    //navigationBar的样式
      "color": "white",    //white black,图标及字体的颜色
      "maskStyle": ""
    },
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