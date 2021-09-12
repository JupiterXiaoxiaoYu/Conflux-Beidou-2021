import React from 'react';
import PlayerViews from './PlayerViews';
import Photo4 from './4.jpg';

const exports = { ...PlayerViews };

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="FirBuyer">
        <h2>玩家一</h2>
        {content}
      </div>
    );
  }
}


exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
         请问您要加入星空之缘系列合约吗? 请粘贴合约信息:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attachBuy(ctcInfoStr)}
        >加入星空之缘星座占卜DAPP</button>
      </div>
    );
  }
}


exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        正在加入，请稍后
      </div>
    );
  }
}



exports.buyNFT = class extends React.Component {

  render() {
    const {parent} = this.props
    return (
      <div>
        <Clock />
        <button
          onClick={() => parent.setTime(new Date().toUTCString())}
        >祈愿</button>
      </div>
    )
  }
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        请选择一个时间祈愿:
        <br />
        <h2>现在的时间是：{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


exports.generate_id = class extends React.Component {

  render() {
    const {id} = this.props;
    return (
      <div>
        ID:{id}的占卜请求已交付预言家，请等待预测
      </div>
    )
  }
}

exports.showNFT = class extends React.Component {

  render() {
    const {parent,owner, id1, love1, career1, fortune1} = this.props;
    return (
      <div>
      这是您的预测结果以及NFT属性
      <br />
      <img src={Photo4} alt="logo" className="imgsize" />
      <br />
      <br />NFT id为：{id1}
      <br />所有人地址为：{owner}
      <br />爱情运势为：{love1}分
      <br />事业运势为：{career1}分
      <br />财富运势为：{fortune1}分
      <br />
      <button
          onClick={() => parent.waiting()}
        >进入社交挖矿并质押NFT</button>
    </div>
    )
  }
}



exports.getPersonalInfo = class extends React.Component {
  render() {
    const {parent} = this.props;
    // const {personalInfo} = this.state.personalInfo || {}
    return (
      <div>
        请输入您的个人信息:
        <br />
        <input type="text"
          className='ContractInfo'
          onChange={(e) => this.setState({personalInfo: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          onClick={() => parent.setPersonalInfo(this.state.personalInfo)}
        >确认</button>
      </div>
    );
  }
}

exports.showPersonalInfo = class extends React.Component {

  render() {
    const {PInfo} = this.props;
    return (
      <div>
        <br /> 相遇初体验：
        <br />
        对方透露的部分个人信息为：{PInfo}
      </div>
    )
  }
}

exports.getWords = class extends React.Component {
  render() {
    const {parent,dialog} = this.props;
    // const {Words} = this.state.Words || {}
    return (
      <div style = {{whiteSpace: 'pre-wrap'}}>
        <p> 聊天记录：
        <br />
        {dialog}
        </p>
        请输入您想说的话:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({Words: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          onClick={() => parent.setWords(this.state.Words)}
        >确认</button>
      </div>
    );
  }
}

exports.getChatInfo = class extends React.Component {
  render() {
    const {parent} = this.props;
    // const {ChatInfo} = this.state.ChatInfo || {}
    return (
      <div>
        恭喜你们！双方满意度均大于或等于8，请输入您的社交媒体信息，以便继续交流:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ChatInfo: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          onClick={() => parent.setChatInfo(this.state.ChatInfo)}
        >确认</button>
      </div>
    );
  }
}


exports.getScore = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {score} = this.state || {};
    return (
      <div>
        玩家一，时间结束，NFT已返还！
        <br />
        请输入您对此次对话的满意度（1-10）：
        <br />
        <br />
        满意度：<input
          type='number'
          onChange={(e) => this.setState({score:e.currentTarget.value})}
        /> <button 
        disabled={!score || score>10 || score<0 }
        onClick={() => parent.setscore(this.state.score)}>确认打分</button>
        <br />
      </div>
    );
  }
}



exports.showChatInfo = class extends React.Component {

  render() {
    const {chatInfo} = this.props;
    return (
      <div>
        对方的社交平台信息为：{chatInfo}
        <br /> 请快速记录
      </div>
    )
  }
}

exports.Viewdialog = class extends React.Component {

  render() {
    // const {dialog} = this.props;
    return (
      <div>
        对话更新中
        <br /> 
         
      </div>
    )
  }
}

exports.showScore = class extends React.Component {

  render() {
    const {score,parent} = this.props;
    return (
      <div>
        这是对方对这次社交的满意程度：{score }
        <br /> 
        您将会获得相应数量的代币
        <br /> 
        <button 
        onClick={() => parent.goodbye()}>离开</button>
      </div>
    )
  }
}


exports.showOwner = class extends React.Component {
  render() {
    const {acc,hash} = this.props;
    return (
      <div>
      收好啦，这是你的NFT哦！
      <br />
      <img src={'4.jpg'} alt="logo1"  />
      <br />所有人地址为：{acc}
      <br />
      NFT识别码为：{hash}
    </div>
    );
  }
}




export default exports;