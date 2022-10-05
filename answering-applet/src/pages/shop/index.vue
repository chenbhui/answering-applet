<template>
  <div class="shop">
    <div class="stock">
      <div class="coin">
        <div class="coin-image">
          <image src="/static/icon.png"></image>
        </div>
        <div class="coin-num">2622</div>
      </div>
      <div class="diamonds">
        <div class="diamonds-image">
          <image src="/static/diamonds.png"></image>
        </div>
        <div class="diamonds-num">2</div>
      </div>
    </div>
    <div class=" cargo-cabinet">
      <div class="cabinet-kind">
        <div class="cabinet-kind-content">钻石</div>
        <div class="cabinet-kind-content">王者币</div>
        <div class="cabinet-kind-content">道具</div>
        <div class="cabinet-kind-content">头像框</div>
      </div>
      <div class="cabinet-good">
        <div class="cabinet-good-content">
          <div class="good-kind">限时王者卡</div>
          <div class="good-card">
            <image src="/static/icon.png"></image>
          </div>
          <div class="good-num">×5</div>
          <div class="value">
            <div class="price">￥1</div>
          </div>
        </div>
        <div class="cabinet-good-content">
          <div class="good-kind">限时王者卡</div>
          <div class="good-card">
            <image src="/static/icon.png"></image>
          </div>
          <div class="good-num">×5</div>
          <div class="value">
            <div class="price">￥1</div>
          </div>
        </div>
        <div class="cabinet-good-content">
          <div class="good-kind">限时王者卡</div>
          <div class="good-card">
            <image src="/static/icon.png"></image>
          </div>
          <div class="good-num">×5</div>
          <div class="value">
            <div class="price">￥1</div>
          </div>
        </div>
        <div class="cabinet-good-content">
          <div class="good-kind">限时王者卡</div>
          <div class="good-card">
            <image src="/static/icon.png"></image>
          </div>
          <div class="good-num">×5</div>
          <div class="value">
            <div class="price">￥1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="invite">邀请朋友来玩</div>
  </div>
</template>

<script>
export default {
  name: "shop",
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
.shop {
  width: 100%;
  height: 100%;
  background: #4e84e6;
}

.stock {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 145rpx;
  border-radius: 0 0 100rpx 100rpx;
  background: rgba(82, 145, 238);
}

.stock>div {
  position: relative;
  width: 195rpx;
  height: 45rpx;
  background: rgb(28, 120, 299);
  border-radius: 20rpx;
  color: #fff;
  margin-top: 70rpx;
  box-sizing: border-box;
  padding-left: 65rpx;
  font-size: 30rpx;
  font-weight: bold;
  letter-spacing: 2rpx;
  line-height: 43rpx;
}

.diamonds-image,
.coin-image {
  position: absolute;
  top: -8rpx;
  left: -7rpx;
  width: 50rpx;
  height: 52rpx;
  box-sizing: border-box;
}

.diamonds-image image,
.coin-image image {
  width: 120%;
  height: 120%;
}


.cargo-cabinet {
  width: 100%;
}

.cabinet-kind {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100rpx;
}

.cabinet-kind-content {
  color: #fff;
  font-weight: bold;
  font-size: 33rpx;
  text-align: center;
  letter-spacing: 4rpx;
  height: 100%;
  line-height: 100rpx;
  border-bottom: 4rpx solid #fff;
}

.cabinet-good {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 30rpx;
  padding: 30rpx 20rpx;
  border-radius: 40rpx;
  background: #fff;
  box-sizing: border-box;
}

.cabinet-good-content {
  width: 200rpx;
  height: 270rpx;
  margin: 0 10rpx 20rpx 10rpx;
  background: rgba(194, 430, 255);
  border-radius: 10rpx;
  border: 2rpx solid #fff;
  box-sizing: border-box;
  overflow: hidden;
}

.good-kind {
  width: 80%;
  margin: 20rpx auto 0;
  font-size: 18rpx;
  color: #fff;
  border-radius: 20rpx;
  text-align: center;
  padding: 4rpx 0;
  letter-spacing: 4rpx;
  background: rgba(70, 110, 205);
}

.good-card {
  width: 100rpx;
  height: 100rpx;
  background: rgba(74, 80, 154);
  border-radius: 50%;
  margin: 10rpx auto 0;
  overflow: hidden;
  padding: 5rpx;
}

.good-card image {
  width: 100%;
  height: 100%;
}

.good-num {
  margin-right: 23rpx;
  text-align: right;
  font-size: 28rpx;
  font-weight: bold;
  color: rgba(74, 80, 154);
}

.value {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68rpx;
  background: rgba(139, 214, 253);
}

.price {
  width: 145rpx;
  height: 45rpx;
  background: rgba(245, 166, 35);
  border-radius: 20rpx;
  box-shadow: 2rpx 2rpx 3rpx #000;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 30rpx;
  line-height: 43rpx;
}

.invite {
  position: absolute;
  bottom: 50rpx;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 269rpx;
  height: 70rpx;
  text-align: center;
  border-radius: 35rpx;
  color: #fff;
  background: rgba(1, 225, 188);
  font-size: 32rpx;
  font-weight: bold;
  letter-spacing: 3rpx;
  line-height: 66rpx;
}
</style>