import Axios from '../config/axios.js'
/**
 * 登陆
 * @param {*} data
 * username
    password
 */
export const login = (data) => { return Axios('/login',data,'POST')};

/**
 * 列表
 * @param {*} data
 */
export const list = (data) => Axios('/list', data, 'GET');

/*
* payList
*
* */
export const payList = (data) => Axios('/payList', data, 'GET');

/**
 * loginList
 *
 *  */
export const loginList = (data) => Axios('/loginList', data, 'GET');

/*
* 创建子渠道
* 参数 : sub_user_name : 	渠道名		password : 	密码
 返回值 :
 {
 st
 data:{
 enter_url: 入口url
 sub_user_name: 渠道名
 password: 密码
 }
 }
* */
export const createSubChannel = (data) => Axios('/createSubChannel', data, 'GET');

/*
* 子渠道列表
*参数   :    无
 返回值 :
 {
 st:
 data : {
 list : [ {
 channel:'渠道号' ,
 entry_url : '入口url' ,
 sub_user_name : 渠道名
 } ]
 }
 }
 列表只显示入口url和渠道名, 不显示渠道号
* */
export const subChannelList	 = (data) => Axios('/subChannelList	', data, 'GET');


/*
*	3 、/list 			首页总计接口加参数  channel, channel列表从 /subChannelList 接口拿,  需要加一个总计, 传 channel=0 就好, 做下拉选
* */


// /check  勾选分享和关注
// 参数:  share: (勾选传1, 未勾选传0),     follow: (勾选传1, 未勾选传0)
// 返回值: {st:1, msg:''}

export const check	 = (data) => Axios('/check	', data, 'GET');

/*
 /checkInfo    勾选信息
 参数  无
 返回值:
 {
 st: 1,
 data:{
 share: 1
 follow: 0
 }
 }
 */

export const checkInfo	 = (data) => Axios('/checkInfo	', data, 'GET');
