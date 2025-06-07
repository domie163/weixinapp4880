<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"minHeight":"calc(100vh - 260px)","padding":"30px  30px 20px 40px","boxShadow":"6px 6px 0px rgba(0,0,0,.1)","margin":"0px auto 0","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221202/3a1390c8b1c6477eab0f816fcf703030.png) no-repeat left top,url(http://codegen.caihongy.cn/20221202/5cd54f92f6ee487ca789e17939569264.png) no-repeat right bottom,#fff","display":"flex","justifyContent":"space-between","height":"100%"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="通告标题" prop="tonggaobiaoti">
					<el-input v-model="ruleForm.tonggaobiaoti" placeholder="通告标题" clearable  :readonly="ro.tonggaobiaoti"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="通告标题" prop="tonggaobiaoti">
					<el-input v-model="ruleForm.tonggaobiaoti" placeholder="通告标题" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="通告类型" prop="tonggaoleixing">
					<el-input v-model="ruleForm.tonggaoleixing" placeholder="通告类型" clearable  :readonly="ro.tonggaoleixing"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="通告类型" prop="tonggaoleixing">
					<el-input v-model="ruleForm.tonggaoleixing" placeholder="通告类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="招募人数" prop="zhaomurenshu">
					<el-input v-model="ruleForm.zhaomurenshu" placeholder="招募人数" clearable  :readonly="ro.zhaomurenshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="招募人数" prop="zhaomurenshu">
					<el-input v-model="ruleForm.zhaomurenshu" placeholder="招募人数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="截止日期" prop="jiezhiriqi">
					<el-input v-model="ruleForm.jiezhiriqi" placeholder="截止日期" clearable  :readonly="ro.jiezhiriqi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="截止日期" prop="jiezhiriqi">
					<el-input v-model="ruleForm.jiezhiriqi" placeholder="截止日期" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="拍摄时间" prop="paisheshijian">
					<el-input v-model="ruleForm.paisheshijian" placeholder="拍摄时间" clearable  :readonly="ro.paisheshijian"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="拍摄时间" prop="paisheshijian">
					<el-input v-model="ruleForm.paisheshijian" placeholder="拍摄时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="拍摄地点" prop="paishedidian">
					<el-input v-model="ruleForm.paishedidian" placeholder="拍摄地点" clearable  :readonly="ro.paishedidian"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="拍摄地点" prop="paishedidian">
					<el-input v-model="ruleForm.paishedidian" placeholder="拍摄地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="佣金" prop="yongjin">
					<el-input v-model="ruleForm.yongjin" placeholder="佣金" clearable  :readonly="ro.yongjin"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="佣金" prop="yongjin">
					<el-input v-model="ruleForm.yongjin" placeholder="佣金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="商家账号" prop="shangjiazhanghao">
					<el-input v-model="ruleForm.shangjiazhanghao" placeholder="商家账号" clearable  :readonly="ro.shangjiazhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="商家账号" prop="shangjiazhanghao">
					<el-input v-model="ruleForm.shangjiazhanghao" placeholder="商家账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="商家昵称" prop="shangjianicheng">
					<el-input v-model="ruleForm.shangjianicheng" placeholder="商家昵称" clearable  :readonly="ro.shangjianicheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="商家昵称" prop="shangjianicheng">
					<el-input v-model="ruleForm.shangjianicheng" placeholder="商家昵称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="商家姓名" prop="shangjiaxingming">
					<el-input v-model="ruleForm.shangjiaxingming" placeholder="商家姓名" clearable  :readonly="ro.shangjiaxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="商家姓名" prop="shangjiaxingming">
					<el-input v-model="ruleForm.shangjiaxingming" placeholder="商家姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="报名申请" prop="baomingshenqing">
					<el-input v-model="ruleForm.baomingshenqing" placeholder="报名申请" clearable  :readonly="ro.baomingshenqing"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="报名申请" prop="baomingshenqing">
					<el-input v-model="ruleForm.baomingshenqing" placeholder="报名申请" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="date" v-if="type!='info'" label="报名时间" prop="baomingshijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.baomingshijian" 
						type="date"
						:readonly="ro.baomingshijian"
						placeholder="报名时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.baomingshijian" label="报名时间" prop="baomingshijian">
					<el-input v-model="ruleForm.baomingshijian" placeholder="报名时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="select" v-if="type!='info'"  label="报名状态" prop="baomingzhuangtai">
					<el-select :disabled="ro.baomingzhuangtai" v-model="ruleForm.baomingzhuangtai" placeholder="请选择报名状态" >
						<el-option
							v-for="(item,index) in baomingzhuangtaiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="报名状态" prop="baomingzhuangtai">
					<el-input v-model="ruleForm.baomingzhuangtai"
						placeholder="报名状态" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="演员账号" prop="yanyuanzhanghao">
					<el-input v-model="ruleForm.yanyuanzhanghao" placeholder="演员账号" clearable  :readonly="ro.yanyuanzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="演员账号" prop="yanyuanzhanghao">
					<el-input v-model="ruleForm.yanyuanzhanghao" placeholder="演员账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="昵称" prop="nicheng">
					<el-input v-model="ruleForm.nicheng" placeholder="昵称" clearable  :readonly="ro.nicheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="昵称" prop="nicheng">
					<el-input v-model="ruleForm.nicheng" placeholder="昵称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="姓名" prop="xingming">
					<el-input v-model="ruleForm.xingming" placeholder="姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="upload" v-if="type!='info' && !ro.touxiang" label="头像" prop="touxiang">
					<file-upload
						tip="点击上传头像"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
						@change="touxiangUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="upload" v-else-if="ruleForm.touxiang" label="头像" prop="touxiang">
					<img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
			</template>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-if="type!='info'"  label="通告内容" prop="tonggaoneirong">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.tonggaoneirong" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else-if="ruleForm.tonggaoneirong" label="通告内容" prop="tonggaoneirong">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.tonggaoneirong"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"20px 0 0"}' class="btn">
				<el-button :style='{"border":"4px solid #18cfa5","cursor":"pointer","padding":"0 30px","margin":"0 20px 0 0","outline":"none","color":"#1fbfae","borderRadius":"0px","background":"#e9faf8","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"4px solid #dc333b","cursor":"pointer","padding":"0 30px","margin":"0","outline":"none","color":"#dc333b","borderRadius":"0px","background":"#fbeced","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"4px solid #dc333b","cursor":"pointer","padding":"0 30px","margin":"0","outline":"none","color":"#dc333b","borderRadius":"0px","background":"#fbeced","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				tonggaobiaoti : false,
				tonggaoleixing : false,
				zhaomurenshu : false,
				jiezhiriqi : false,
				paisheshijian : false,
				paishedidian : false,
				yongjin : false,
				tonggaoneirong : false,
				shangjiazhanghao : false,
				shangjianicheng : false,
				shangjiaxingming : false,
				lianxifangshi : false,
				baomingshenqing : false,
				baomingshijian : false,
				baomingzhuangtai : false,
				yanyuanzhanghao : false,
				nicheng : false,
				xingming : false,
				lianxidianhua : false,
				touxiang : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				tonggaobiaoti: '',
				tonggaoleixing: '',
				zhaomurenshu: '',
				jiezhiriqi: '',
				paisheshijian: '',
				paishedidian: '',
				yongjin: '',
				tonggaoneirong: '',
				shangjiazhanghao: '',
				shangjianicheng: '',
				shangjiaxingming: '',
				lianxifangshi: '',
				baomingshenqing: '',
				baomingshijian: '',
				baomingzhuangtai: '',
				yanyuanzhanghao: '',
				nicheng: '',
				xingming: '',
				lianxidianhua: '',
				touxiang: '',
				shhf: '',
			},
		
			baomingzhuangtaiOptions: [],
			
			rules: {
				tonggaobiaoti: [
				],
				tonggaoleixing: [
				],
				zhaomurenshu: [
				],
				jiezhiriqi: [
				],
				paisheshijian: [
				],
				paishedidian: [
				],
				yongjin: [
				],
				tonggaoneirong: [
				],
				shangjiazhanghao: [
				],
				shangjianicheng: [
				],
				shangjiaxingming: [
				],
				lianxifangshi: [
				],
				baomingshenqing: [
				],
				baomingshijian: [
				],
				baomingzhuangtai: [
				],
				yanyuanzhanghao: [
				],
				nicheng: [
				],
				xingming: [
				],
				lianxidianhua: [
				],
				touxiang: [
				],
				sfsh: [
				],
				shhf: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
		this.ruleForm.baomingshijian = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
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
						if(o=='baomingshenqing'){
							this.ruleForm.baomingshenqing = obj[o];
							this.ro.baomingshenqing = true;
							continue;
						}
						if(o=='baomingshijian'){
							this.ruleForm.baomingshijian = obj[o];
							this.ro.baomingshijian = true;
							continue;
						}
						if(o=='baomingzhuangtai'){
							this.ruleForm.baomingzhuangtai = obj[o];
							this.ro.baomingzhuangtai = true;
							continue;
						}
						if(o=='yanyuanzhanghao'){
							this.ruleForm.yanyuanzhanghao = obj[o];
							this.ro.yanyuanzhanghao = true;
							continue;
						}
						if(o=='nicheng'){
							this.ruleForm.nicheng = obj[o];
							this.ro.nicheng = true;
							continue;
						}
						if(o=='xingming'){
							this.ruleForm.xingming = obj[o];
							this.ro.xingming = true;
							continue;
						}
						if(o=='lianxidianhua'){
							this.ruleForm.lianxidianhua = obj[o];
							this.ro.lianxidianhua = true;
							continue;
						}
						if(o=='touxiang'){
							this.ruleForm.touxiang = obj[o];
							this.ro.touxiang = true;
							continue;
						}
				}
				






















			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yanyuanzhanghao!=''&&json.yanyuanzhanghao) || json.yanyuanzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yanyuanzhanghao = json.yanyuanzhanghao
						this.ro.yanyuanzhanghao = true;
					}
					if(((json.nicheng!=''&&json.nicheng) || json.nicheng==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.nicheng = json.nicheng
						this.ro.nicheng = true;
					}
					if(((json.xingming!=''&&json.xingming) || json.xingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.xingming = json.xingming
						this.ro.xingming = true;
					}
					if(((json.lianxidianhua!=''&&json.lianxidianhua) || json.lianxidianhua==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxidianhua = json.lianxidianhua
						this.ro.lianxidianhua = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/baomingzhuangtai/baomingzhuangtai`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.baomingzhuangtaiOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `woyaobaoming/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.tonggaoneirong = this.ruleForm.tonggaoneirong.replace(reg,'../../../springboot33d98/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {








































	if(this.ruleForm.touxiang!=null) {
		this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
	}





var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "woyaobaoming/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `woyaobaoming/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.woyaobaomingCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `woyaobaoming/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.woyaobaomingCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.woyaobaomingCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    touxiangUploadChange(fileUrls) {
	    this.ruleForm.touxiang = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  text-shadow: 0 1px 10px #fff;
	  	  color: #666;
	  	  background: none;
	  	  font-weight: 500;
	  	  display: block;
	  	  width: 120px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #999;
	  	  background: rgba(24,207,165,.1);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  border-color: #18cfa5;
	  	  border-width: 4px;
	  	  border-style: solid;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #999;
	  	  background: rgba(24,207,165,.1);
	  	  width: 400px;
	  	  font-size: 14px;
	  	  border-color: #18cfa5;
	  	  border-width: 4px;
	  	  border-style: solid;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 0px solid #333;
	  	  padding: 0 10px 0 30px;
	  	  color: #999;
	  	  font-size: 14px;
	  	  border-color: #18cfa5;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  background: rgba(24,207,165,.1);
	  	  width: 400px;
	  	  border-width: 4px;
	  	  border-style: solid;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 4px solid #18cfa5;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: #18cfa5;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 4px solid #18cfa5;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: #18cfa5;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 4px solid #18cfa5;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: #18cfa5;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 4px solid #18cfa5;
	  	  border-radius: 0px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  color: #999;
	  	  width: 500px;
	  	  font-size: 14px;
	  	  min-height: 120px;
	  	  height: auto;
	  	}
</style>
