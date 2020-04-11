import React, {Component} from 'react';
import { MAX_STARS } from '../constants/stars'

class Stars extends Component {
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
    return (<span>
            {[...Array(blackStars)].map(ele => <span>★</span>
              )}
            {[...Array(whiteStars)].map(ele => <span>☆</span>
              )}
          </span>)
  }
}

export default Stars;