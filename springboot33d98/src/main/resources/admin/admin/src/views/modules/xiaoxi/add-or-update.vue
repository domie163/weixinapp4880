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
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="select" v-if="type!='info'"  label="通知类型" prop="tongzhileixing">
					<el-select :disabled="ro.tongzhileixing" v-model="ruleForm.tongzhileixing" placeholder="请选择通知类型" >
						<el-option
							v-for="(item,index) in tongzhileixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="通知类型" prop="tongzhileixing">
					<el-input v-model="ruleForm.tongzhileixing"
						placeholder="通知类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="date" v-if="type!='info'" label="通知时间" prop="tongzhishijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.tongzhishijian" 
						type="datetime"
						:readonly="ro.tongzhishijian"
						placeholder="通知时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.tongzhishijian" label="通知时间" prop="tongzhishijian">
					<el-input v-model="ruleForm.tongzhishijian" placeholder="通知时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="select" v-if="type!='info'" label="演员账号" prop="yanyuanzhanghao">
					<el-select :disabled="ro.yanyuanzhanghao" @change="yanyuanzhanghaoChange" v-model="ruleForm.yanyuanzhanghao" placeholder="请选择演员账号">
						<el-option
							v-for="(item,index) in yanyuanzhanghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.yanyuanzhanghao" label="演员账号" prop="yanyuanzhanghao">
					<el-input v-model="ruleForm.yanyuanzhanghao" placeholder="演员账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="昵称" prop="nicheng">
					<el-input v-model="ruleForm.nicheng" placeholder="昵称" clearable  :readonly="ro.nicheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="昵称" prop="nicheng">
					<el-input v-model="ruleForm.nicheng" placeholder="昵称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" readonly></el-input>
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
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="upload" v-if="type!='info' && !ro.shangjiazhaopian" label="商家照片" prop="shangjiazhaopian">
					<file-upload
						tip="点击上传商家照片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.shangjiazhaopian?ruleForm.shangjiazhaopian:''"
						@change="shangjiazhaopianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="upload" v-else-if="ruleForm.shangjiazhaopian" label="商家照片" prop="shangjiazhaopian">
					<img v-if="ruleForm.shangjiazhaopian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.shangjiazhaopian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.shangjiazhaopian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
			</template>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-if="type!='info'"  label="通知内容" prop="tongzhineirong">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.tongzhineirong" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else-if="ruleForm.tongzhineirong" label="通知内容" prop="tongzhineirong">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.tongzhineirong"></span>
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
				tongzhineirong : false,
				tongzhileixing : false,
				tongzhishijian : false,
				yanyuanzhanghao : false,
				nicheng : false,
				lianxidianhua : false,
				shangjiazhanghao : false,
				shangjianicheng : false,
				lianxifangshi : false,
				shangjiazhaopian : false,
			},
			
			
			ruleForm: {
				tonggaobiaoti: '',
				tongzhineirong: '',
				tongzhileixing: '',
				tongzhishijian: '',
				yanyuanzhanghao: '',
				nicheng: '',
				lianxidianhua: '',
				shangjiazhanghao: '',
				shangjianicheng: '',
				lianxifangshi: '',
				shangjiazhaopian: '',
			},
		
			tongzhileixingOptions: [],
			yanyuanzhanghaoOptions: [],
			
			rules: {
				tonggaobiaoti: [
				],
				tongzhineirong: [
				],
				tongzhileixing: [
				],
				tongzhishijian: [
				],
				yanyuanzhanghao: [
				],
				nicheng: [
				],
				lianxidianhua: [
				],
				shangjiazhanghao: [
				],
				shangjianicheng: [
				],
				lianxifangshi: [
				],
				shangjiazhaopian: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
		this.ruleForm.tongzhishijian = this.getCurDateTime()
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
						if(o=='tongzhineirong'){
							this.ruleForm.tongzhineirong = obj[o];
							this.ro.tongzhineirong = true;
							continue;
						}
						if(o=='tongzhileixing'){
							this.ruleForm.tongzhileixing = obj[o];
							this.ro.tongzhileixing = true;
							continue;
						}
						if(o=='tongzhishijian'){
							this.ruleForm.tongzhishijian = obj[o];
							this.ro.tongzhishijian = true;
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
						if(o=='lianxidianhua'){
							this.ruleForm.lianxidianhua = obj[o];
							this.ro.lianxidianhua = true;
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
						if(o=='lianxifangshi'){
							this.ruleForm.lianxifangshi = obj[o];
							this.ro.lianxifangshi = true;
							continue;
						}
						if(o=='shangjiazhaopian'){
							this.ruleForm.shangjiazhaopian = obj[o];
							this.ro.shangjiazhaopian = true;
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
					if(((json.shangjiazhanghao!=''&&json.shangjiazhanghao) || json.shangjiazhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shangjiazhanghao = json.shangjiazhanghao
						this.ro.shangjiazhanghao = true;
					}
					if(((json.shangjianicheng!=''&&json.shangjianicheng) || json.shangjianicheng==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shangjianicheng = json.shangjianicheng
						this.ro.shangjianicheng = true;
					}
					if(((json.lianxifangshi!=''&&json.lianxifangshi) || json.lianxifangshi==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxifangshi = json.lianxifangshi
						this.ro.lianxifangshi = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.tongzhileixingOptions = "已入选,已完成".split(',')
            this.$http({
				url: `option/xiaoyanyuan/yanyuanzhanghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.yanyuanzhanghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			yanyuanzhanghaoChange () {
				this.$http({
					url: `follow/xiaoyanyuan/yanyuanzhanghao?columnValue=`+ this.ruleForm.yanyuanzhanghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.nicheng){
							this.ruleForm.nicheng = data.data.nicheng
						}
						if(data.data.lianxidianhua){
							this.ruleForm.lianxidianhua = data.data.lianxidianhua
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `xiaoxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.tongzhineirong = this.ruleForm.tongzhineirong.replace(reg,'../../../springboot33d98/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {






















	if(this.ruleForm.shangjiazhaopian!=null) {
		this.ruleForm.shangjiazhaopian = this.ruleForm.shangjiazhaopian.replace(new RegExp(this.$base.url,"g"),"");
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
				url: "xiaoxi/page", 
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
					   url: `xiaoxi/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.xiaoxiCrossAddOrUpdateFlag = false;
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
			   url: `xiaoxi/${!this.ruleForm.id ? "save" : "update"}`,
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
				 this.parent.xiaoxiCrossAddOrUpdateFlag = false;
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
      this.parent.xiaoxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    shangjiazhaopianUploadChange(fileUrls) {
	    this.ruleForm.shangjiazhaopian = fileUrls;
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
