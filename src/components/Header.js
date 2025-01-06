import Logo from "../assets/nim.jpg"

export const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
      <a href="/">Home</a>
    </div>
  )
}
