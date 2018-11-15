/**
 * Created by web on 2018/1/25.
 */
export default{
  saveData(key,value){
    if(typeof value != 'string'){
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key,value);
  },
  getData(){
    if(window.localStorage.getItem(key)){
        return JSON.parse(window.localStorage.getItem(key));
    }else{
       return ''
    }
  },
  deleteData(){
    if(window.localStorage.getItem(key)){
        window.localStorage.removeItem(key)
    }
  }


}
