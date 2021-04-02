// pages/component/component-pages/form-widgets/wx-form/wx-form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerHidden: true,
    chosen: ''
  },
  pickerConfirm: function (e) {
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },
  formSubmit: function (e) {
    console.log('form 发生了 submit 事件，携带数据位：', e.detail.value);
  },
  formReset: function (e) {
    console.log('form 发生了 reset 事件，携带数据为：', e.detail.value);
    this.setData({
      chosen: ''
    })
  }
})