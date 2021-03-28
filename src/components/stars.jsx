import React, { PureComponent } from 'react'
import { MAX_STARS } from '../constants/stars'

class Stars extends PureComponent {
  render() {
    const { rating } = this.props
    let whiteStars = MAX_STARS
    let blackStars = 0
    if (rating) {
      whiteStars = MAX_STARS - Number(rating)
      blackStars = rating > MAX_STARS ? MAX_STARS : rating
    }
    if (whiteStars < 0) {
      whiteStars = 0
    }
    return rating ? (
      <span>
        {[...Array(blackStars)].map((_x, index) => (
          <span key={index}>★</span>
        ))}
        {[...Array(whiteStars)].map((_x, index) => (
          <span key={index}>☆</span>
        ))}
      </span>
    ) : (
      ''
    )
  }
}

export default Stars
