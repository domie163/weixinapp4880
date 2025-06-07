<template>
  <div>
    <el-form
	  :style='{"minHeight":"calc(100vh - 260px)","padding":"30px  30px 20px 40px","boxShadow":"6px 6px 0px rgba(0,0,0,.1)","margin":"0px auto 0","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221202/3a1390c8b1c6477eab0f816fcf703030.png) no-repeat left top,url(http://codegen.caihongy.cn/20221202/5cd54f92f6ee487ca789e17939569264.png) no-repeat right bottom,#fff","display":"flex","justifyContent":"space-between","height":"100%"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="120px"
    >  
     <el-row>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="演员账号" prop="yanyuanzhanghao">
          <el-input v-model="ruleForm.yanyuanzhanghao" readonly              placeholder="演员账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="昵称" prop="nicheng">
          <el-input v-model="ruleForm.nicheng"               placeholder="昵称" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="姓名" prop="xingming">
          <el-input v-model="ruleForm.xingming"               placeholder="姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-if="flag=='xiaoyanyuan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in xiaoyanyuanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="身高（cm)" prop="shengao">
          <el-input v-model="ruleForm.shengao"               placeholder="身高（cm)" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="体重（kg)" prop="tizhong">
          <el-input v-model="ruleForm.tizhong"               placeholder="体重（kg)" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="简介" prop="jianjie">
          <el-input v-model="ruleForm.jianjie"               placeholder="简介" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='xiaoyanyuan'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua"               placeholder="联系电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-if="flag=='xiaoyanyuan'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="xiaoyanyuantouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='shangjia'"  label="商家账号" prop="shangjiazhanghao">
          <el-input v-model="ruleForm.shangjiazhanghao" readonly              placeholder="商家账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='shangjia'"  label="商家昵称" prop="shangjianicheng">
          <el-input v-model="ruleForm.shangjianicheng"               placeholder="商家昵称" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='shangjia'"  label="商家姓名" prop="shangjiaxingming">
          <el-input v-model="ruleForm.shangjiaxingming"               placeholder="商家姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='shangjia'"  label="商家简介" prop="shangjiajianjie">
          <el-input v-model="ruleForm.shangjiajianjie"               placeholder="商家简介" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}'   v-if="flag=='shangjia'"  label="联系方式" prop="lianxifangshi">
          <el-input v-model="ruleForm.lianxifangshi"               placeholder="联系方式" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-if="flag=='shangjia'" label="商家照片" prop="shangjiazhaopian">
          <file-upload
          tip="点击上传商家照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.shangjiazhaopian?ruleForm.shangjiazhaopian:''"
          @change="shangjiashangjiazhaopianUploadChange"
          ></file-upload>
        </el-form-item>
		<el-form-item :style='{"margin":"0 0 20px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"48%","justifyContent":"flex-start"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"padding":"0","margin":"20px 0 0"}'>
			<el-button :style='{"border":"4px solid #18cfa5","cursor":"pointer","padding":"0 30px","margin":"0 20px 0 0","outline":"none","color":"#1fbfae","borderRadius":"0px","background":"#e9faf8","width":"auto","lineHeight":"40px","fontSize":"14px","height":"44px"}' type="primary" @click="onUpdateHandler">修 改</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      xiaoyanyuanxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.xiaoyanyuanxingbieOptions = "男,女".split(',')
  },
  methods: {
    xiaoyanyuantouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    shangjiashangjiazhaopianUploadChange(fileUrls) {
        this.ruleForm.shangjiazhaopian = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.yanyuanzhanghao)&& 'xiaoyanyuan'==this.flag){
        this.$message.error('演员账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'xiaoyanyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.xingming)&& 'xiaoyanyuan'==this.flag){
        this.$message.error('姓名不能为空');
        return
      }
      if( 'xiaoyanyuan' ==this.flag && this.ruleForm.lianxidianhua&&(!isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.shangjiazhanghao)&& 'shangjia'==this.flag){
        this.$message.error('商家账号不能为空');
        return
      }
      if((!this.ruleForm.shangjianicheng)&& 'shangjia'==this.flag){
        this.$message.error('商家昵称不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'shangjia'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if((!this.ruleForm.shangjiaxingming)&& 'shangjia'==this.flag){
        this.$message.error('商家姓名不能为空');
        return
      }
      if( 'shangjia' ==this.flag && this.ruleForm.lianxifangshi&&(!isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }
        if(this.ruleForm.shangjiazhaopian!=null) {
                this.ruleForm.shangjiazhaopian = this.ruleForm.shangjiazhaopian.replace(new RegExp(this.$base.url,"g"),"");
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
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
