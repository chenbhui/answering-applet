<template>
	<view class="content" :style="curtainShow?'overflow:hidden':'overflow:auto'">
		<!-- 个人中心 -->
		<view class="personal-center">
			<text class="username">Tomtu</text>
			<view class="userimage-box">
				<image class="userimage" src="/static/cbh.jpg"></image>
			</view>
			<div class="rate">
				<div class="rate-text">Lv.2</div>
				<div class="rate-pic-box">
					<div class="rate-pic"></div>
				</div>
			</div>
			<div class="gain">
				<div class="coin">
					<div>
						<image class="coinimage" src="/static/icon.png"></image>
					</div>
					<div class="coin-num">260</div>
				</div>
				<div class="diamonds">
					<div>
						<image class="diamondsimage" src="/static/diamonds.png"></image>
					</div>
					<div class="diamonds-num">0</div>
				</div>
			</div>
			<view class="person-data" @click="toOtherPage('userdata')"></view>
		</view>
		<!--下边功能模块 -->
		<view class="project-module">
			<div class="project-module-left">
				<!-- 随即玩家pk -->
				<div class="project-item qualifying" @click="toOtherPage('Qualifying')">
					<text class="item-text">排位赛</text>
				</div>
				<div class="project-item ranking-list" @click="toOtherPage('rankingList')">
					<text class="item-text item-text-right">排行榜</text>
				</div>
				<div class="project-item shop" @click="toOtherPage('shop')">
					<text class="item-text">商店</text>
				</div>
				<div class="project-item knowledge-upgrading">
					<text class="item-text item-text-right">错题申诉</text>
				</div>
				<div class="project-item bank">
					<text class="item-text">银行</text>
				</div>
				<div class="project-item good" @click="toOtherPage('goods')">
					<text class="item-text">物品</text>
				</div>
			</div>
			<div class="project-module-right">
				<div class="project-item friend-fight" @click="toOtherPage('friendFight')">
					<text class="item-text">好友对战</text>
				</div>
				<div class="project-item treasure" @click="moveCurtain('treasure')">
					<text class="item-text">每日宝箱</text>
				</div>
				<div class="project-item history-error">
					<text class="item-text item-text-right">历史错题</text>
				</div>
				<div class="project-item setting" @click="moveCurtain('setting')">
					<text class="item-text item-text-right">设置</text>
				</div>
				<div class="project-item more">
					<text class="item-text item-text-right">敬请期待</text>
				</div>
			</div>
		</view>
		<!--弹出 -->
		<div class="curtain" v-show="curtainShow">
			<div class="treasure-card" v-show="treasureShow">
				<div class="treasure-icon">
					<image class="treasureimage" src="/static/treasure2.png"></image>
				</div>
				<div class="treasure-title">初级任务宝箱</div>
				<div class="treasure-todo">
					<div class="treasure-task">
						<div class="treasure-taskFinish">
							<div class="taskAim">累计回答正确6道题</div>
							<div class="ifdo">未完成</div>
						</div>
						<div class="treasure-num">
							<div class="rate-pic-box">
								<div class="rate-pic"></div>
							</div>
							<div class="fraction">0/6</div>
						</div>
					</div>
					<div class="treasure-task">
						<div class="treasure-taskFinish">
							<div class="taskAim">累计回答正确6道题</div>
							<div class="ifdo">未完成</div>
						</div>
						<div class="treasure-num">
							<div class="rate-pic-box">
								<div class="rate-pic"></div>
							</div>
							<div class="fraction">0/6</div>
						</div>
					</div>
					<div class="treasure-task">
						<div class="treasure-taskFinish">
							<div class="taskAim">累计回答正确6道题</div>
							<div class="ifdo">未完成</div>
						</div>
						<div class="treasure-num">
							<div class="rate-pic-box">
								<div class="rate-pic"></div>
							</div>
							<div class="fraction">0/6</div>
						</div>
					</div>
				</div>
				<div class="treasure-gain">
					<div class="gain-text">完成所有任务解锁宝箱</div>
					<div class="treasure-gain-btn">确定</div>
				</div>
				<div class="treasure-card-move" @click="moveCurtain(e)">
					<image src="/static/error.png" class="treasure-card-move-image"></image>
				</div>
			</div>
			<div class="setting-card" v-show="settingShow">
				<div class="setting-icon">
					<image class="settingimage" src="/static/setting.png"></image>
				</div>
				<div class="setting-title">设置</div>
				<div class="setting-todo">
					<div class="setting-task">
						<div class="push">推送</div>
						<div class="push-setting">
							<div class="push-circle"></div>
						</div>
					</div>
					<div class="setting-task">
						<div class="push">音效</div>
						<div class="push-setting">
							<div class="push-circle"></div>
						</div>
					</div>
				</div>
				<div class="cooperation-card">
					<div class="cooperation-text">商务合作请联系</div>
					<div class="cooperation-way">chenbignhuibbh@126.com</div>
				</div>
				<div class="setting-card-move" @click="moveCurtain(e)">
					<image src="/static/error.png" class="setting-card-move-image"></image>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			curtainShow: false,
			treasureShow: false,
			settingShow: false,
		}
	},
	onLoad() {

	},
	methods: {
		// 页面跳转
		toOtherPage(url) {
			console.log(url);
			uni.navigateTo({
				url: `/pages/${url}/index`
			});
		},
		// 关闭幕布
		moveCurtain(e) {
			/* console.log(this.curtainShow);
			console.log(e); */
			this.curtainShow = !this.curtainShow;
			if (e == 'treasure') {
				this.treasureShow = true;
			} else if (e == 'setting') {
				this.settingShow = true;
			} else {
				this.treasureShow = false;
				this.settingShow = false;
			}
		}
	}
}
</script>

