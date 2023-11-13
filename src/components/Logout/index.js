import './index.css'

const Logout = props => {
  const {onLogout} = props
  return (
    <button className="button" type="button" onClick={onLogout}>
      Logout
    </button>
  )
}
export default Logout
