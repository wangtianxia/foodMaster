<template>
  <div class="login_content">
    <div class="login_bg">
      <section class="login_container">
        <section class="login_container_box">
          <section class="login_group">
            <section class="input_box">
              <el-input id="tel" class="tel"  v-model="tel" @blur="fun()" placeholder="请输入手机号"/>
              <div class="close_box"  @click="clearTel()">
                 <img src="../../static/close.png" alt="">
              </div>
            </section>
          </section>
          <section class="login_group">
            <section class="code_box">
              <el-input v-model="code"  placeholder="输入验证码"/>
            </section>
            <a class="getCodeStyle" @click="onGetCode()">获取验证码</a>
          </section>
          <div class="submitPpCode" @click="toLogin()">
            登陆
          </div>
          <section class="toSign" @click="toSign()">
            <p>新用户注册</p>
          </section>
        </section>
      </section>
      <p class="top_info">
          跳转微信<br/>
          联系客户购买跳转微信<br/>
          微信营销解决方案，<br/>
          跳转端浏览器跳转微信打开指定二维码，<br/>
          转化率全面提升。
      </p>
      <!--飘的弹窗-->
      <section class="messageAlert" v-if="isShowAlert" @click="closeAlert()">
        <section class="messageBg">
          <section class="messageBox">
            <p>{{message}}</p>
          </section>
        </section>
      </section>
      <!--注册弹窗-->
      <section class="sigmAlert" v-show="isShowSign">
        <section class="signBg">
          <section class="signContent">
              <div class="closeSign"  @click="closeSign()">
                <img src="../../static/close.png" alt="">
              </div>
                <h2>网站申明</h2>
                <p>
                  Duis porttitor vulputate arcu, at hendrerit eros cursus accumsan. Donec a dui vitae velit feugiat vulputate.
                  Aliquam erat volutpat. In quis leo nec urna iaculis luctus. Mauris ut lorem at odio volutpat maximus ut nec erat.
                  Donec vulputate urna eu magna venenatis, a fermentum nisi lacinia. Nam tempor luctus nisl.
                  Nulla nunc metus, imperdiet id luctus at, feugiat ac nibh. Donec non tempus ipsum.
                  Nunc enim nulla, placerat a ornare vitae, pretium convallis tellus. Proin posuere aliquet sem ac laoreet.
                  Suspendisse non turpis pellentesque, auctor turpis et, laoreet nisi.
                  Nullam euismod ligula urna, eu porttitor odio elementum non.
                  Ut pretium felis tortor, sed auctor nisi tempor eu.
                </p>

                <p style="margin-top:20px;">
                  微信：<span>WANG XIAOXI</span>
                </p>
                <p style="margin-top:10px;">
                  Q&nbsp;&nbsp;Q:  <span>WANG XIAOXI</span>
                </p>
          </section>
        </section>
      </section>
    </div>

  </div>
</template>

