var pageData = {},
    type = [
      'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ]

pageData.widgetsToggle = function(e) {
  var id = e.currentTarget.id, data = {};
  for (var index = 0; index < type.length; ++index) {
      data[type[index] + 'Show'] = false;
  }
  data[id + 'Show'] = !this.data[id + 'Show'];
  this.setData(data);
}

Page(pageData)
