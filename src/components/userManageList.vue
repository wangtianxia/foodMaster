<template>
  <div class="childChannelList">
    <div class="listContent">
      <div class="topBox">
        <section class="top_info1">
            <p>链接总数: <span></span>条</p>
            <p style="margin-left:20px;">已用：<span>1</span>条   </p>
        </section>
        <section>
            <el-button  @click="createUrl()">创建链接</el-button>
        </section>
      </div>
      <div class="channelTable">
        <el-table :data="tableData" :border='true' style="width:100%;">
          <el-table-column prop="sub_user_name"  width="80"  label="链接名" align="center">
          </el-table-column>
          <el-table-column prop="id"  width="120"  label="落地页ID" align="center">
          </el-table-column>
          <el-table-column prop="num"  width="140"  label="今日跳转数" align="center">
          </el-table-column>
          <el-table-column prop="num"  width="120"  label="昨日数据" align="center">
          </el-table-column>
          <el-table-column prop="num"  width="120"  label="合计数据" align="center">
          </el-table-column>
          <el-table-column prop="creat_time" width="120"  label="添加时间" align="center">
          </el-table-column>
          <el-table-column prop="detail_time"  width="120"  label="有效期" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {subChannelList} from "../server/getData.js";
  export default {
    data (){
      return {
        tableData:[
          {
            sub_user_name:'001',
            url:'https://www.baidu.com',
            id:'10010',
            num:'111111',
            creat_time:'2018-11-15',
            detail_time:'2018-12-11'
          },
          {
            sub_user_name:'002',
            url:'https://www.baidu.com',
            id:'10010',
            num:'111111',
            creat_time:'2018-11-15',
            detail_time:'2018-12-11'
          },
          {
            sub_user_name:'003',
            url:'https://www.baidu.com',
            id:'10010',
            num:'111111',
            creat_time:'2018-11-15',
            detail_time:'2018-12-11'
          },
          {
            sub_user_name:'004',
            url:'https://www.baidu.com',
            id:'10010',
            num:'111111',
            creat_time:'2018-11-15',
            detail_time:'2018-12-11'
          },
          {
            sub_user_name:'005',
            url:'https://www.baidu.com',
            id:'10010',
            num:'111111',
            creat_time:'2018-11-15',
            detail_time:'2018-12-11'
          }

        ],
//        pageSize:1,
//        total:0,
//        page_num:10
      }
    },
    mounted(){
      subChannelList({}).then(res=>{
        if(res['st'] == '1'){
          this.tableData = res['data']['list'];
          this.total = res['data']['total'] || 0
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
    methods:{
      createUrl(){
          this.$router.push('/content/createUrl')
      },
//      handleCurrentChange(index){
//        subChannelList({}).then(res=>{
//          if(res['st'] == '1'){
//            this.tableData = res['data']['list']
//          }else if (res['st'] == '2') {
//            this.$alert("请重新登陆", "登陆出错", {
//              confirmButtonText: "确定",
//              type: "warning",
//              center: true,
//              callback: action => {
//                this.$router.push('/login');
//              }
//            });
//          }
//        }).catch(res=>{
//          this.$message.error('获取列表失败');
//        })
//      }
      handleEdit(){

      },
      handleDelete(){

      }
    }
  }
</script>
<style>
  .childChannelList {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 8rem;
    margin: 10px auto;
    /*background:rgba(0,0,0,0.2)*/
  }
    h2 {
      font-size: 20px;
      color: #000;
      text-align:center;
      margin-top: 100px;
    }
    .listContent {
      width: 100%;
      height: 100%;
      text-align: center;
      padding-top: 30px;
      margin: 50px auto;
    }
      .channelTable{
        width:90%;
        max-width:750px;
        text-align:center;
        margin:0 auto;
        overflow-x: scroll;
      }
      .el-table tr th {
        background-color: lightskyblue;
        color: #000;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .el-table tr td {
        text-align: center;
        line-height: 25px;
        font-size: 16px;
      }

    .topBox{
      margin:20px;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    .top_info1{
      width:80%;
      display:flex;
      justify-content: flex-start;
      align-items: center;
    }
    .top_info>p{
       font-size:16px;
    }
</style>
