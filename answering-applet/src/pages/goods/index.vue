<template>
  <div class="goods">
    <div class="goods-box">
      <div class="good-flex-box">
        <div class="good-content">
          <div class="good-kind">限时王者卡</div>
          <div class="good-card">
            <image src="/static/icon.png"></image>
          </div>
          <div class="good-num">×5</div>
        </div>
        <div class="good-content">
          <div class="good-kind">限时王者卡</div>
          <div class="good-card">
            <image src="/static/icon.png"></image>
          </div>
          <div class="good-num">×5</div>
        </div>
      </div>
    </div>
    <div class="gain">点击即可使用商品</div>
  </div>
</template>

<script>
export default {
  name: "goods",
  components: {},
  props: {},
  data() {
    return {}
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
.goods {
  width: 100%;
  height: 100%;
  background: #4e84e6;
  padding-top: 30rpx;
  box-sizing: border-box;
}

.goods-box {
  width: 680rpx;
  height: 915rpx;
  margin: 0 auto;
  background: #fff;
  border-radius: 25rpx;
  padding: 20rpx 0 0 0;
  box-sizing: border-box;
}

.good-flex-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.good-content {
  width: 185rpx;
  height: 205rpx;
  margin: 0 23rpx 20rpx 23rpx;
}

.good-kind {
  width: 100%;
  font-size: 18rpx;
  color: #fff;
  border-radius: 20rpx;
  text-align: center;
  padding: 4rpx 0;
  letter-spacing: 4rpx;
  background: rgba(70, 110, 205);
}

.good-card {
  width: 120rpx;
  height: 120rpx;
  background: rgba(74, 80, 154);
  border-radius: 50%;
  margin: 10rpx auto;
  overflow: hidden;
}

.good-card image {
  width: 100%;
  height: 100%;
}

.good-num {
  text-align: center;
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(74, 80, 154);
}

.gain {
  text-align: center;
  color: rgba(255, 255, 255, .6);
  font-size: 35rpx;
  font-weight: bold;
  margin-top: 20rpx;
}
</style>