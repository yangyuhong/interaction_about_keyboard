var $ = require('jquery');
window.handleKeyBoard= null;
window.fillInputContent = function(code){
    console.log('fillInputContent:'+code);
    window.handleKeyBoard(code);
    };

module.exports = {
        /**
     *    显示键盘
     *    @param        id    触发显示键盘事件的文本框ID
     *    @param        type    键盘类型    1.纯数字键盘,2.带小数点的数字键盘,3.数字字母切换键盘,4.纯字母键盘,10.键盘精灵 ;
     */
    showKDSKeyboard(id,type,handleKeyBoardClick){
        console.log('handleKeyBoardClick');
        console.log(handleKeyBoardClick);
    window.handleKeyBoard = handleKeyBoardClick;
    if(id == undefined){
        console.log("文本输入框 id 不能为空！");
        return;
    }
    var inputObj = $("[id='"+id+"']");
    if (inputObj.length == 0) {
        console.log("文本输入框 id 不存在! id=" + id);
            return;
    }else{
        console.log("文本输入框 id ="+id);
    }
    inputObj.focus();
    if (type == undefined) {
        console.log("键盘类型不存在");
        return;
    }
    var X = inputObj.offset().left;
    var Y = inputObj.offset().top;
    Y += inputObj.height();
    Y += 80;

    var clientHeight = window.document.body.clientHeight;
    var availHeight = screen.availHeight;
    var height = clientHeight;
    if (clientHeight < availHeight) {
        height = availHeight;
    }
    Y = Y /height;
    console.log('jsparam-type:'+type+" y:"+Y);
    this.sendInteraction("showKDSKeyBoard",[type,Y]);
},

    showSystemKeyboard(){
        this.sendInteraction("showSystemKeyboard");
    },

    switchNewKeyboard(id,handleKeyBoardClick){
        if (keyboardType > 6 || keyboardType < 0 ) {
            keyboardType = 0;
        }
        showKDSKeyboard(id,keyboardType,handleKeyBoardClick);
    },

    hideKDSKeyboard(){
        this.sendInteraction("hideKDSKeyboard");
    },

    sendInteraction(funName,params){
        console.log('调用原生方法='+funName +" 参数 = "+params);
        KDS_Native[funName].apply(KDS_Native, params);
    },



}
