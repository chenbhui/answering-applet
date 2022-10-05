<template>
  <div class="friendFight">
    <div class="friend-fight-people">
      <div class="fight-people myself">
        <div class="fight-photo">
          <image src="/static/cbh.jpg"></image>
        </div>
      </div>
      <div class="fight-people myfriend">
        <div class="fight-photo">
          <image src="/static/cbh.jpg"></image>
        </div>
      </div>
    </div>
    <div class="wait-box">
      <div class="myself-name">Tomtu</div>
      <div class="wait-time">
        <div class="wait-text">等待对手加入</div>
        <div class="count-down">09:50</div>
      </div>
      <div class="friend-name">Tomtu</div>
    </div>
    <div class="choice">
      <div class="give-up">
        <image src="/static/giveup.png"></image>
      </div>
      <div class="invite">
        <image src="/static/invite.png"></image>
      </div>
    </div>
    <div class="fight-setting">
      <div class="difficulty">难度普通</div>
      <div class="begin"></div>
      <div class="tip">每天一次好友对战，奖励一个小宝箱</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "friendFight",
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
.friendFight {
  width: 100%;
  height: 100%;
  background: #4e84e6;
}

.friend-fight-people {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150rpx;
  background: url('https://i.postimg.cc/0jzCFrfg/blue.png');
  background-size: 100% 100%;
}

.fight-people {
  display: flex;
  align-items: center;
  width: 185rpx;
  height: 100%;
  background: #66cafc;
  border-radius: 0 75rpx 75rpx 0;
  justify-content: flex-end;
  padding: 18rpx;
  box-sizing: border-box;
}

.myfriend {
  justify-content: flex-start;
  background: #fb547f;
  border-radius: 75rpx 0 0 75rpx;
}

.fight-photo {
  height: 105rpx;
  width: 105rpx;
  border-radius: 50%;
  border: 8rpx solid #fff;
  overflow: hidden;
}

.fight-photo image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wait-box {
  display: flex;
  color: #fff;
  width: 100%;
  height: 140rpx;
  font-size: 12px;
  box-sizing: border-box;
  padding: 10rpx;
}

.myself-name {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}

.friend-name {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}

.wait-time {
  flex: 2;
  text-align: center;
  margin: 0 45rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}

.count-down {
  margin: 20rpx 0 0 0
}

.choice {
  width: 100%;
  height: 270rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choice>div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150rpx;
  height: 150rpx;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 2rpx #000;
}

.choice>div image {
  width: 80%;
  height: 80%;
}

.give-up {
  margin-right: 45rpx;
}

.fight-setting {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 280rpx;
}

.difficulty {
  width: 200rpx;
  height: 50rpx;
  background: rgb(88, 92, 243);
  border-radius: 30rpx;
  border: 2rpx solid #fff;
  text-align: center;
  color: #fff;
  font-size: 32rpx;
  line-height: 50rpx;
  letter-spacing: 3rpx;
}

.begin {
  width: 200rpx;
  height: 60rpx;
  background: rgba(193, 214, 245);
  border-radius: 20rpx;
  margin-top: 22rpx;
}

.tip {
  width: 80%;
  position: absolute;
  bottom: 50rpx;
  font-size: 21rpx;
  text-align: center;
  padding: 10rpx;
  border-top: 1rpx solid #fff;
  border-bottom: 1rpx solid #fff;
  color: #fff;
}
</style>