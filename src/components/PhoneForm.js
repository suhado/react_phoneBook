import React, { Component } from 'react';
// 컴포넌트 만들기
// state 정의 - class field 문법
class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  // 메소드 작성
  handleChange = (e) => {
    this.setState({
      // key 부분에 [] - Computed property names 문법
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name:'',
      phone:''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          //input의 name속성 - 각input을 구분 할 수 있어짐
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;