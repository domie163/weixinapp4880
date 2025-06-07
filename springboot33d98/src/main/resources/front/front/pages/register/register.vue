<template>
<view class="content">
	<view class="box" :style='{"width":"100%","padding":"24rpx","backgroundSize":"100%","backgroundImage":"url(http://codegen.caihongy.cn/20221011/7a887ac3e68342dbb8849e2477dec4bf.png)","height":"100%"}'>
		<view :style='{"padding":"24rpx","boxShadow":"0px 8rpx 20rpx 0px rgba(0,0,0,0.302)","margin":"5% 3% ","background":"#fff","display":"block","width":"94%","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 24rpx auto","borderRadius":"80rpx","display":"block","height":"160rpx"}' src="http://codegen.caihongy.cn/20221010/1d43618a378b4fe8af08897618701465.webp" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.yanyuanzhanghao"  type="text"  class="uni-input" name="" placeholder="演员账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.nicheng"  type="text"  class="uni-input" name="" placeholder="昵称" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
			<picker :style='{"width":"100%","margin":"0 0 24rpx 0","borderColor":"#000","borderStyle":"solid","borderWidth":"0 0 2rpx","height":"auto"}' v-if="tableName=='xiaoyanyuan'"  @change="xiaoyanyuanxingbieChange" :value="xiaoyanyuanxingbieIndex" :range="xiaoyanyuanxingbieOptions">
				<view :style='{"width":"100%","lineHeight":"88rpx","fontSize":"28rpx","color":"#000000"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shengao"  type="text"  class="uni-input" name="" placeholder="身高（cm)" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.tizhong"  type="text"  class="uni-input" name="" placeholder="体重（kg)" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.jianjie"  type="text"  class="uni-input" name="" placeholder="简介" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.lianxidianhua"  type="text"  class="uni-input" name="" placeholder="联系电话" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='xiaoyanyuan'" @tap="xiaoyanyuantouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shangjiazhanghao"  type="text"  class="uni-input" name="" placeholder="商家账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shangjianicheng"  type="text"  class="uni-input" name="" placeholder="商家昵称" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shangjiaxingming"  type="text"  class="uni-input" name="" placeholder="商家姓名" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.shangjiajianjie"  type="text"  class="uni-input" name="" placeholder="商家简介" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" class="uni-form-item uni-column">
				<input :style='{"border":"0px solid rgb(255, 170, 51)","padding":"0px 24rpx","margin":"0px","color":"#000","borderRadius":"8rpx","background":"#CCFFFF","width":"100%","fontSize":"28rpx","height":"88rpx"}'  v-model="ruleForm.lianxifangshi"  type="text"  class="uni-input" name="" placeholder="联系方式" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 24rpx 0","height":"auto"}' v-if="tableName=='shangjia'" @tap="shangjiashangjiazhaopianTap" class="">
                <view>请上传商家照片</view>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-if="ruleForm.shangjiazhaopian" class="avator" :src="baseUrl+ruleForm.shangjiazhaopian" mode=""></image>
                <image :style='{"width":"160rpx","borderRadius":"16rpx","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<button :style='{"border":"0","padding":"0px","margin":"0 0 24rpx 0","color":"rgb(255, 255, 255)","borderRadius":"8rpx","background":"#00B578","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
                xiaoyanyuanxingbieOptions: [],
                xiaoyanyuanxingbieIndex: 0,
				ruleForm: {
                yanyuanzhanghao: '',
                nicheng: '',
                mima: '',
                xingming: '',
                xingbie: '',
                shengao: '',
                tizhong: '',
                jianjie: '',
                lianxidianhua: '',
                touxiang: '',
                shangjiazhanghao: '',
                shangjianicheng: '',
                mima: '',
                shangjiaxingming: '',
                shangjiajianjie: '',
                lianxifangshi: '',
                shangjiazhaopian: '',
				},
				tableName:""
			}
		},
        components: {
            multipleSelect
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='xiaoyanyuan'){
                this.xiaoyanyuanxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.xiaoyanyuanxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            xiaoyanyuanxingbieChange(e) {
                    this.xiaoyanyuanxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.xiaoyanyuanxingbieOptions[this.xiaoyanyuanxingbieIndex]
            },
            xiaoyanyuantouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            shangjiashangjiazhaopianTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.shangjiazhaopian = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.yanyuanzhanghao) && `xiaoyanyuan` == this.tableName){
					this.$utils.msg(`演员账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `xiaoyanyuan` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`xiaoyanyuan` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.xingming) && `xiaoyanyuan` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if(`xiaoyanyuan` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				if((!this.ruleForm.shangjiazhanghao) && `shangjia` == this.tableName){
					this.$utils.msg(`商家账号不能为空`);
					return
				}
				if((!this.ruleForm.shangjianicheng) && `shangjia` == this.tableName){
					this.$utils.msg(`商家昵称不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `shangjia` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`shangjia` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.shangjiaxingming) && `shangjia` == this.tableName){
					this.$utils.msg(`商家姓名不能为空`);
					return
				}
				if(`shangjia` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
					this.$utils.msg(`联系方式应输入手机格式`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
