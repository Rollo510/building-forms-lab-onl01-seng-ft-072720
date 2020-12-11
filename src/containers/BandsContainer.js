import React, { Component } from 'react'
import connect from 'react-redux/lib/connect/connect'
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps'


class BandsContainer extends Component {

  render() {
    return(
      <div>
        BandsContainer
      <ul>
        {this.props.bands}
      </ul>
      </div>
    )
  }
}

export default connect()(BandsContainer)