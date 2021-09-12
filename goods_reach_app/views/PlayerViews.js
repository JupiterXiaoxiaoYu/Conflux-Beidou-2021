import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.getTime = class extends React.Component {
  render() {
    const {time} = this.props;
    return (
      <div>
        当前时间为：{time}, 您的NFT id已生成，请等待占卜师为您预测
      </div>
    );
  }
}

exports.Waiting = class extends React.Component {
  render() {
    return (
      <div>
        正在等待其他参与者。。。
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    return (
      <div>
        再见！谢谢你来玩，啊哈！
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        超时啦！ (有人摸鱼太久)
      </div>
    );
  }
}



export default exports;
