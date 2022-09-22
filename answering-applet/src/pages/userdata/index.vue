<template>
  <div class="userdata">
    <div class="box"></div>
    <div class="person-card">
      <div class="person-basedata">
        <div class="person-image-box">
          <image class="person-image" src="/static/cbh.jpg"></image>
        </div>
        <div class="username">Tomtu</div>
        <div class="rate">
          <div class="rate-text">等级3</div>
          <div class="rate-pic-box">
            <div class="rate-pic"></div>
          </div>
        </div>
      </div>
      <!-- 用户分析 -->
      <div class="user-analysiss">
        <ec-canvas canvas-id="echart-pie" ec="{{ec}}"></ec-canvas>
      </div>
      <!-- 用户数据 -->
      <div class="user-table-data">
        <div class="user-table-row">
          <div class="user-table-td"><span class="user-table-data-title">用户编号:</span>245515831</div>
          <div class="user-table-td"><span class="user-table-data-title">段位:</span>起步熟手</div>
        </div>
        <div class="user-table-row">
          <div class="user-table-td"><span class="user-table-data-title">胜率:</span>57%</div>
          <div class="user-table-td"><span class="user-table-data-title">总场次:</span>7</div>
        </div>
        <div class="user-table-row">
          <div class="user-table-td"><span class="user-table-data-title">经验:</span>2/7</div>
          <div class="user-table-td"><span class="user-table-data-title">胜场:</span>4</div>
        </div>
      </div>
      <!-- 分享 -->
      <div class="share">
        <div class="share-content-top"></div>
        <div class="share-content-bottom">
          <div class="share-text">分享到其他群 继续看排行</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "userdata",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    const query = uni.createSelectorQuery().in(this);
    query.select('.user-analysiss').boundingClientRect(data => {
      console.log("得到布局位置信息" + JSON.stringify(data));
      console.log("节点离页面顶部的距离为" + data.top);
    }).exec(function (res) {
      console.log(res[0]);
    });

  },
  computed: {},
  methods: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() { },
  // 页面周期函数--监听页面初次渲染完成
  onReady() { },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() { },
  // 页面周期函数--监听页面隐藏
  onHide() { },
  // 页面周期函数--监听页面卸载
  onUnload() { },
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
} 
</script>

<style scoped>
.userdata {
  position: relative;
  width: 100%;
  height: 100%;
}

.box {
  width: 100%;
  height: 60rpx;
  background: #4e84e6;
}

.person-card {
  position: absolute;
  width: 98%;
  min-height: 100%;
  top: 0rpx;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 25rpx;
  background: url('https://i.postimg.cc/BbWgWcNy/personBg.png') no-repeat;
  background-size: 100% auto;
  text-align: center;
}

.person-image-box {
  height: 105rpx;
  width: 105rpx;
  border-radius: 50%;
  border: 10rpx solid #fff;
  margin: 40rpx auto 0;
  overflow: hidden;
}

.person-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.username {
  font-size: 12px;
  font-weight: bold;
  line-height: 25px;
  color: #fff;
}

.rate {
  display: flex;
  margin: 15rpx 65rpx 25rpx;
}

.rate-text {
  font-size: 13px;
  line-height: 7px;
  font-weight: bold;
  color: #79fbfe;
  letter-spacing: 4rpx;
  text-shadow: 1px 1px 0px #4e84e6;
}

.rate-pic-box {
  width: 255rpx;
  height: 22rpx;
  border: 2rpx solid #fff;
  border-radius: 20rpx;
  margin-left: 20rpx;
  background: #0c6ed1;
}

.rate-pic {
  width: 50rpx;
  height: 18rpx;
  background: #79f9fa;
  border-radius: 39rpx;
  border: 2rpx solid #0c6ed1;
  margin: 1rpx;
}

/* 用户分析图表 */
.user-analysiss {
  width: 100%;
  height: 520rpx;
  /* background: url('https://i.postimg.cc/HnQqctxD/user-analysis.png') no-repeat;
  background-size: 100% 100%; */
  background: #456;
}

.user-table-row {
  display: flex;
  justify-content: space-between;
  width: 635rpx;
  height: 60rpx;
  margin: 20rpx auto;
  border-radius: 35rpx;
  overflow: hidden;
}

.user-table-td {
  display: flex;
  width: 316rpx;
  background: #4e84e6;
  color: #fff;
  font-size: 10px;
  line-height: 57rpx;
  font-weight: bold;
  text-align: left;
}

.user-table-td span {
  margin: 0 15rpx 0 30rpx;
}

.user-table-td:nth-child(2) span {
  margin-left: 30rpx;
}

.user-table-data-title {
  color: #79f9fa;
}


.share-content-top {
  width: 100%;
  height: 165rpx;
  background: url('data: image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTQ0MCAzMjAiPjxwYXRoIGZpbGw9IiM0ZTg0ZTYiIGZpbGwtb3BhY2l0eT0iMSIgZD0iTTAsMTkyTDQ4LDE4MS4zQzk2LDE3MSwxOTIsMTQ5LDI4OCwxNTQuN0MzODQsMTYwLDQ4MCwxOTIsNTc2LDE5MkM2NzIsMTkyLDc2OCwxNjAsODY0LDEzOC43Qzk2MCwxMTcsMTA1NiwxMDcsMTE1MiwxMjIuN0MxMjQ4LDEzOSwxMzQ0LDE4MSwxMzkyLDIwMi43TDE0NDAsMjI0TDE0NDAsMzIwTDEzOTIsMzIwQzEzNDQsMzIwLDEyNDgsMzIwLDExNTIsMzIwQzEwNTYsMzIwLDk2MCwzMjAsODY0LDMyMEM3NjgsMzIwLDY3MiwzMjAsNTc2LDMyMEM0ODAsMzIwLDM4NCwzMjAsMjg4LDMyMEMxOTIsMzIwLDk2LDMyMCw0OCwzMjBMMCwzMjBaIj48L3BhdGg+PC9zdmc+');
}

.share-content-bottom {
  width: 100%;
  height: 85rpx;
  background: #4e84e6;
}

.share-content-bottom .share-text {
  font-size: 11px;
  letter-spacing: 3rpx;
  color: #fff;
  text-shadow: 1px 1px 1px #ccc;
}
</style>