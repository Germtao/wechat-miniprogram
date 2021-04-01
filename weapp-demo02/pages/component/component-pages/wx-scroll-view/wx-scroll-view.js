// wx-scroll-view.js
var order = ['green', 'red', 'yellow', 'blue', 'green']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "green"
  },

  upper: function (e) {
    console.log("upper - " + e);
  },
  lower(e) {
    console.log("lower - " + e);
  },
  scroll(e) {
    console.log("scroll - " + e);
  },
  scrollToTop(e) {
    this.setData({
      scrollTop: 0
    })
  },
  tap(e) {
    for (var i = 0; i < order.length; i++) {
      if (order[i] == this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})