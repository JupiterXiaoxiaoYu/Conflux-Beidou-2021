import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Oracle">
        <h2>Seller</h2>
        {content}
      </div>
    );
  }
}
//=====================


exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        请问您要部署合约吗？
        <br />
        <br />
        <button
          onClick={() => parent.deployBuy()}
        >
        部署</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying, please wait</div>
    );
  }
}

exports.WaitingForAttachers = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        正在等待玩家加入...
        <br /> 请给予他们以下合约信息:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}


//======================================================

exports.getlove = class extends React.Component {
  render() {
    const {time,parent} = this.props;
    const {love} = this.state || {};
    // const {love,career,fortune} = this.state
    return (
      <div>
        玩家选择的时间为：{time}
        <br />
        请预测他在此刻占卜时的爱情运势！
        <br />
        <br />
        爱情：<input
          type='number'
          onChange={(e) => this.setState({love:e.currentTarget.value})}
        /> <button 
        disabled={!love}
        onClick={() => parent.setlove(this.state.love)}>确认打分</button>
        <br />
      </div>
    );
  }
}


exports.getcarrer = class extends React.Component {
  render() {
    const {time,parent} = this.props;
    const {carrer} = this.state || {};
    // const {carrergetcarrer,carrergetcarrer,carrergetcarrer} = this.state
    return (
      <div>
        玩家选择的时间为：{time}
        <br />
        请预测他在此刻占卜时的事业运势！
        <br />
        <br />
        事业：<input
          type='number'
          onChange={(e) => this.setState({carrer:e.currentTarget.value})}
        /> <button 
        disabled={!carrer}
        onClick={() => parent.setcarrer(this.state.carrer)}>确认打分</button>
        <br />
      </div>
    );
  }
}


exports.getfortune = class extends React.Component {
    render() {
      const {time,parent} = this.props;
      const {fortune} = this.state || {};
      // const {fortune,fortune,fortune} = this.state
      return (
        <div>
          玩家选择的时间为：{time}
          <br />
          请预测他在此刻占卜时的财富运势！
          <br />
          <br />
          财富：<input
            type='number'
            onChange={(e) => this.setState({fortune:e.currentTarget.value})}
          /> <button 
          disabled={!fortune}
          onClick={() => parent.setfortune(this.state.fortune)}>确认打分</button>
          <br />
        </div>
      );
    }
  }

exports.getTimeOracle = class extends React.Component {
  render() {
    const {time} = this.props;
    return (
      <div>
        玩家选择的时间为：{time}
        <br />
      </div>
    );
  }
}













export default exports;