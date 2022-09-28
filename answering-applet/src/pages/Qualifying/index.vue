<template>
  <div class="Qualifying">
    <div class="box"></div>
    <div class="qualifying-card">
      <div class="qualifying-basedata">
        <div class="qualifying-title">头脑排位赛</div>
        <div class="property">
          <div class="property-icon">1230</div>
          <div class="property-box">
            <div class="property-image">
              <image class="property-image-content" src="../../static/medal1.png" alt=""></image>
            </div>
            <div class="property-image">
              <image class="property-image-content" src="../../static/medal2.png" alt=""></image>
            </div>
            <div class="property-image">
              <image class="property-image-content" src="../../static/medal3.png" alt=""></image>
            </div>
            <div class="property-image">
              <image class="property-image-content" src="../../static/medal4.png" alt=""></image>
            </div>
            <div class="property-image">
              <image class="property-image-content" src="../../static/medal5.png" alt=""></image>
            </div>
          </div>
        </div>
      </div>
      <div class="qualifying-race" @click="toOtherPage('duelWar')">
        <div class="beginner">
          <div class="beginner-image-box image-box">
            <image class="beginner-image image-content" src="../../static/trophy3.png"></image>
          </div>
          <div class="beginner-text-box">
            <div class="beginner-title">入门新手</div>
            <div class="beginner-icon">奖金：40</div>
            <div class="icon">20</div>
            <div class="star"></div>
          </div>
        </div>
        <div class="getting-dtarted">
          <div class="getting-dtarted-image-box image-box">
            <image class="getting-dtarted-image image-content" src="../../static/trophy2.png"></image>
          </div>
          <div class="getting-dtarted-text-box">
            <div class="getting-dtarted-title">入门新手</div>
            <div class="getting-dtarted-icon">奖金：50</div>
            <div class="icon icon2">100</div>
            <div class="star star2"></div>
          </div>
        </div>
        <div class="tough">
          <div class="tough-image-box image-box">
            <image class="tough-image image-content" src="../../static/trophy1.png"></image>
          </div>
          <div class="tough-text-box">
            <div class="tough-title">入门新手</div>
            <div class="tough-icon">奖金：90</div>
            <div class="icon icon3">180</div>
            <div class="star star3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Qualifying",
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
.Qualifying {
  position: relative;
  width: 100%;
  height: 100%;
}

.box {
  width: 100%;
  height: 220rpx;
  background: #4e84e6;
  border-radius: 0 0 50% 50%;
}

.qualifying-card {
  position: absolute;
  width: 93%;
  min-height: 100%;
  top: 0rpx;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 25rpx;
  overflow: hidden;
}

.qualifying-basedata {
  width: 100%;
  height: 280rpx;
  border-radius: 25rpx;
  background: url('https://i.postimg.cc/DyNvMYQd/image.png') no-repeat;
  background-size: 100% 130%;
  text-align: center;
  overflow: hidden;
}

.qualifying-title {
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  text-shadow: 2px 2px 1px #000;
  margin-top: 45rpx;
}

.property {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70rpx;
  align-items: center;
  margin-top: 25rpx;
}

.property-icon {
  color: #fff;
  font-weight: bold;
  padding-left: 43rpx;
  margin-left: 33rpx;
  background: url("https://i.postimg.cc/yN8syvPc/icon.png") no-repeat;
  background-size: auto 110%;
}

.property-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 380rpx;
  height: 100%;
  margin-right: 25rpx;
  border-radius: 35rpx;
  background: #9866fc;
  box-shadow: 0 0 6rpx #000;
}

.property-box>div {
  width: 63rpx;
  height: 63rpx;
  border-radius: 50%;
  overflow: hidden;
}

.property-box>div .property-image-content {
  width: 100%;
  height: 100%;
  margin-top: 5rpx;
}

.qualifying-race {
  position: relative;
  top: -30rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
}

.qualifying-race>div {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 182rpx;
  border-radius: 10rpx;
  margin-bottom: 10rpx;
  background-image: radial-gradient(circle farthest-corner at 92.3% 71.5%, rgba(134, 231, 214, 1) 0%, rgba(19, 195, 232) 90%);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
}

.qualifying-race>div .image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105rpx;
  width: 105rpx;
  border-radius: 50%;
  border: 7rpx solid #fff;
  background-image: linear-gradient(117deg, rgba(35, 225, 180) 39.2%, rgba(123, 216, 96, 1) 156.2%);
  overflow: hidden;
}

.qualifying-race>div .getting-dtarted-image-box {
  background-image: linear-gradient(117deg, rgba(123, 216, 96, 1) 39.2%, rgba(35, 225, 180) 156.2%);
}

.qualifying-race>div .tough-image-box {
  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(255, 209, 67, 1) 0%, rgba(255, 145, 83, 1) 90%);
}

.image-content {
  width: 80%;
  height: 80%;
}

.qualifying-race>div>div:nth-child(2) {
  width: 220rpx;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 7rpx;
  display: flex;
  flex-direction: column;
}

.qualifying-race>div>div:nth-child(2) div {
  width: 100%;
  flex: 1;
  border-bottom: 1px solid #fff;
  line-height: 77rpx;
}

.qualifying-race>div>div:nth-child(2) div:nth-child(2) {
  font-size: 14px;
  color: #f7fcb7;
  border: none;
}

.qualifying-race>div .icon {
  position: absolute;
  top: 20rpx;
  right: 0rpx;
  width: 80rpx !important;
  height: 40rpx;
  font-size: 13px;
  background: url(https://i.postimg.cc/yN8syvPc/icon.png) no-repeat;
  background-size: auto 100%;
  line-height: 43rpx !important;
  padding: 0 0 0 25rpx !important;
  border: none !important;
}

.qualifying-race>div .star {
  position: absolute;
  bottom: 0;
  right: 0;
  bottom: 20rpx;
  right: 20rpx;
  width: 45rpx !important;
  height: 45rpx;
  border-radius: 20rpx;
  background: url(https://i.postimg.cc/nVC5Y6tn/star.png);
  background-size: auto 100%;
}

.qualifying-race>div .star2 {
  width: 90rpx !important;
}

.qualifying-race>div .star3 {
  width: 135rpx !important;
}
</style>