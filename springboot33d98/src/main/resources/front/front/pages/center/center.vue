<template>
	<view class="content">
		<view :style='{"width":"100%","padding":"20rpx 40rpx 100rpx","position":"relative","background":"#fff","height":"100%"}'>
			<view :style='{"padding":"0 24rpx","margin":"0 0 20rpx 0","borderRadius":"20rpx","background":"#00B578","display":"flex","width":"100%","height":"280rpx"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"width":"calc(100% - 112rpx)","position":"relative","alignItems":"center","display":"flex","height":"100%"}' v-if="tableName=='xiaoyanyuan'" class="userinfo">
					<image :style='{"padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","top":"10rpx","left":"50rpx","width":"88rpx","position":"absolute","height":"88rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"100%","position":"absolute","top":"110rpx","left":"40rpx","flex":"1","height":"calc(100% - 110rpx)"}' class="info">
						<view :style='{"color":"#fff","top":"-70rpx","left":"140rpx","width":"80%","lineHeight":"36rpx","fontSize":"24rpx","position":"absolute","height":"40rpx"}'>{{user.yanyuanzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"width":"calc(100% - 112rpx)","position":"relative","alignItems":"center","display":"flex","height":"100%"}' v-if="tableName=='shangjia'" class="userinfo">
					<view :style='{"width":"100%","position":"absolute","top":"110rpx","left":"40rpx","flex":"1","height":"calc(100% - 110rpx)"}' class="info">
						<view :style='{"color":"#fff","top":"-70rpx","left":"140rpx","width":"80%","lineHeight":"36rpx","fontSize":"24rpx","position":"absolute","height":"40rpx"}'>{{user.shangjiazhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"width":"112rpx","alignItems":"center","justifyContent":"center","display":"flex","height":"100%"}' class="setting">
					<view :style='{"border":"0","width":"48rpx","lineHeight":"48rpx","fontSize":"48rpx","color":"#fff","borderRadius":"0"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"0","borderColor":"#ccc","flexWrap":"wrap","background":"#fff","borderWidth":"0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"40rpx 0","borderColor":"#ccc","margin":"6rpx 1%","alignItems":"center","borderWidth":"2rpx","flexDirection":"column","display":"flex","width":"48%","borderStyle":"solid","justifyContent":"center","height":"280rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"48rpx","lineHeight":"48rpx","fontSize":"48rpx","color":"rgba(0, 186, 189, 1)"}' :class="child.appFrontIcon"></view>
								<view :style='{"padding":"0 20rpx","color":"#333","textAlign":"center","flex":"1","width":"100%","lineHeight":"88rpx","fontSize":"28rpx"}' class="text">{{child.menu}}</view>
								<view v-if="false" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#999"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>


			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
