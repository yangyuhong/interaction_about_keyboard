var $ = require('jquery');
/*=================================================
 函数功能：点击页面非文本输入框区域关闭软键盘
 ==================================================*/
window.CloseKeyBoard = function() {
    $("body input:not(:text,:password)").click(function() {

        hideKeyBoard();

    })
},

window.setLocalData = function(key,value){
    value = typeof(value) == "string" ? value : JSON.stringify(value);
    console.log('savelocaldata: key:'+key+' value:'+value);
    window.localStorage.setItem(key,value);
},

window.getLocalData = function(key){
    console.log('getlocaldata key:'+key);
    var storage = window.localStorage;
    if (storage.getItem(key)) {
         // 如果获取的值是数组或对象,则返回json对象
        if (storage.getItem(key).indexOf("[") != -1 || storage.getItem(key).indexOf("{") != -1 ) {
            return JSON.parse(storage.getItem(key));
        }else{
            return storage.getItem(key).trim();
        }

    }
    return null;
},

window.removeLocalData = function(key){
    window.localStorage.removeItem(key);
},

window.clearLocalData = function(){
    window.localStorage.clear();
}








