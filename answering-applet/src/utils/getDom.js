function query(id, fn) {
    let query = uni.createSelectorQuery();
    query.select(id).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(fn);
}
export default {
    query
}
/* const query = uni.createSelectorQuery().in(this);
  query.select('.user-analysiss').boundingClientRect(data => {
    console.log("得到布局位置信息" + JSON.stringify(data));
    console.log("节点离页面顶部的距离为" + data.top);
  }).exec(function (res) {
    console.log(res);
  }); */
