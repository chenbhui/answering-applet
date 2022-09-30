<template>
  <div class="luckDraw">
    <div class="number-of-ownership">拥有次数：3次</div>
    <div class="prizeWall">
      <div class="prizeWall-item">
        <div class="prize kind1">
          <image class="prize-image" src="/static/book1.png"></image>
        </div>
        <div class="prize kind2">
          <image class="prize-image" src="/static/cup.png"></image>
        </div>
        <div class="prize kind3">
          <image class="prize-image" src="/static/pen.png"></image>
        </div>
        <div class="prize kind4">
          <image class="prize-image" src="/static/sing.png"></image>
        </div>
      </div>
      <div class="prizeWall-item">
        <div class="prizeWall-item-divide">
          <div class="prize kind5">
            <image class="prize-image" src="/static/book2.png"></image>
          </div>
          <div class="prize kind6">
            <image class="prize-image" src="/static/gittar.png"></image>
          </div>
          <div class="prize kind2">
            <image class="prize-image" src="/static/cup.png"></image>
          </div>
        </div>
        <div class="prizeWall-item-divide">
          <div class="prize prize-what">
            <image class="prize-what-image" src="/static/what.png"></image>
          </div>
        </div>
        <div class="prizeWall-item-divide">
          <div class="prize kind6">
            <image class="prize-image" src="/static/sing.png"></image>
          </div>
          <div class="prize kind7">
            <image class="prize-image" src="/static/rabbit.png"></image>
          </div>
          <div class="prize kind2">
            <image class="prize-image" src="/static/cup.png"></image>
          </div>
        </div>
      </div>
      <div class="prizeWall-item">
        <div class="prize kind3">
          <image class="prize-image" src="/static/pen.png"></image>
        </div>
        <div class="prize kind7">
          <image class="prize-image" src="/static/rabbit.png"></image>
        </div>
        <div class="prize kind1">
          <image class="prize-image" src="/static/book1.png"></image>
        </div>
        <div class="prize kind4">
          <image class="prize-image" src="/static/sing.png"></image>
        </div>
      </div>
    </div>
    <div class="startRaffle">开始抽奖</div>
  </div>
</template>

<script>
export default {
  name: "luckDraw",
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.number-of-ownership {
  text-align: right;
  padding: 20rpx 66rpx 0 0;
  text-shadow: 1rpx 1rpx 2rpx #000;
}

.luckDraw {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(78, 132, 230);
  color: #fff;
}

.prizeWall {
  width: 695rpx;
  height: 850rpx;
  margin: 65rpx auto;
  background: #4560ed;
  border-radius: 30rpx;
  border: 8rpx solid #4f77ef;
  box-sizing: border-box;
}

.prizeWall-item {
  display: flex;
  justify-content: space-around;
}

.prizeWall-item:nth-child(2) {
  height: 498rpx;
  margin: 10rpx 0;
}


.prize {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150rpx;
  height: 150rpx;
  border: 5rpx solid #1442ce;
  border-radius: 30rpx;
}

.prizeWall-item:nth-child(2) .prizeWall-item-divide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.prize-what {
  border: 9rpx solid #fcd40b;
  overflow: hidden;
}

.prize-what-image {
  width: 100%;
  height: 103%;
}

.prizeWall-item:nth-child(2) .prizeWall-item-divide:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 321rpx;
}

.kind1 {
  background-color: #46f2d8;
  background-image: linear-gradient(180deg, #46f2d8 0%, #1eddab 30%, #00c1bc 62%, #00c1bc 100%);
}

.kind2 {
  background-color: #ec51d6;
  background-image: linear-gradient(180deg, #ec51d6 0%, #eb56ac 23%, #e34ac2 56%, #db28e6 100%);
}

.kind3 {
  background-color: #0093E9;
  background-image: linear-gradient(180deg, #0093E9 0%, #56bcd2 37%, #0093e9 69%, #0093e9 100%);
}

.kind4 {
  background-color: #fa8f3f;
  background-image: linear-gradient(180deg, #fa8f3f 0%, #fe9832 23%, #fe8832 53%, #fe7732 100%);
}

.kind5 {
  background-color: #5f84fe;
  background-image: linear-gradient(180deg, #5f84fe 0%, #6089fc 30%, #0093e9 60%, #5975fd 100%);
}

.kind6 {
  background-color: #4adf23;
  background-image: linear-gradient(180deg, #4adf23 0%, #66e417 23%, #28c305 53%, #1ebe03 100%);
}

.kind7 {
  background-color: #fa7461;
  background-image: linear-gradient(180deg, #fa7461 0%, #fe6059 23%, #fd5d5a 53%, #fc4648 100%);
}

.startRaffle {
  width: 445rpx;
  height: 115rpx;
  margin: 0 auto;
  border-radius: 86rpx;
  background: #01e1bc;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  text-shadow: 1rpx 1rpx 2rpx #000;
  line-height: 110rpx;
}

.prize-image {
  width: 100rpx;
  height: 100rpx;
}
</style>