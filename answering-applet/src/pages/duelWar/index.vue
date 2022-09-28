<template>
  <div class="duelWar">
    <!-- 对战 -->
    <div class="duelWar-people">
      <div class="people-war">
        <div class="firstParty">
          <div class="person-image-box">
            <image class="person-image" src="/static/cbh.jpg"></image>
          </div>
          <div class="person-data">
            <div class="person-name">Tomtu</div>
            <div class="score">100</div>
          </div>
        </div>
        <div class="partyB">
          <div class="person-data">
            <div class="person-name">成长dink你</div>
            <div class="score">0</div>
          </div>
          <div class="person-image-box">
            <image class="person-image" src="/static/cbh.jpg"></image>
          </div>
        </div>
      </div>
      <div class="countDown">
        <uni-ec-canvas class="uni-ec-canvas" id="uni-ec-canvas" ref="uni-ec-canvas" canvas-id="uni-ec-canvas" :ec="ec"
          @inited="inited"></uni-ec-canvas>
      </div>
      <!-- 题干 -->
      <div class="stem">
        <div class="stem-content">
          金球奖、金靴奖是体育界什么项目的奖项？
        </div>
      </div>
      <!--答案 -->
      <div class="answer">
        <div class="answer-item">水球</div>
        <div class="answer-item">篮球</div>
        <div class="answer-item">足球</div>
        <div class="answer-item">排球</div>
      </div>
    </div>
  </div>
</template>

<script>
import uniEcCanvas from '../../component/uni-ec-canvas/uni-ec-canvas.vue';
export default {
  name: "duelWar",
  components: { uniEcCanvas },
  props: {},
  data() {
    return {
      ec: {
        option: {
          color: ['#fac858', ' #91cc75'],
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['50%', '85%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
              ]
            }
          ]
        }
      }
    }
  },
  computed: {},
  methods: {
    inited(chart) {
      console.log('图表初始化完毕')
      console.log('chart实例', chart)
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
.duelWar {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(78, 132, 230);
}

.duelWar-people {
  position: relative;
  width: 100%;
  height: 160rpx;
}

.people-war {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20rpx;
}

.people-war>div {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10rpx;
  flex: 1;
  border-radius: 70rpx;
  color: #fff;
  background: rgb(102, 202, 252);
}

.countDown {
  position: absolute;
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(78, 132, 230);
}

.people-war .partyB {
  background: rgba(251, 84, 127);
}


.person-image-box {
  height: 85rpx;
  width: 85rpx;
  border-radius: 50%;
  border: 8rpx solid #fff;
  overflow: hidden;
}

.person-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-data {
  width: 195rpx;
  margin: 20rpx;
}

.people-war .partyB .person-data {
  text-align: right;
}

.person-name {
  font-size: 20rpx;
  text-shadow: 1rpx 1rpx 2rpx #000;
}

.score {
  font-size: 47rpx;
  font-weight: bold;
  text-shadow: 1rpx 1rpx 2rpx #000;
}

/* 题目块 */
.stem {
  box-sizing: border-box;
  width: 100%;
  height: 495rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

}

.stem-content {
  width: 550rpx;
  font-size: 30rpx;
  font-weight: bold;
  letter-spacing: 5rpx;
}

.answer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
}

.answer-item {
  display: flex;
  height: 90rpx;
  width: 370rpx;
  justify-content: center;
  align-items: center;
  border-radius: 50rpx;
  margin-bottom: 30rpx;
  background: #fff;
  color: #4e84e6;
  font-size: 35rpx;
  font-weight: bold;
  letter-spacing: 8rpx;
}
</style>