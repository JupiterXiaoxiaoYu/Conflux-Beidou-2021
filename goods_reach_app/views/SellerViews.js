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
          onClick={() => parent.deploy()}
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
        正在等待买家购买...
        <br /> 请给予他们以下商品合约信息:
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



exports.WaitingForAttacher = class extends React.Component {
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
}








export default exports;