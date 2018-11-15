<template>
  <div class="detail_content">
    <div class="detail_top">
      <div class="detail_top_manager">
        熊猫美食后台管理中心
      </div>
      <div class="detail_top_tuichu">
        <el-button type="danger" @click="outLogin">退出登录</el-button>
      </div>
      <!--<div v-show="showMenu" style="padding-left:20px;font-size:30px;color:#333;">-->
        <!--<el-breadcrumb separator="/">-->
          <!--<el-breadcrumb-item :to="{ path: '/content/' + this.$route.params.tempType+'/userManageList/' + this.$route.params.tempType }">首页</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item :to="{ path: '/content/'+this.$route.params.tempType+'/.childChannelList h2' }">子渠道列表</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item  :to="{ path: '/content/'+this.$route.params.tempType+'/addChildChannel' }">创建子渠道</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item></el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->
      <!--</div>-->
    </div>
    <div class="detail_right">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
  import {subChannelList} from "../server/getData.js";
  export default {
    data(){
      return {
        showMenu:false,
        tempType:''
        /**/
      }
    },
    mounted(){
//    var tempType = this.$route.params.tempType;
//    console.log(tempType,'--')
      if(this.$route.params.tempType > 0){
        this.showMenu = true;
      }else{
        this.showMenu = false;
      }
      subChannelList({}).then(res=>{
        console.log(res,'---')
        if(res['st'] == '1'){
//          var tempChannel = res['data']['list'];
//          for(var i=0;i<tempChannel.length;i++){
//              var tempArr = [
//                  'tianyou0',
//                  'tianyou1',
//                  'tianyou2',
//                  'tianyou3',
//                  'tianyou4',
//                  'tianyou5',
//                  'tianyou6',
//                  'tianyou7',
//                  'tianyou8',
//                  'tianyou9',
//                  'tianyou10',
//                  'tianyou11',
//                  'tianyou12',
//                  'tianyou13',
//                  'tianyou14',
//                  'tianyou15',
//                  'tianyou16',
//                  'tianyou17',
//                  'tianyou18',
//                  'tianyou19',
//                  'chihuo1',
//                  'chihuo'
//              ];
//             for(var j=0;j<tempArr.length;j++){
//               if(tempChannel[i]['sub_user_name'] == tempArr[j]){
//                   this.showMenu = true;
//               }
//             }
//
//          }
        }else if (res['st'] == '2') {
          this.$alert("请重新登陆", "登陆出错", {
            confirmButtonText: "确定",
            type: "warning",
            center: true,
            callback: action => {
              this.$router.push('/login');
            }
          });
        }
      }).catch(res=>{
        this.$message.error('获取列表失败');
      })
    },
    methods: {
      outLogin(){
        this.$router.push('/login');
      }
    }
  }
</script>

<style>
  .detail_content {
    width: 100%;
    /*max-width:750px;*/
    margin: 0 auto;
    height: 100%;
    position: relative;
  }

  .detail_top {
    width: 100%;
    max-width: 750px;
    line-height: 80px;
    background-color: lightskyblue;
    position: fixed;
    z-index: 5;
  }

  .detail_top_manager {
    display: inline-block;
    text-align: center;
    height: 100%;
    font-size: 20px;
    color: white;
    font-weight: bold;
    line-height: 80px;
    margin-left:10px;
  }

  .detail_top_tuichu {
    float: right;
    margin-right: 30px;
    padding-top: 0px;
    color: white;
    font-size: 20px;
  }

  .detail_left {
    width: 145px;
    float: left;
    height: 100%;
    background-color: #eef1f6;
    position: fixed;
    z-index: 0;
    top: 60px;
  }

  .router-link-active {
    color: rgb(32, 160, 255);
  }

  .detail_right {
    /*height:100%;*/
    /*max-width:750px;*/
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .stasticBox p {
    text-align: left;
    line-height: 30px;
    color: #333;
    padding-left: 25px;
  }

  .activeClass {
    color: rgb(32, 160, 255);
  }

  .el-button--danger {
  . font-size: 35px;
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  /*导航字体*/
  .el-breadcrumb__item  {
    font-size: 17px;
    line-height: 30px;
    color:#333;
    font-weight:normal;
  }
  .el-breadcrumb__inner{
    font-size: 25px;
    line-height: 35px;
    color:#333;
    font-weight:normal;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
     color: #000;
    cursor: text;
  }
</style>
