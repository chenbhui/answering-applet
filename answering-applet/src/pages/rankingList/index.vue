<template>
  <div class="rankingList">
    <div class="rank-kind">
      <div class="rank-kind-title">
        <div class="friends-ranking">好友排行</div>
        <div class="dividing-line"></div>
        <div class="world-ranking">世界排行</div>
      </div>
      <div class="rank-people">
        <div class="people-card myself">
          <div class="card-left">
            <div class="rank-people-photo">
              <image class="rank-people-photo-content" src="/static/cbh.jpg"></image>
            </div>
          </div>
          <div class="card-right">
            <div class="rank-people-name">我</div>
            <div class="rank-people-line"></div>
            <div class="rank-people-grade">坚韧黑铁</div>
          </div>
          <div class="triangle-rank"></div>
          <div class="rank-content">1</div>
          <div class="star-score">
            <image src="/static/star.png"></image>
            <div class="star-num">0</div>
          </div>
        </div>
        <div class="people-card other">
          <div class="card-left">
            <div class="rank-people-photo">
              <image class="rank-people-photo-content" src="/static/cbh.jpg"></image>
            </div>
          </div>
          <div class="card-right">
            <div class="rank-people-name">Rivennnnnnnn</div>
            <div class="rank-people-line"></div>
            <div class="rank-people-grade">起步熟手</div>
          </div>
          <div class="triangle-rank"></div>
          <div class="rank-content">2</div>
          <div class="star-score">
            <image src="/static/star.png"></image>
            <div class="star-num">0</div>
          </div>
        </div>
        <div class="people-card other">
          <div class="card-left">
            <div class="rank-people-photo">
              <image class="rank-people-photo-content" src="/static/cbh.jpg"></image>
            </div>
          </div>
          <div class="card-right">
            <div class="rank-people-name">Rivennnnnnnn</div>
            <div class="rank-people-line"></div>
            <div class="rank-people-grade">起步熟手</div>
          </div>
          <div class="triangle-rank"></div>
          <div class="rank-content">3</div>
          <div class="star-score">
            <image src="/static/star.png"></image>
            <div class="star-num">0</div>
          </div>
        </div>
        <div class="people-card other"></div>
        <div class="people-card other"></div>
        <div class="people-card other"></div>
        <div class="people-card other"></div>
      </div>
    </div>
    <div class="rank-statistics">
      <div class="rank-statistics-tip">榜内为游戏好友，非微信好友。当前好友数：1/150</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rankingList",
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
.rankingList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.rank-kind {
  position: relative;
}

.rankingList>div {
  width: 100%;
  height: 200rpx;
  background: #4e84e6;
  border-radius: 20rpx 20rpx 0 0;
}

.rankingList>div:nth-child(1) {
  border-radius: 0 0 20rpx 20rpx;
}

.rank-kind-title {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10rpx auto;
  height: 58rpx;
  line-height: 58rpx;
  letter-spacing: 2px;
}

.friends-ranking,
.world-ranking {
  width: 245rpx;
  height: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}

.world-ranking {
  text-align: right;
}

.dividing-line {
  width: 1rpx;
  height: 100%;
  border: 1rpx solid rgba(255, 255, 255, .5);
}

.rank-statistics-tip {
  color: #fff;
  font-size: 10px;
  text-align: center;
  letter-spacing: 2rpx;
  margin-top: 40rpx;
  text-shadow: 1rpx 1rpx 2rpx #000;
}

.rank-people {
  position: absolute;
  top: 100rpx;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 640rpx;
  height: 900rpx;
  overflow: scroll;
  color: #fff;
}

.rank-people::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.people-card {
  position: relative;
  display: flex;
  width: 100%;
  height: 176rpx;
  border-radius: 15rpx;
  margin-bottom: 10rpx;
  overflow: hidden;
}

.myself {
  background-color: #0dd7d5;
  background-image: linear-gradient(90deg, #0dd7d5 25%, #2fbcc3 73%);
}

.other {
  background-color: #5ddbfc;
  background-image: linear-gradient(90deg, #5ddbfc 25%, #49adf9 73%);
}


.card-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
}

.card-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 5;
}

.rank-people-photo {
  height: 100rpx;
  width: 100rpx;
  border-radius: 50%;
  border: 10rpx solid #fff;
  overflow: hidden;
}

.rank-people-photo-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.rank-people-name {
  font-size: 12px;
  margin-left: 30rpx;
}

.rank-people-line {
  width: 100%;
  height: 5rpx;
  background: #fff;
  margin: 20rpx 0;
}

.rank-people-grade {
  font-size: 12px;
  border-radius: 25rpx;
  background: #388ef8;
  width: 150rpx;
  text-align: center;
  margin-left: 30rpx;
  letter-spacing: 1rpx;
}

.triangle-rank {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 100rpx solid skyblue;
  border-right: 100rpx solid transparent;
}

.myself .triangle-rank {
  border-top: 100rpx solid #07b3d7;
}

.other .triangle-rank {
  border-top: 100rpx solid #479efb;
}

.rank-content {
  position: absolute;
  top: 5rpx;
  left: 10rpx;
  z-index: 2;
}

.star-score {
  display: flex;
  position: absolute;
  bottom: 10rpx;
  right: 10rpx;
  width: 140rpx;
  height: 43rpx;
  padding-left: 10rpx;
  background: #4481de;
  border-radius: 20rpx;
  overflow: hidden;
  align-items: center;
  box-sizing: border-box;
}

.star-score image {
  width: 35rpx;
  height: 35rpx;
}

.star-score .star-num {
  font-size: 30rpx;
  margin-left: 10rpx;
}
</style>