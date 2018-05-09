import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./demo.css";
import {MyInput} from './zqdm.jsx';
import KmcEnv from '../js/kmc-env.js';
import KmcInteraction from '../js/kmc-interaction.js';


class KeyBoardDemoUtil extends Component{
    constructor(props){
        super(props);
        this.switchClick = this.switchClick.bind(this);

    }
    componentDidMount(){
        var clientType = KmcEnv.platform.isPhone;
        if (clientType) {
            console.log("client is phone")
        }else{
            console.log('client is browser')
        }
    }

    switchClick(){
        debugger;
        console.log("switchclick");
        this.refs.newkeyboard.switchKeyBoard();
    }

   /* showSystemKeyboard(){
        console.log('click req systemboard');
        KmcInteraction.showSystemKeyboard();
    }*/
    hideKDSKeyboard(){
        KmcInteraction.hideKDSKeyboard();
    }



    render() {
        return <div>
      {/*  <ZQDM ref = 'systemboard' handleClick = {this.showSystemKeyboard}/>*/}
      <input onFocus = {this.hideKDSKeyboard} />
        <MyInput ref = "newkeyboard" className = "newkey"style = {{width:"60%", display:"inline-block"}}/>
        <button className = "switchBtn" onClick = {this.switchClick} >切换键盘</button>
        </div>;
    }
};

ReactDOM.render(<KeyBoardDemoUtil />,document.getElementById('inputdemo'));

