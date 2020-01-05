import React, { Component } from 'react'
import axios from 'axios'
class AxiosTest extends Component {
  render() {
    function handleGetLatAndLng(){
      const URL = 'http://localhost:3001/';
      axios
        .get(URL)
    }
    return (
      <div>
        <input
          type="button"
          value="経度・緯度を検索"
          onClick={() => this.handleGetLatAndLng()}
        />
      </div>
    )
  }
}
export default AxiosTest