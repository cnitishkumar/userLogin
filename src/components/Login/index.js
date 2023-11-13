import './index.css'

const Login = props => {
  const {onLogin} = props

  return (
    <button className="button" type="button" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