<style>
.content {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	padding: 30rpx;
	background: #cce8fe;
	height: 100%;
	position: relative;
}

.personal-center {
	position: relative;
	width: 100%;
	height: 300rpx;
	margin-bottom: 30rpx;
	background: #3fb9fa;
	background: url('https://i.postimg.cc/wxbYPJ9y/peopleBg.png') no-repeat;
	background-size: 100% 110%;
	border-radius: 15rpx;
	text-align: center;
	color: #fff;
}

.username {
	font-size: 12px;
	font-weight: bold;
	line-height: 25px;
}

.userimage-box {
	height: 105rpx;
	width: 105rpx;
	border-radius: 50%;
	border: 10rpx solid #fff;
	margin: 0 auto;
	overflow: hidden;
}

.userimage,
.treasureimage,
.settingimage,
.treasure-card-move-image,
.setting-card-move-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.rate {
	display: flex;
	justify-content: center;
	margin: 15rpx;
}

.rate-text {
	font-size: 10px;
	line-height: 7px;
}

.rate-pic-box {
	width: 180rpx;
	height: 18rpx;
	border: 2rpx solid #fff;
	border-radius: 20rpx;
	margin-left: 20rpx;
	background: #0c6ed1;
}

.rate-pic {
	width: 50rpx;
	height: 16rpx;
	background: #79f9fa;
	border-radius: 39rpx;
	border: 2rpx solid #0c6ed1;
	margin: 0 3rpx;
}

.person-data {
	position: absolute;
	height: 40rpx;
	width: 40rpx;
	background: url('https://i.postimg.cc/jdm3dZG2/image.png') no-repeat;
	background-size: 100% 100%;
	top: 20rpx;
	right: 25rpx;
}

