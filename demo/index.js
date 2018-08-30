
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var DemoArray = [{"example":<Demo1 />,"title":" 基础拖拽","code":"\r\n/**\r\n *\r\n * @title 基础拖拽\r\n * @description 将某个元素设置为可拖拽\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo1 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd onStart={this.onStart} onStop={this.onStop} >\r\n                    <div className=\"demo\">我可随意拖拽</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 将某个元素设置为可拖拽","scss_code":".demo {\r\n    width: 250px;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border: 1px solid rgb(30, 136, 229);\r\n    color: #000000;\r\n    text-align: center;\r\n    cursor: all-scroll;\r\n}"},{"example":<Demo2 />,"title":" 单个元素沿x轴y轴拖拽","code":"\r\n/**\r\n *\r\n * @title 单个元素沿x轴y轴拖拽\r\n * @description 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo2 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd axis=\"x\" onStart={this.onStart} onStop={this.onStop}>\r\n                    <div className=\"demo\">我只可延X轴拖拽</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽","scss_code":".demo {\r\n  width: 250px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  color: #000000;\r\n  text-align: center;\r\n  cursor: all-scroll;\r\n}"},{"example":<Demo3 />,"title":" 设置元素不可拖拽","code":"\r\n/**\r\n *\r\n * @title 设置元素不可拖拽\r\n * @description 设置 onStart 的返回值为false，则不可以拖拽\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo3 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n        return false;\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd onStart={this.onStart}  onStop={this.onStop}>\r\n                    <div className=\"demo\">我不可以拖拽</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n","desc":" 设置 onStart 的返回值为false，则不可以拖拽","scss_code":".demo {\r\n  width: 250px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  color: #000000;\r\n  text-align: center;\r\n  cursor: all-scroll;\r\n}"},{"example":<Demo4 />,"title":" 单个元素拖拽把手","code":"/**\r\n *\r\n * @title 单个元素拖拽把手\r\n * @description 设置 handle，值为选择器，例如 '.handle'\r\n *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo4 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-4\">\r\n                <div>\r\n                    <Dnd handle=\".handle\" onStart={this.onStart} onStop={this.onStop}>\r\n                        <div className=\"demo4 \">\r\n                            <div className=\"handle\">我是把手</div>\r\n                            <div className=\"drag-context\">需要拖拽把手</div>\r\n                        </div>\r\n                    </Dnd>\r\n                </div>\r\n                <div>\r\n                    <Dnd cancel=\".handle\" >\r\n                        <div className=\"demo4 \">\r\n                            <div className=\"handle\">我是把手</div>\r\n                            <div className=\"drag-context\">不要拖拽把手</div>\r\n                        </div>\r\n                    </Dnd>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 设置 handle，值为选择器，例如 '.handle'","scss_code":"\r\n.demo4 {\r\n  width: 250px;\r\n  line-height: 50px;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  color: #000000;\r\n  text-align: center;\r\n  cursor: all-scroll;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  height: 80px;\r\n}\r\n\r\n.demo4 .handle {\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background: lightgrey;\r\n  margin: 10px;\r\n}\r\n\r\n.demo4 .drag-context {\r\n  height: 50px;\r\n  line-height: 50px;\r\n}\r\n\r\n.demo-4>div {\r\n  display: inline-block;\r\n  padding: 10px;\r\n}"},{"example":<Demo5 />,"title":" 每次拖拽移动距离","code":"\r\n/**\r\n *\r\n * @title 每次拖拽移动距离\r\n * @description 设置 grid={[x,y]}\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo5 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>\r\n                    <div className=\"demo\">我每次拖拽可移动25px</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 设置 grid={[x,y]}","scss_code":".demo {\r\n  width: 250px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  color: #000000;\r\n  text-align: center;\r\n  cursor: all-scroll;\r\n}"},{"example":<Demo6 />,"title":" 元素拖拽范围","code":"\r\n/**\r\n *\r\n * @title 元素拖拽范围\r\n * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo6 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>\r\n                    <div className=\"demo\">我只能再上下左右50px内移动</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}","scss_code":".demo {\r\n  width: 250px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  color: #000000;\r\n  text-align: center;\r\n  cursor: all-scroll;\r\n}"},{"example":<Demo7 />,"title":" 在指定容器中拖拽","code":"\r\n/**\r\n *\r\n * @title 在指定容器中拖拽\r\n * @description 设置只可以在指定容器中移动\r\n * bounds的也可以设置为选择器,bounds=\".demo8-parent\"意为在class=demo8-parent的容器中移动\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo7 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <div className=\"demo7-parent\">\r\n                    <Dnd bounds=\".demo7-parent\" onStart={this.onStart} onStop={this.onStop}>\r\n                        <div className=\"demo\">我只能在父级元素中移动</div>\r\n                    </Dnd>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 设置只可以在指定容器中移动","scss_code":".demo {\r\n  width: 250px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  border: 1px solid rgb(30, 136, 229);\r\n  color: #000000;\r\n  text-align: center;\r\n  cursor: all-scroll;\r\n}\r\n\r\n.demo7-parent {\r\n  width: 300px;\r\n  height: 200px;\r\n  background: lightgrey;\r\n  position: relative;\r\n}"},{"example":<Demo8 />,"title":" 数据集合拖拽列表排序","code":"/**\r\n *\r\n * @title 数据集合拖拽列表排序\r\n * @description 增加list 可以为 [1,2,3]数组，\r\n *              也可以为 [{name:1},{name:2}]，后者需要有name属性，便于显示。\r\n *              也可以为 dom集合，见后边示例\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo8 extends Component {\r\n    \r\n    onDragStart=(result,list)=>{\r\n        console.log('开始');\r\n    }\r\n    onDragEnd=(result,list)=>{\r\n        console.log('结束');\r\n    }\r\n    render() {\r\n        let list1=['第一','第二','第三','第四','第五'];\r\n        return (\r\n            <Dnd  list={list1} onStart={this.onDragStart} onStop={this.onDragEnd}/>\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 增加list 可以为 [1,2,3]数组，"},{"example":<Demo9 />,"title":" DOM集合拖拽列表排序","code":"\r\n/**\r\n *\r\n * @title DOM集合拖拽列表排序\r\n * @description list传dom集合\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from \"tinper-bee/lib/Dnd\";\r\n\r\nclass Demo9 extends Component {\r\n\r\n    onDragStart=(result,list)=>{\r\n        console.log('开始');\r\n    }\r\n    onDragEnd=(result,list)=>{\r\n        console.log('结束');\r\n    }\r\n    render() {\r\n        let list=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];\r\n        return (\r\n           <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd} />\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" list传dom集合"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel copyable collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
                {DemoArray.map((child,index) => {

                    return (
                        <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));