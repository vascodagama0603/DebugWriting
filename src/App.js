import React, { Component } from 'react'
import './css/App.css'
import TodoList from './TodoList'
import Sidebar from'./SideBar'
import AxiosTest from './AxiosTest'
//import SortableTEST from './SortableTEST'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        {/*<SortableTEST/>*/}
        <Sidebar/>
      {/*  <Mainbar/> */}
      </div>
    )
  }
}
export default App