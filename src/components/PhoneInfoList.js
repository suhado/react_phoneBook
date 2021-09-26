import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log('render PhoneInfoList');
    // data 배열을 가져와서
    const { data, onRemove, onUpdate } = this.props;
    // map을 통하여 JSX로 변환하기
    const list = data.map(
      info => (
      <PhoneInfo 
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}
export default PhoneInfoList;