<script>
  import md5 from "../config/md5";
  import {login} from "../server/getData.js";
  export default {
    data() {
      return {
        worimg: false,
        userName: "",
        passWord: "",
        tel: '',
        code: '',
        isShowAlert: false,
        message: '',
        isShowSign:false
      };
    },
    mounted(){
      if (this.getCookie('username')) {
        this.userName = this.getCookie('username');
      }
      if (this.getCookie('password')) {
        this.passWord = this.getCookie('password')
      }
    },
    methods: {
      //失去焦点
      fun(){
//        let re = /^1\d{10}$/;   //正则表达式
//        if (re.test(this.tel)) {      //判断字符是否是11位数字
//          let reg = /^1(3|4|5|7|8)\d{9}$/;
//          if (!(reg.test(this.tel))) {
//            this.isShowAlert = true;
//            this.message = '手机号输入有误,请重填';
//            return false;
//          } else {
//            console.log('验证通过');
//          }
//        } else {
//          this.isShowAlert = true;
//          this.message = '手机号输入有误,请重填';
//          return false;
//        }
      },
      login() {
        if (this.userName == "") {
          this.$alert("用户名不能为空！", "登陆出错", {
            confirmButtonText: "确定",
            type: "warning",
            center: true,
            callback: (action) => {
            }
          });
          return;
        }
        if (this.passWord == "") {
          this.$alert("密码不能为空！", "登陆出错", {
            confirmButtonText: "确定",
            type: "warning",
            center: true,
            callback: action => {
            }
          });
          return;
        }
        let password = md5.makeSign(this.passWord);
        login({username: this.userName, password: password})
          .then(res => {
            console.log(res, '---')
            if (res['st'] == 1) {
              this.setCookie('username', this.userName, 3600);
              this.setCookie('password', this.passWord, 3600);
              var tempType = res['data']['type'];
              this.$router.push('/content/' + tempType + '/userManageList/' + tempType);
            } else if (res['st'] == 2) {
              this.worimg = true;
            } else if (res['st'] == 3) {
              this.worimg = true;
            } else if (res['st'] == -1) {
              this.$alert("登陆出错", "登陆出错", {
                confirmButtonText: "确定",
                type: "warning",
                center: true,
                callback: action => {
                }
              });
            } else if (res['st'] == -2) {
              this.$alert("请重新登陆", "登陆出错", {
                confirmButtonText: "确定",
                type: "warning",
                center: true,
                callback: action => {
                }
              });
            } else if (res == 0) {
              this.$router.push('/bedRequest');
            }
          }).catch(err => {
          console.log(err);
        });
      },
      setCookie(name, value, time){
        document.cookie = name + '=' + value + ';expires=' + time + ';max-age=' + time + ';';
      },
      getCookie(name){
        var arr = document.cookie.split("; ");
        let value = ''
        for (let i in arr) {
          var arr2 = arr[i].split("=");
          if (arr2[0] == name) {
            value = arr2[1];
            break;
          }
        }
        return value
      },
      resetUsreName() {
        this.userName = "";
      },
      resetPassWord() {
        this.passWord = "";
      },
      //获取验证码
      onGetCode(){
        this.validate()
      },
      //注册
      toLogin(){
        if (this.tel == '') {
          this.isShowAlert = true;
          this.message = '手机号不能为空';
          return;
        } else {
          let re = /^1\d{10}$/;   //正则表达式
          if (re.test(this.tel)) {      //判断字符是否是11位数字
            let reg = /^1(3|4|5|7|8)\d{9}$/;
            if (!(reg.test(this.tel))) {
              this.isShowAlert = true;
              this.message = '手机号输入有误,请重填';
              return false;
            } else {
              this.$router.push('/content/userManageList')
            }
          } else {
            this.isShowAlert = true;
            this.message = '手机号输入有误,请重填';
            return false;
          }

        }
        if (this.code == '') {
          this.isShowAlert = true;
          this.message = '验证码不能为空';
          return;
        }
      },
      //验证手机号
      validate(){
        if (this.tel == '') {
          this.isShowAlert = true;
          this.message = '手机号不能为空';
          return;
        } else {
          let re = /^1\d{10}$/;   //正则表达式
          if (re.test(this.tel)) {      //判断字符是否是11位数字
            let reg = /^1(3|4|5|7|8)\d{9}$/;
            if (!(reg.test(this.tel))) {
              this.isShowAlert = true;
              this.message = '手机号输入有误,请重填';
              return false;
            } else {
              console.log('验证通过');
            }
          } else {
            this.isShowAlert = true;
            this.message = '手机号输入有误,请重填';
            return false;
          }

        }
      },
      clearTel(){
        this.tel = '';
      },

      //关闭弹窗
      closeAlert(){
        this.isShowAlert = false;
      },
      toSign(){
        this.isShowSign = true
      },
      closeSign(){
          this.isShowSign = false
      }
    },

  }
