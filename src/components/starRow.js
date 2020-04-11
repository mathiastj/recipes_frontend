import React, {Component} from 'react';
import Stars from './stars'

class StarRow extends Component {
  render() {
    const { rating } = this.props.record
    return (
        <Stars rating={rating}/>
    )
  }
}

export default StarRow;