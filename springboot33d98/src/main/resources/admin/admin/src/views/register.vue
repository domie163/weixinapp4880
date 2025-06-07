<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221201/56d413ebb4fb4576966b6a7b02b625cd.jpg)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"minHeight":"550px","padding":"20px 600px 40px 0px","boxShadow":"0px 0px 6px #ddd","margin":"40px auto 0 auto","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221201/84b4fc6bc9064e4a9e5a8d40dc1324f4.jpg) no-repeat right bottom,#fff","display":"flex","width":"1200px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"width":"100%","margin":"30px 0px 30px 0px","lineHeight":"40px","fontSize":"30px","color":"#333","textAlign":"center"}' class="title">小演员招募小程序的设计与开发注册</div>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">演员账号</div>
					<el-input  v-model="ruleForm.yanyuanzhanghao"  autocomplete="off" placeholder="演员账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">昵称</div>
					<el-input  v-model="ruleForm.nicheng"  autocomplete="off" placeholder="昵称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">姓名</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xiaoyanyuanxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">身高（cm)</div>
					<el-input  v-model="ruleForm.shengao"  autocomplete="off" placeholder="身高（cm)"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">体重（kg)</div>
					<el-input  v-model="ruleForm.tizhong"  autocomplete="off" placeholder="体重（kg)"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">简介</div>
					<el-input  v-model="ruleForm.jianjie"  autocomplete="off" placeholder="简介"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">联系电话</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='xiaoyanyuan'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xiaoyanyuantouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">商家账号</div>
					<el-input  v-model="ruleForm.shangjiazhanghao"  autocomplete="off" placeholder="商家账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">商家昵称</div>
					<el-input  v-model="ruleForm.shangjianicheng"  autocomplete="off" placeholder="商家昵称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">商家姓名</div>
					<el-input  v-model="ruleForm.shangjiaxingming"  autocomplete="off" placeholder="商家姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">商家简介</div>
					<el-input  v-model="ruleForm.shangjiajianjie"  autocomplete="off" placeholder="商家简介"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">联系方式</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 20px","flexWrap":"wrap","display":"block","height":"auto"}' class="list-item" v-if="tableName=='shangjia'">
					<div v-if="false" :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}' class="lable">商家照片</div>
                    <file-upload
                        tip="点击上传商家照片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.shangjiazhaopian?ruleForm.shangjiazhaopian:''"
                        @change="shangjiashangjiazhaopianUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"12px auto  4px 180px","outline":"none","color":"#fff","borderRadius":"20px","background":"linear-gradient(180deg, rgba(102,244,253,1) 0%, rgba(2,197,140,1) 100%),#18cfa5","display":"block","width":"40%","fontSize":"16px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"2","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            xiaoyanyuanxingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.xiaoyanyuanxingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xiaoyanyuantouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        shangjiashangjiazhaopianUploadChange(fileUrls) {
            this.ruleForm.shangjiazhaopian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.yanyuanzhanghao) && `xiaoyanyuan` == this.tableName){
						this.$message.error(`演员账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `xiaoyanyuan` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xiaoyanyuan` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.xingming) && `xiaoyanyuan` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xiaoyanyuan` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
				
					if((!this.ruleForm.shangjiazhanghao) && `shangjia` == this.tableName){
						this.$message.error(`商家账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.shangjianicheng) && `shangjia` == this.tableName){
						this.$message.error(`商家昵称不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `shangjia` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `shangjia` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.shangjiaxingming) && `shangjia` == this.tableName){
						this.$message.error(`商家姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`shangjia` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
					
					
					
					
            if(this.ruleForm.shangjiazhaopian!=null) {
                this.ruleForm.shangjiazhaopian = this.ruleForm.shangjiazhaopian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20221201/56d413ebb4fb4576966b6a7b02b625cd.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 20px;
						margin: 0;
						color: #666;
						background: #f5f5f5;
						width: 100%;
						font-size: 14px;
						border-color: #ebeaed;
						border-width: 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #333;
						padding: 0 20px;
						color: #666;
						font-size: 14px;
						border-color: #ebeaed;
						border-radius: 20px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						background: #f5f5f5;
						width: 100%;
						border-width: 0 0 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #666;
						background: #f5f5f5;
						width: 100%;
						font-size: 14px;
						border-color: #ebeaed;
						border-width: 0 0 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 20px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #666;
						background: #f5f5f5;
						width: 100%;
						font-size: 14px;
						border-color: #ebeaed;
						border-width: 0 0 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #bbb;
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #bbb;
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #bbb;
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  color: #bbb;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>
