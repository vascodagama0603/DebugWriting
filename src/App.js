import React, { Component } from 'react'
import './css/App.css'
import TodoList from './TodoList'
import Sidebar from'./SideBar'
import AxiosTest from './AxiosTest'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <AxiosTest/>
        <Sidebar/>
      {/*  <Mainbar/> */}
      </div>
    )
  }
}
export default App