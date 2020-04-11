import React, { PureComponent } from 'react'
import Stars from './stars'

class StarRow extends PureComponent {
  render() {
    const { record } = this.props
    const { rating } = record
    return <Stars rating={rating} />
  }
}

export default StarRow
