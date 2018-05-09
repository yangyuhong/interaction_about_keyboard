import React,{Component} from 'react';
import "./input.less";
import KmcEnv from "../js/kmc-env.js";
import KmcInteraction from '../js/kmc-interaction.js';



class ZQDM extends Component{
    constructor(props){
        super(props);
        this.props = {
            placeholder:"",
            handleClick:function(){},
            onInputFinish:function(){}, //输入结束的回调函数
            style:{}
        };
        this.state = {
            keyboardType : "0",
            zqdm: "",
            inputBoxid : "zqdm-input-" + Math.random().toString(36).substr(2,5),  // 为input输入框使用唯一的id标识
        };
        window.setLocalData('keyboardType',this.state.keyboardType);
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyboardClick = this.handleKeyboardClick.bind(this);

    }
    switchKeyBoard(){
        var lastestKeyboardType = parseInt(window.getLocalData('keyboardType'));
        console.log('lastestKeyboardType:'+lastestKeyboardType);
        if (lastestKeyboardType == null) {
            lastestKeyboardType = 1;
        }else{
            lastestKeyboardType = ++lastestKeyboardType ;
            console.log("lastestKeyboardType ++:"+lastestKeyboardType);
        }
            this.setState({keyboardType: lastestKeyboardType.toString()});
        window.setLocalData('keyboardType',lastestKeyboardType.toString());
        this.handleInputClick();
    }

    handleInputClick(){
        if (this.props.handleClick) {
            console.log('click handle click')
            this.props.handleClick();
            return;
        }
        if(KmcEnv.platform.isPhone && !this.props.isWxVersion){
            console.log('client click input ');
            console.log(this.handleKeyboardClick)
            KmcInteraction.showKDSKeyboard(this.state.inputBoxid, this.state.keyboardType, this.handleKeyboardClick);
        }else{
            // TODO: PC 端需要绑定 onChange 事件
            console.log("PC端",this.refs.zqdm);
        }
    }

    handleChange(){

    }

    handleKeyboardClick(key){
        console.log("你点击了键盘上的"+key );
        var input  = this.state.zqdm;
        if(key == "del"){
            if(input.length > 0){
                input = input.substring(0,input.length - 1);
            }
        }else if(key == "清空"){
            input = "";
        }else{
            var input = input + key;
        }
        this.setState({zqdm:input});

    }

    componentDidMount(){

    }



    render(){
        return <input ref="input" style={this.props.style} id={this.state.inputBoxid} placeholder = {this.props.placeholder}
                onClick={this.handleInputClick} value={this.state.zqdm}
                readOnly={KmcEnv.platform.isPhone ? 'readOnly':null} onChange = {this.handleChange}
        />
    }

}

export {ZQDM as MyInput};
