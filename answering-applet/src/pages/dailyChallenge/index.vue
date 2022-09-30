<template>
  <div class="dailyChallenge">
    <div class="dailyRemaining">
      <div class="coin">
        <div>
          <image class="coinimage" src="/static/icon.png"></image>
        </div>
        <div class="coin-num">260</div>
      </div>
      <div class="daliyOpportunity">剩余挑战数：5次</div>
    </div>
    <!-- 挑战 -->
    <div class="dailyTry">
      <div class="dailyTryItem">
        <image class="item-image" src="/static/daily1.png"></image>
      </div>
      <div class="dailyTryItem">
        <image class="item-image" src="/static/daily2.png"></image>
      </div>
      <div class="dailyTryItem">
        <image class="item-image" src="/static/daily3.png"></image>
      </div>
    </div>
    <!-- 幸运转盘 -->
    <div class="turntable" @click="toOtherPage('luckDraw')">
      <image class="turntableImage" src="/static/turntable.png"></image>
    </div>
  </div>
</template>

<script>
export default {
  name: "dailyChallenge",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    // 页面跳转
    toOtherPage(url) {
      console.log(url);
      uni.navigateTo({
        url: `/pages/${url}/index`
      });
    },
  },
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
.dailyChallenge {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(78, 132, 230);
}

.dailyRemaining {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100rpx;
  padding: 0 20rpx;
  color: #fff;
  box-sizing: border-box;
}

.coin,
.daliyOpportunity {
  margin-right: 180rpx;
  display: flex;
  font-size: 36rpx;
  font-weight: bold;
  letter-spacing: 4rpx;
  text-shadow: 1rpx 1rpx 2rpx #000;
}

.daliyOpportunity {
  margin: 0;
  font-size: 30rpx;
}

.coinimage {
  width: 50rpx;
  height: 50rpx;
  margin-right: 20rpx;
}

.dailyTry {
  box-sizing: border-box;
  width: 600rpx;
  margin: 50rpx auto 0;
}

.dailyTry>div {
  width: 100%;
  height: 202rpx;
  margin-bottom: 45rpx;
  border-radius: 20rpx;
  overflow: hidden;
  box-shadow: 2rpx 2rpx 6rpx rgba(0, 0, 0, .7)
}

.item-image {
  width: 100%;
  height: 100%;
}

.turntable {
  position: absolute;
  right: 50rpx;
  bottom: 50rpx;
  width: 130rpx;
  height: 130rpx;
}

.turntableImage {
  width: 100%;
  height: 100%;
}
</style>