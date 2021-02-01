import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo90 = require("./demolist/Demo90");var Demo91 = require("./demolist/Demo91");var Demo92 = require("./demolist/Demo92");var Demo93 = require("./demolist/Demo93");var DemoArray = [{"example":<Demo1 />,"title":" 基础拖拽","code":"\r\n/**\r\n *\r\n * @title 基础拖拽\r\n * @description 将某个元素设置为可拖拽\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\n\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo1 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd onStart={this.onStart} onStop={this.onStop}>\r\n                    <div className=\"demo\">我可随意拖拽</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo1;","desc":" 将某个元素设置为可拖拽","scss_code":".demo {\r\n    width:167px;\r\n    height:32px;\r\n    background:rgba(247,249,251,1);\r\n    border-radius:3px;\r\n    border:1px solid rgba(165,173,186,1);\r\n    line-height: 32px;\r\n    font-size: 12px;\r\n    color: #212121;\r\n    text-align: center;\r\n    cursor: grab;\r\n    &:hover{\r\n      background:rgba(235,236,240,1);\r\n      border-radius:3px;\r\n    }\r\n}\r\n/*拖动状态*/\r\n.react-draggable-transparent-selection{\r\n    .demo{\r\n        box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\r\n        opacity:0.8;\r\n        cursor: grabbing;\r\n    }\r\n}"},{"example":<Demo2 />,"title":" 单个元素沿x轴y轴拖拽","code":"\r\n/**\r\n *\r\n * @title 单个元素沿x轴y轴拖拽\r\n * @description 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\n\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo2 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd axis=\"x\" onStart={this.onStart} onStop={this.onStop}>\r\n                    <div className=\"demo\">我只可延X轴拖拽</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo2;","desc":" 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽","scss_code":".demo {\r\n  width:167px;\r\n  height:32px;\r\n  background:rgba(247,249,251,1);\r\n  border-radius:3px;\r\n  border:1px solid rgba(165,173,186,1);\r\n  line-height: 32px;\r\n  font-size: 12px;\r\n  color: #212121;\r\n  text-align: center;\r\n  cursor: grab;\r\n  &:hover{\r\n    background:rgba(235,236,240,1);\r\n    border-radius:3px;\r\n  }\r\n}\r\n/*拖动状态*/\r\n.react-draggable-transparent-selection{\r\n  .demo{\r\n      box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\r\n      opacity:0.8;\r\n      cursor: grabbing;\r\n  }\r\n}"},{"example":<Demo3 />,"title":" 设置元素不可拖拽","code":"\r\n/**\r\n *\r\n * @title 设置元素不可拖拽\r\n * @description 设置 onStart 的返回值为false，则不可以拖拽\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\n\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo3 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n        return false;\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div className=\"demo-3\">\r\n                <Dnd onStart={this.onStart}  onStop={this.onStop}>\r\n                    <div className=\"demo3 demo\">我不可以拖拽</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\nexport default Demo3;","desc":" 设置 onStart 的返回值为false，则不可以拖拽","scss_code":".demo-3{\r\n  .demo3:hover{\r\n    background:rgba(247,249,251,1);\r\n    cursor: not-allowed;\r\n  }\r\n}"},{"example":<Demo4 />,"title":" 单个元素拖拽把手","code":"/**\r\n *\r\n * @title 单个元素拖拽把手\r\n * @description 设置 handle，值为选择器，例如 '.handle'\r\n *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Icon } from 'tinper-bee';\r\n\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo4 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-4\">\r\n                <div>\r\n                    <Dnd handle=\".handle\" onStart={this.onStart} onStop={this.onStop}>\r\n                        <div className=\"demo4 demo\">\r\n                            需要拖拽把手\r\n                            <div className=\"handle\"><Icon type=\"uf-move\"></Icon></div>\r\n                        </div>\r\n                    </Dnd>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo4;","desc":" 设置 handle，值为选择器，例如 '.handle'","scss_code":"\r\n.demo-4 .demo4 {\r\n  position: relative;\r\n  cursor: default;\r\n  &:hover{\r\n    background:rgba(247,249,251,1);\r\n    cursor: default;\r\n  }\r\n}\r\n\r\n.demo4 .handle {\r\n  position: absolute;\r\n  right: -1px;\r\n  top: -1px;\r\n  height: 32px;\r\n  line-height: 30px;\r\n  background:rgba(223,225,230,1);\r\n  border-radius:0px 3px 3px 0px;\r\n  border:1px solid rgba(165,173,186,1);\r\n  cursor: grab;\r\n  &:hover{\r\n    background:rgba(179,186,197,1);\r\n  }\r\n}\r\n/*拖动状态*/\r\n.react-draggable-transparent-selection{\r\n  .demo4 .handle{\r\n    background:rgba(179,186,197,1);\r\n    cursor: grabbing;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 每次拖拽移动距离","code":"\r\n/**\r\n *\r\n * @title 每次拖拽移动距离\r\n * @description 设置 grid={[x,y]}\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\n\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo5 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>\r\n                    <div className=\"demo\">我每次拖拽可移动25px</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo5;","desc":" 设置 grid={[x,y]}","scss_code":".demo {\r\n  width:167px;\r\n  height:32px;\r\n  background:rgba(247,249,251,1);\r\n  border-radius:3px;\r\n  border:1px solid rgba(165,173,186,1);\r\n  line-height: 32px;\r\n  font-size: 12px;\r\n  color: #212121;\r\n  text-align: center;\r\n  cursor: grab;\r\n  &:hover{\r\n    background:rgba(235,236,240,1);\r\n    border-radius:3px;\r\n  }\r\n}\r\n/*拖动状态*/\r\n.react-draggable-transparent-selection{\r\n  .demo{\r\n      box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\r\n      opacity:0.8;\r\n      cursor: grabbing;\r\n  }\r\n}"},{"example":<Demo6 />,"title":" 元素拖拽范围","code":"\r\n/**\r\n *\r\n * @title 元素拖拽范围\r\n * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo6 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div className=\"demo6\">\r\n                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>\r\n                    <div className=\"demo\">我只能再上下左右50px内移动</div>\r\n                </Dnd>\r\n            </div>\r\n\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo6;","desc":" 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}","scss_code":".demo {\r\n  width:167px;\r\n  height:32px;\r\n  background:rgba(247,249,251,1);\r\n  border-radius:3px;\r\n  border:1px solid rgba(165,173,186,1);\r\n  line-height: 32px;\r\n  font-size: 12px;\r\n  color: #212121;\r\n  text-align: center;\r\n  cursor: grab;\r\n  &:hover{\r\n    background:rgba(235,236,240,1);\r\n    border-radius:3px;\r\n  }\r\n}\r\n/*拖动状态*/\r\n.react-draggable-transparent-selection{\r\n  .demo{\r\n      box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\r\n      opacity:0.8;\r\n      cursor: grabbing;\r\n  }\r\n}\r\n.demo6{\r\n  height: 100px;\r\n}"},{"example":<Demo7 />,"title":" 在指定容器中拖拽","code":"\r\n/**\r\n *\r\n * @title 在指定容器中拖拽\r\n * @description 设置只可以在指定容器中移动\r\n * bounds的也可以设置为选择器,bounds=\".demo8-parent\"意为在class=demo8-parent的容器中移动\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\n\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo7 extends Component {\r\n\r\n    onStart=()=>{\r\n        console.log('start');\r\n    }\r\n    onStop=()=>{\r\n        console.log('stop');\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <div className=\"demo7-parent\">\r\n                    <Dnd bounds=\".demo7-parent\" onStart={this.onStart} onStop={this.onStop}>\r\n                        <div className=\"demo\">我只能在父级元素中移动</div>\r\n                    </Dnd>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo7;","desc":" 设置只可以在指定容器中移动","scss_code":".demo {\r\n  width:167px;\r\n  height:32px;\r\n  background:rgba(247,249,251,1);\r\n  border-radius:3px;\r\n  border:1px solid rgba(165,173,186,1);\r\n  line-height: 32px;\r\n  font-size: 12px;\r\n  color: #212121;\r\n  text-align: center;\r\n  cursor: grab;\r\n  &:hover{\r\n    background:rgba(235,236,240,1);\r\n    border-radius:3px;\r\n  }\r\n}\r\n/*拖动状态*/\r\n.react-draggable-transparent-selection{\r\n  .demo{\r\n    box-shadow:0px 2px 4px 0px rgba(31,37,52,0.3);\r\n    opacity:0.8;\r\n    cursor: grabbing;\r\n  }\r\n}\r\n\r\n.demo7-parent {\r\n  width: 300px;\r\n  height: 200px;\r\n  background: rgba(247,249,251,1);\r\n  border: 1px solid rgba(235,236,240,1);\r\n  position: relative;\r\n}"},{"example":<Demo8 />,"title":" 数据集合拖拽列表排序","code":"/**\r\n *\r\n * @title 数据集合拖拽列表排序\r\n * @description 增加list 可以为 [1,2,3]数组，\r\n *              也可以为 [{},{}...]，需要配置 showKey 。\r\n *              也可以为 dom集合，见后边示例\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo8 extends Component {\r\n    \r\n    onDragStart=(result,list)=>{\r\n        console.log('开始');\r\n    }\r\n    onDragEnd=(result,list)=>{   \r\n        console.log('结束');\r\n    }\r\n    onDragUpdate=(result)=>{\r\n        console.log('update')\r\n    }\r\n    render() {\r\n        let list=[\r\n            {\r\n                name:'第一',\r\n                code:'a'\r\n            },\r\n            {\r\n                name:'第二',\r\n                code:'b'\r\n            },\r\n            {\r\n                name:'第三',\r\n                code:'c'\r\n            },\r\n            {\r\n                name:'第四',\r\n                code:'d'\r\n            },\r\n            {\r\n                name:'第五',\r\n                code:'e'\r\n            },\r\n        ];\r\n        return (\r\n            <Dnd showKey='name' list={list} onDragUpdate={this.onDragUpdate} onStart={this.onDragStart} onStop={this.onDragEnd}/>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo8;","desc":" 增加list 可以为 [1,2,3]数组，","scss_code":""},{"example":<Demo9 />,"title":" DOM集合拖拽列表排序","code":"\r\n/**\r\n *\r\n * @title DOM集合拖拽列表排序\r\n * @description list传dom集合\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/index';\r\n\r\nclass Demo9 extends Component {\r\n\r\n    onDragStart=(result,list)=>{\r\n        console.log('开始');\r\n    }\r\n    onDragEnd=(result,list)=>{\r\n        console.log('结束');\r\n    }\r\n    render() {\r\n        let list=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];\r\n        return (\r\n           <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd} />\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo9","desc":" list传dom集合"},{"example":<Demo90 />,"title":" 横向拖拽列表排序","code":"\r\n/**\r\n *\r\n * @title 横向拖拽列表排序\r\n * @description type='horizontal'\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/Dnd';\r\n\r\nclass Demo90 extends Component {\r\n\r\n    render() {\r\n        let list=['第一','第二','第三','第四','第五'];\r\n        return (\r\n           <Dnd list={list} type='horizontal'  />\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo90","desc":" type='horizontal'"},{"example":<Demo91 />,"title":" 两列纵向拖拽","code":"\r\n/**\r\n *\r\n * @title 两列纵向拖拽\r\n * @description 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/Dnd';\r\n\r\nclass Demo90 extends Component {\r\n\r\n    render() {\r\n        let list1=['第一','第二','第三','第四','第五'];\r\n        let list2=['1','2','3','4','5'];\r\n        return (\r\n           <Dnd className='demo91' list={list1} otherList={list2} type='betweenVertical'  />\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo90","desc":" 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开","scss_code":".u-drop{\r\n    overflow: scroll;\r\n}\r\n.u-drag-between{\r\n    height: 300px;\r\n}"},{"example":<Demo92 />,"title":" 两列横向拖拽","code":"\r\n/**\r\n *\r\n * @title 两列横向拖拽\r\n * @description 设置 type='betweenVertical'\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/Dnd';\r\n\r\nclass Demo90 extends Component {\r\n    onDragStart=(result,list)=>{\r\n        console.log('开始');\r\n    }\r\n    onDragEnd=(result,listObj)=>{\r\n        console.log('结束');\r\n        console.log(listObj)\r\n    }\r\n    render() {\r\n        let list1=['第一','第二','第三','第四','第五'];\r\n        let list2=['1','2','3','4','5'];\r\n        return (\r\n           <Dnd list={list1} otherList={list2} type='betweenHorizontal' onStart={this.onDragStart} onStop={this.onDragEnd} />\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo90","desc":" 设置 type='betweenVertical'","scss_code":".u-drop{\r\n    overflow: scroll;\r\n}\r\n.u-drag-between-horizontal{\r\n    height: 200px;\r\n}"},{"example":<Demo93 />,"title":" 网格排序","code":"\r\n/**\r\n *\r\n * @title 网格排序\r\n * @description \r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Dnd from 'bee-dnd/Dnd';\r\n\r\nconst GridLayout = Dnd.GridLayout;\r\n\r\nclass Demo93 extends Component {\r\n    render() {\r\n        let layout = [\r\n            {i: 'a', x: 0, y: 0, w: 1, h: 2},\r\n            {i: 'b', x: 1, y: 0, w: 3, h: 2},\r\n            {i: 'c', x: 4, y: 0, w: 1, h: 2, static: true},\r\n            {i: 'd', x: 0, y: 1, w: 1, h: 1},\r\n            {i: 'e', x: 2, y: 2, w: 1, h: 2},\r\n            {i: 'f', x: 3, y: 3, w: 1, h: 2}\r\n        ];\r\n        return (\r\n            <GridLayout className=\"layout\" layout={layout} cols={6} rowHeight={30} width={500}>\r\n                <div key=\"a\">a</div>\r\n                <div key=\"b\">b</div>\r\n                <div key=\"c\">static</div>\r\n                <div key=\"d\">d</div>\r\n                <div key=\"e\">e</div>\r\n                <div key=\"f\">f</div>\r\n            </GridLayout>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo93;","desc":" ","scss_code":".layout{\r\n    background: #f7f9fb;\r\n    border: 1px solid #ebecf0;\r\n    padding: 12px;\r\n    color: #212121;\r\n    div{\r\n        margin: 4px;\r\n        background: white;\r\n        border-radius: 3px;\r\n        border: 1px solid #a5adba;\r\n        padding: 6px 0;\r\n        font-size: 12px;\r\n        text-align: center;\r\n    }\r\n}"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
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
