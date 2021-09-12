import React from 'react';
import PlayerViews from './PlayerViews';

const exports = { ...PlayerViews };

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="FirBuyer">
        <h2>EdChain粮油有限公司</h2>
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
         请问您确定要购买此商品吗? 请粘贴商品合约信息:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >确认购买</button>
      </div>
    );
  }
}


exports.Buyed = class extends React.Component {
  render() {
    const {USDT} = this.props;
    return (
      <div>
        购买成功！you have consumed {USDT} USDT for buying Co-points
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        正在购买，请稍后
      </div>
    );
  }
}

exports.getUSDTAmount = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {USDT} = this.state || {};
    // const {USDTgetUSDT,USDTgetUSDT,USDTgetUSDT} = this.state
    return (
      <div>
        <br />
        <br />
        <br />
        您要购买的共识积分数量<input
          type='number'
          onChange={(e) => this.setState({USDT:e.currentTarget.value})}
        /> <button 
        disabled={!USDT}
        onClick={() => parent.setUSDT(this.state.USDT)}>确认购买</button>
        <br />
      </div>
    );
  }
}






export default exports;