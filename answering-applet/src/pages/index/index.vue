<template>
	<view class="content">
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
			<view class="person-data"></view>
		</view>
		<!--下边功能模块 -->
		<view class="project-module">
			<div class="project-module-left">
				<!-- 随即玩家pk -->
				<div class="project-item qualifying">
					<text class="item-text">排位赛</text>
				</div>
				<div class="project-item ranking-list">
					<text class="item-text item-text-right">排行榜</text>
				</div>
				<div class="project-item shop">
					<text class="item-text">商店</text>
				</div>
				<div class="project-item knowledge-upgrading">
					<text class="item-text item-text-right">错题申诉</text>
				</div>
				<div class="project-item bank">
					<text class="item-text">银行</text>
				</div>
				<div class="project-item good">
					<text class="item-text">物品</text>
				</div>
			</div>
			<div class="project-module-right">
				<div class="project-item friend-fight">
					<text class="item-text">好友对战</text>
				</div>
				<div class="project-item treasure">
					<text class="item-text">每日宝箱</text>
				</div>
				<div class="project-item history-error">
					<text class="item-text item-text-right">历史错题</text>
				</div>
				<div class="project-item setting">
					<text class="item-text item-text-right">设置</text>
				</div>
				<div class="project-item more">
					<text class="item-text item-text-right">敬请期待</text>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style>
.content {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 30rpx;
	background: #cce8fe;
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

.userimage {
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
</style>
