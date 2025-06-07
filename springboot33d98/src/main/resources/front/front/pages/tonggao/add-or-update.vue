<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0","position":"relative","background":"#E5FFFC","height":"auto"}'>
		<form :style='{"width":"94%","padding":"24rpx","margin":"5% 3%","background":"#fff","display":"block","height":"90%"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">通告标题</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.tonggaobiaoti" v-model="ruleForm.tonggaobiaoti" placeholder="通告标题"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">通告类型</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="tonggaoleixingChange" :value="tonggaoleixingIndex"  :range="tonggaoleixingOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#000"}' class="uni-input">{{ruleForm.tonggaoleixing?ruleForm.tonggaoleixing:"请选择通告类型"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">通告状态</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="tonggaozhuangtaiChange" :value="tonggaozhuangtaiIndex"  :range="tonggaozhuangtaiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#000"}' class="uni-input">{{ruleForm.tonggaozhuangtai?ruleForm.tonggaozhuangtai:"请选择通告状态"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">招募人数</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.zhaomurenshu" v-model="ruleForm.zhaomurenshu" placeholder="招募人数"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">截止日期</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.jiezhiriqi" v-model="ruleForm.jiezhiriqi" placeholder="截止日期"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">拍摄时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.paisheshijian" @change="paisheshijianChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#000"}' class="uni-input">{{ruleForm.paisheshijian?ruleForm.paisheshijian:"请选择拍摄时间"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">拍摄地点</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.paishedidian" v-model="ruleForm.paishedidian" placeholder="拍摄地点"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">佣金</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yongjin" v-model="ruleForm.yongjin" placeholder="佣金"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="tonggaofengmianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">通告封面</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.tonggaofengmian" :src="baseUrl+ruleForm.tonggaofengmian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">发布时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.fabushijian" @change="fabushijianChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#000"}' class="uni-input">{{ruleForm.fabushijian?ruleForm.fabushijian:"请选择发布时间"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">商家账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangjiazhanghao" v-model="ruleForm.shangjiazhanghao" placeholder="商家账号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">商家昵称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangjianicheng" v-model="ruleForm.shangjianicheng" placeholder="商家昵称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">商家姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangjiaxingming" v-model="ruleForm.shangjiaxingming" placeholder="商家姓名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#000000","textAlign":"right"}' class="title">联系方式</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.lianxifangshi" v-model="ruleForm.lianxifangshi" placeholder="联系方式"></input>
			</view>
			
			<!-- 否 -->
 

			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 2rpx 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 60rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","fontWeight":"500"}' class="title">通告内容</view>
                <xia-editor ref="editor" :style='{"minHeight":"300rpx","border":"2rpx solid #cccccc","width":"100%","padding":"10rpx 20rpx","height":"auto"}' v-model="ruleForm.tonggaoneirong" placeholder="通告内容" @editorChange="tonggaoneirongChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0","color":"rgb(255, 255, 255)","borderRadius":"40rpx","background":"#00B578","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				tonggaobiaoti: '',
				tonggaoleixing: '',
				tonggaozhuangtai: '',
				zhaomurenshu: '',
				jiezhiriqi: '',
				paisheshijian: '',
				paishedidian: '',
				yongjin: '',
				tonggaoneirong: '',
				tonggaofengmian: '',
				fabushijian: '',
				shangjiazhanghao: '',
				shangjianicheng: '',
				shangjiaxingming: '',
				lianxifangshi: '',
				},
				tonggaoleixingOptions: [],
				tonggaoleixingIndex: 0,
				tonggaozhuangtaiOptions: [],
				tonggaozhuangtaiIndex: 0,
				// 登陆用户信息
				user: {},
                ro:{
                   tonggaobiaoti : false,
                   tonggaoleixing : false,
                   tonggaozhuangtai : false,
                   zhaomurenshu : false,
                   jiezhiriqi : false,
                   paisheshijian : false,
                   paishedidian : false,
                   yongjin : false,
                   tonggaoneirong : false,
                   tonggaofengmian : false,
                   fabushijian : false,
                   shangjiazhanghao : false,
                   shangjianicheng : false,
                   shangjiaxingming : false,
                   lianxifangshi : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.fabushijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.shangjiazhanghao = this.user.shangjiazhanghao
			this.ro.shangjiazhanghao = true;
			this.ruleForm.shangjianicheng = this.user.shangjianicheng
			this.ro.shangjianicheng = true;
			this.ruleForm.shangjiaxingming = this.user.shangjiaxingming
			this.ro.shangjiaxingming = true;
			this.ruleForm.lianxifangshi = this.user.lianxifangshi
			this.ro.lianxifangshi = true;


			// 自定义下拉框值
			this.tonggaoleixingOptions = "演员招募,模特拍摄".split(',')
			// 下拉框
			res = await this.$api.option(`tonggaozhuangtai`,`tonggaozhuangtai`,{});
			this.tonggaozhuangtaiOptions = res.data;
            this.tonggaozhuangtaiOptions.unshift("请选择通告状态");

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`tonggao`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='tonggaobiaoti'){
					this.ruleForm.tonggaobiaoti = obj[o];
					this.ro.tonggaobiaoti = true;
					continue;
					}
					if(o=='tonggaoleixing'){
					this.ruleForm.tonggaoleixing = obj[o];
					this.ro.tonggaoleixing = true;
					continue;
					}
					if(o=='tonggaozhuangtai'){
					this.ruleForm.tonggaozhuangtai = obj[o];
					this.ro.tonggaozhuangtai = true;
					continue;
					}
					if(o=='zhaomurenshu'){
					this.ruleForm.zhaomurenshu = obj[o];
					this.ro.zhaomurenshu = true;
					continue;
					}
					if(o=='jiezhiriqi'){
					this.ruleForm.jiezhiriqi = obj[o];
					this.ro.jiezhiriqi = true;
					continue;
					}
					if(o=='paisheshijian'){
					this.ruleForm.paisheshijian = obj[o];
					this.ro.paisheshijian = true;
					continue;
					}
					if(o=='paishedidian'){
					this.ruleForm.paishedidian = obj[o];
					this.ro.paishedidian = true;
					continue;
					}
					if(o=='yongjin'){
					this.ruleForm.yongjin = obj[o];
					this.ro.yongjin = true;
					continue;
					}
					if(o=='tonggaoneirong'){
					this.ruleForm.tonggaoneirong = obj[o];
					this.ro.tonggaoneirong = true;
					continue;
					}
					if(o=='tonggaofengmian'){
					this.ruleForm.tonggaofengmian = obj[o].split(",")[0];
					this.ro.tonggaofengmian = true;
					continue;
					}
					if(o=='fabushijian'){
					this.ruleForm.fabushijian = obj[o];
					this.ro.fabushijian = true;
					continue;
					}
					if(o=='shangjiazhanghao'){
					this.ruleForm.shangjiazhanghao = obj[o];
					this.ro.shangjiazhanghao = true;
					continue;
					}
					if(o=='shangjianicheng'){
					this.ruleForm.shangjianicheng = obj[o];
					this.ro.shangjianicheng = true;
					continue;
					}
					if(o=='shangjiaxingming'){
					this.ruleForm.shangjiaxingming = obj[o];
					this.ro.shangjiaxingming = true;
					continue;
					}
					if(o=='lianxifangshi'){
					this.ruleForm.lianxifangshi = obj[o];
					this.ro.lianxifangshi = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            tonggaoneirongChange(e) {
                this.ruleForm.tonggaoneirong = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			paisheshijianChange(e) {
				this.ruleForm.paisheshijian = e.target.value;
				this.$forceUpdate();
			},
			fabushijianChange(e) {
				this.ruleForm.fabushijian = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			tonggaoleixingChange(e) {
				this.tonggaoleixingIndex = e.target.value
				this.ruleForm.tonggaoleixing = this.tonggaoleixingOptions[this.tonggaoleixingIndex]
			},
			// 下拉变化
			tonggaozhuangtaiChange(e) {
				this.tonggaozhuangtaiIndex = e.target.value
				this.ruleForm.tonggaozhuangtai = this.tonggaozhuangtaiOptions[this.tonggaozhuangtaiIndex]
			},

			tonggaofengmianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tonggaofengmian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {































//跨表计算判断
				var obj;
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`tonggao`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`tonggao`, this.ruleForm);
						}else{
							await this.$api.add(`tonggao`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`tonggao`, this.ruleForm);
					}else{
						await this.$api.add(`tonggao`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
