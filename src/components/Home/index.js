import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogedIn: false}

  onLogin = () => {
    this.setState({isLogedIn: true})
  }

  onLogout = () => {
    this.setState({isLogedIn: false})
  }

  render() {
    const {isLogedIn} = this.state
    let message
    let btn
    if (isLogedIn === true) {
      message = 'Welcome User'
      btn = <Logout onLogout={this.onLogout} />
    } else {
      message = 'Please Login'
      btn = <Login onLogin={this.onLogin} />
    }
    return (
      <div className="home-container">
        <div className="msg-container">
          <Message message={message} />
          {btn}
        </div>
      </div>
    )
  }
}

export default Home