.project-module {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.project-module>div {
	width: 336rpx;
}

.project-module>div .project-item {
	height: 185rpx;
	margin-bottom: 30rpx;
	background: #cc87fc;
	border-radius: 10rpx;
	overflow: hidden;
}

.project-module>div .project-item .item-text {
	display: block;
	margin: 15rpx 20rpx;
	font-size: 16px;
	color: #fff;
	text-shadow: 1px 1px 1px #ccc;
	letter-spacing: 5rpx;
}

.project-module>div .project-item .item-text-right {
	text-align: right;
}


.project-module>div .qualifying {
	height: 355rpx;
	background: url('https://i.postimg.cc/4yH2kd68/qualifying-icon.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .treasure {
	height: 260rpx;
	background: url('https://i.postimg.cc/Kv5rKxsR/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .ranking-list {
	height: 185rpx;
	background: url('https://i.postimg.cc/JzN03KjC/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .shop {
	height: 225rpx;
	background: url('https://i.postimg.cc/63vbm7cR/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .bank {
	background: url('https://i.postimg.cc/63vbm7cR/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .good {
	background: url('https://i.postimg.cc/PNnqFFjF/good.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .knowledge-upgrading {
	background: url('https://i.postimg.cc/xTBG900W/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .bank {
	background: url('https://i.postimg.cc/nrC7tWNF/bank.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .friend-fight {
	height: 260rpx;
	background: url('https://i.postimg.cc/rmyzc5XQ/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .history-error {
	background: url('https://i.postimg.cc/QtM5m2t8/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .setting {
	height: 165rpx;
	background: url('https://i.postimg.cc/j25mNykg/image.png') no-repeat;
	background-size: 100% 100%;
}

.project-module>div .more {
	background: url('https://i.postimg.cc/QtM5m2t8/image.png') no-repeat;
	background-size: 100% 100%;
}

.gain {
	display: flex;
	justify-content: center;
}

.gain>div {
	display: flex;
	width: 200rpx;
}

.gain>div.coin {
	margin-right: 180rpx;
}

.gain>div image {
	width: 50rpx;
	height: 50rpx;
	margin-right: 20rpx;
}

.gain>div div:nth-child(2) {
	line-height: 26px;
	font-style: 15px;
	font-weight: bold;
}

/*幕布 */
.curtain {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 200%;
	background: rgba(0, 0, 0, .5);
	z-index: 2;
}

.hide {
	display: none;
}

.show {
	display: block;
}

.treasure-card,
.setting-card {
	position: relative;
	width: 680rpx;
	height: 900rpx;
	margin: 200rpx auto;
	padding: 100rpx 0rpx;
	background: #fff;
	border-radius: 25rpx;
	box-sizing: border-box;
}

.setting-card {
	margin-top: 430px;
}

.treasure-icon,
.setting-icon {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 150rpx;
	height: 150rpx;
	margin: 0 auto;
	border-radius: 50%;
	border: 10rpx solid #fff;
	overflow: hidden;
	background-image: linear-gradient(117deg, rgba(123, 216, 96, 1) 39.2%, rgba(35, 225, 180) 156.2%);
}

.treasure-title,
.setting-title {
	display: flex;
	width: 100%;
	height: 100rpx;
	justify-content: center;
	align-items: center;
	font-size: 50rpx;
	letter-spacing: 12rpx;
	font-weight: bold;
	text-shadow: 1rpx 1rpx 2rpx #ccc;
	background: pink;
	color: #fff;
	background-image: linear-gradient(117deg, rgba(123, 216, 96, 1) 39.2%, rgba(35, 225, 180) 156.2%);
}

.setting-title {
	background: #466ecd;
}

.treasure-todo,
.setting-todo {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 450rpx;
	padding-top: 80rpx;
	box-sizing: border-box;
}

.treasure-task {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	width: 85%;
	font-size: 35rpx;
	margin-bottom: 25rpx;
}

.treasure-task>div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.taskAim {
	margin-left: 16rpx;
	color: #2688d5;
	font-weight: bold;
	letter-spacing: 2rpx;
}

.ifdo {
	font-size: 27rpx;
	font-weight: bold;
	color: #e9a119;
	letter-spacing: 2rpx;
}

.treasure-num .rate-pic-box {
	width: 440rpx;
	height: 5rpx;
	background: #ccc;
}

.treasure-num .rate-pic {
	width: 100rpx;
	height: 1rpx;
}

.fraction {
	font-size: 25rpx;
	font-weight: bold;
	letter-spacing: 2rpx;
	color: #2688d5;
}

.treasure-gain {
	width: 100%;
	margin-top: 40rpx;
	text-align: center;
	color: #1edfeb;
}

.gain-text {
	font-size: 26rpx;
	font-weight: bold;
}

.treasure-gain-btn {
	margin: 15rpx auto 0;
	width: 310rpx;
	border-radius: 45px;
	height: 100rpx;
	font-size: 45rpx;
	font-weight: bold;
	letter-spacing: 10rpx;
	line-height: 100rpx;
	background: #01e1bc;
	color: #fff;
}

.treasure-card-move,
.setting-card-move {
	position: absolute;
	width: 50rpx;
	height: 50rpx;
	top: 20rpx;
	right: 20rpx;
}

.setting-task {
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
}

.push {
	color: #414d9f;
	font-size: 49rpx;
	font-weight: bold;
	letter-spacing: 2rpx;
}

.push-setting {
	width: 180rpx;
	height: 80rpx;
	margin-left: 37rpx;
	border-radius: 50rpx;
	box-sizing: border-box;
	padding: 2rpx 2rpx;
	background: #5ebbfe;
}

.push-circle {
	width: 76rpx;
	height: 76rpx;
	border-radius: 50%;
	background: #fff;
	box-shadow: 1rpx 1rpx 2rpx #000;
	;
}

.cooperation-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	font-weight: bold;
}

.cooperation-text {
	color: #414d9f;
	font-size: 36rpx;
}

.cooperation-way {
	margin-top: 20rpx;
	color: #f06c4b;
	font-size: 35rpx;
}
</style>
