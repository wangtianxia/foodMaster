<template>
    <div class="createUrlBox">
        <h2>创建链接</h2>
        <section class="returnList" @click="returnList">
           <el-button>返回列表</el-button>
        </section>
        <section class="commonStyle">
            <span>链接名:</span>
            <el-input v-model="url_name" placeholder="链接名"></el-input>
        </section>
        <section class="commonStyle">
          <span>落地页ID:</span>
          <el-input v-model="id" placeholder="落地页ID"></el-input>
        </section>
        <section class="sureBtn">
          <el-button type="primary">确认</el-button>
        </section>
    </div>
</template>
<script type="text/javascript">
    export default {
        data (){
            return {
              url_name:'',
              id:''
            }
        },
      mounted(){

      },
      methods:{
        returnList(){
            this.$router.push('/content/userManageList')
        }
      }
    }
</script>
<style>
.createUrlBox{
  /*width:100%;*/
  height:100%;
  position:relative;
}
.createUrlBox>h2{
  text-align:center;
  margin:0px auto;
  font-size:20px;
  margin-top:100px
}
  .commonStyle{
    display:flex;
    justify-content:flex-start;
    align-items: flex-start;
    width:80%;
    margin:20px auto;
    font-size:16px;
    line-height:30px;
    padding-top:20px;
  }
  .commonStyle>span{
    width:100px;
    height:40px;
    line-height:40px;

  }
  .commonStyle>input{
     width:150px;
  }
  .sureBtn{
    margin-top:50px;
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .sureBtn>button{
    width:100px;
    height:50px;
    margin-bottom:50px;
  }
/*返回列表*/
  .returnList{
    position:absolute;
    right:10px;
    top:-10px;
  }
</style>
