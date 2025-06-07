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
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="select" v-if="type!='info'" label="钱包编号" prop="qianbaobianhao">
					<el-select :disabled="ro.qianbaobianhao" @change="qianbaobianhaoChange" v-model="ruleForm.qianbaobianhao" placeholder="请选择钱包编号">
						<el-option
							v-for="(item,index) in qianbaobianhaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.qianbaobianhao" label="钱包编号" prop="qianbaobianhao">
					<el-input v-model="ruleForm.qianbaobianhao" placeholder="钱包编号" readonly></el-input>
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
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="佣金" prop="yongjin">
					<el-input v-model="ruleForm.yongjin" placeholder="佣金" clearable  :readonly="ro.yongjin"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="佣金" prop="yongjin">
					<el-input v-model="ruleForm.yongjin" placeholder="佣金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" clearable  :readonly="ro.beizhu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-else class="input" label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="date" v-if="type!='info'" label="付款时间" prop="fukuanshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.fukuanshijian" 
						type="datetime"
						:readonly="ro.fukuanshijian"
						placeholder="付款时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' class="input" v-else-if="ruleForm.fukuanshijian" label="付款时间" prop="fukuanshijian">
					<el-input v-model="ruleForm.fukuanshijian" placeholder="付款时间" readonly></el-input>
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
				qianbaobianhao : false,
				yanyuanzhanghao : false,
				nicheng : false,
				yongjin : false,
				beizhu : false,
				fukuanshijian : false,
				shangjiazhanghao : false,
				shangjianicheng : false,
				lianxifangshi : false,
				shangjiazhaopian : false,
			},
			
			
			ruleForm: {
				qianbaobianhao: '',
				yanyuanzhanghao: '',
				nicheng: '',
				yongjin: '',
				beizhu: '',
				fukuanshijian: '',
				shangjiazhanghao: '',
				shangjianicheng: '',
				lianxifangshi: '',
				shangjiazhaopian: '',
			},
		
			qianbaobianhaoOptions: [],
			
			rules: {
				qianbaobianhao: [
				],
				yanyuanzhanghao: [
				],
				nicheng: [
				],
				yongjin: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				beizhu: [
				],
				fukuanshijian: [
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
		this.ruleForm.fukuanshijian = this.getCurDateTime()
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
						if(o=='qianbaobianhao'){
							this.ruleForm.qianbaobianhao = obj[o];
							this.ro.qianbaobianhao = true;
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
						if(o=='yongjin'){
							this.ruleForm.yongjin = obj[o];
							this.ro.yongjin = true;
							continue;
						}
						if(o=='beizhu'){
							this.ruleForm.beizhu = obj[o];
							this.ro.beizhu = true;
							continue;
						}
						if(o=='fukuanshijian'){
							this.ruleForm.fukuanshijian = obj[o];
							this.ro.fukuanshijian = true;
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
				



				this.ruleForm.yongjin = 0
				this.ro.yongjin = false;







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
			
            this.$http({
				url: `option/qianbao/qianbaobianhao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.qianbaobianhaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			qianbaobianhaoChange () {
				this.$http({
					url: `follow/qianbao/qianbaobianhao?columnValue=`+ this.ruleForm.qianbaobianhao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.yanyuanzhanghao){
							this.ruleForm.yanyuanzhanghao = data.data.yanyuanzhanghao
						}
						if(data.data.nicheng){
							this.ruleForm.nicheng = data.data.nicheng
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `zhifuyongjin/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
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
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.yongjin = parseFloat(objcross.yongjin) + parseFloat(this.ruleForm.yongjin)
                }

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
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
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
				url: "zhifuyongjin/page", 
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
					   url: `zhifuyongjin/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.zhifuyongjinCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
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
			   url: `zhifuyongjin/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.zhifuyongjinCrossAddOrUpdateFlag = false;
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
      this.parent.zhifuyongjinCrossAddOrUpdateFlag = false;
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
