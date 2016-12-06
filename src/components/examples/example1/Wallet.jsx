/*
  가장 얇은 지갑 만들기.

  Question.
    1만원, 7, 11만원, 17만원권 지폐가 있다. 원하는 액수를 입력하면, 가장 얇은
    지갑을 만들 수 있도록, 지폐의 갯수를 최소화 하여 보여주는 프로그램을 작성하시오.

  Example.
    입력값이 150000 인 경우 가장 좋은 구성은 7만원권 2장, 1만원권 1장으로 총 3장이다.

  I/O.
    In: 프로그램의 첫번째 인자로 숫자를 받는다.
      예) 입력값에 오류는 없다고 가정한다. 즉 "135000원" 같이 구성 불가능한 입력값
        은 존재하지 않는다. 별도로 오류처리할 필요가 없음.
    Out:
      예) 1만원권 X장, 7만원권 X장, 11만원권 X장, 17만원권 X장

*/
import React, { PropTypes } from 'react'

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value     : 0,
      bills     : [17, 11, 6, 1],
      text      : null
    }
  }

  handleChangeInputValue(event) {
    this.setState({
      value : parseInt(event.target.value)
    });
  }

  handleCalculateBills() {
    let etc = this.state.value;
    let texts = [];
    this.state.bills.forEach((item, i)=>{
      texts.push(item + '만원 ' + Math.floor(etc/(item*10000)) + '장');
      etc = etc % (item*10000);
    });
    this.setState({
      text : texts.join(', ')
    });
  }

  render () {
    return (
      <div>
        <input onChange={this.handleChangeInputValue.bind(this)}></input>
        <button onClick={this.handleCalculateBills.bind(this)}>Click me</button>
        <br/>
        <h1>{this.state.text !== null && this.state.text !== '' ? this.state.text : '값을 입력해주세요'}</h1>
      </div>
    );
  }
}

export default Wallet;
