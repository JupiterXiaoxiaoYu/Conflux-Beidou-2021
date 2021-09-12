import React from 'react';
import '../index.css';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
             <h1>EdCredit</h1> 
          {content}
        </header>
      </div>
    );
  }
}

//常驻祈愿、相遇之缘、纠缠之缘


exports.ConnectAccount = class extends React.Component {//连接账户
  render() {
    return (
      <div>
        正在连接您的账户，
        如果等待时间过长，请重试
      </div>
    )
  }
}


exports.FundAccount = class extends React.Component { //查看余额，请求水管
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
}   
  render() {
    var {parent,data} = this.props;
    if(!data){
      data = []
    }
    console.log(data)
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectSeller()}
          >我是卖家</button>
          <br /> deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectBuyer(data.id)}
          >我是买家</button>
          <br /> Attach to the Deployer's contract.
        </p>
      </div>
    );
  }
}




export default exports;