</script>

<style>
  .login_content {
    width:100%;
    height:100%;
    overflow: hidden;
    position:relative;
  }

  .login_bg {
    max-width:750px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: lightskyblue;
  }
  .close_box{
    position: absolute;
    top: 10px;
    right: 30px;
    height: 60px;
    width: 60px;
    z-index:99;
   }
  .close_box>img{
    /*width:4%;*/
    display:inline-block;
    margin:0 auto;
    width:12px;
    height:12px;
    line-height:20px;
  }

  .top_info {
    margin: 0 auto;
    margin-top: 40px;
    color: #000;
    line-height: 35px;
    text-align: center;
    border-radius: 10px;
  }

  .login_container_box {
    width: 350px;
    height: 270px;
    background: #fff;
    margin: 0 auto;
    border-radius: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position:relative;

  }

  .login_container {
    margin:0 auto;
    margin-top:50px;
    text-align: center;
  }

  .login_group {
    width: 85%;
    height: 60px;
    line-height:60px;
    /*height:.5rem;*/
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
  }

  .login_group input {
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    border: 0;
    list-style: none;
    outline: none;
    resize: none;
    color: black;
    border-radius: 10px;
    padding-left: 20px;
  }

  .code_box > input {
    width: 150px;
    height: 40px;
    line-height:40px;
    font-size: 18px;
    border: 0;
    list-style: none;
    outline: none;
    resize: none;
    color: black;
    border-radius: 10px;
    padding-left: 20px;
  }

  .submitPpCode {
    padding: 10px 50px;
    line-height: 30px;
    border-radius: 10px;
    background-color: rgb(199, 199, 255);
    text-align: center;
    color: #333;
    font-size: 20px;
  }

  .toSign {
    width: 100%;
    padding: 0 80px;
    text-align: center;
    font-size: 16px;
  }

  .toSign > p {
    color: rgb(199, 199, 255);
    text-decoration: underline;
  }

  .getCodeStyle {
    display: inline-block;
    cursor: pointer;
    color: #000;
    font-size:16px;
  }

  .getCodeStyle:hover {
    color: rgb(199, 199, 255);
  }

  .getCodeStyle:active {
    color: rgb(199, 199, 255);
  }

  /*弹窗*/
  .messageAlert {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 22;
  }

  .messageBg {
    display: flex;
    text-align: center;
    justify-content: center;
    justify-items: center;
    /*background: rgba(0, 0, 0, .2);*/
    width: 100%;
    height: 100%;
  }

  .messageBox {
    width: 250px;
    height: 50px;
    line-height: 50px;
    background: rgba(0, 0, 0, .6);
    font-size: 20px;
    color: #fff;
    position: absolute;
    left: 50%; /* 定位父级的50% */
    top: 50%;
    transform: translate(-50%, -50%); /*自己的50% */
    border-radius: 10px;
    animation: 2s 1s both shareScess
  }

  @keyframes shareScess {
    from {
      transform: translate(-50%, -50%);
    }
    to {
      transform: translate(-50%, -700%);
      opacity: 0;
    }

  }

  /*注册弹窗*/
  .sigmAlert {
    width:100%;
    /*width:100%;*/
    height: 100%;
    position:absolute;
    top:0;
    z-index:100;
  }
  .signBg{
    width:100%;
    max-width: 750px;
    display:flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    background:rgba(0,0,0,.2);
    text-align:left;
    margin:0 auto;

  }
  .signContent {
    width:320px;
    height:520px;
    background:#fff;
    border-radius:10px;
    padding:20px;
    position:relative;
  }
  .signContent>h2{
    text-align:center;
    padding-bottom:10px;
    font-size:20px;
  }
  .closeSign{
    position:absolute;
    top:15px;
    right:15px;
  }
  .closeSign>img{
    width:12px;
    height:12px;
  }

</style>
