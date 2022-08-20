import './style.css';

const Header =()=>{
    return(
        <div>
             <nav className='nav'>
    <div class="nav-wrapper">
      <a to='/'>My Blog</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="Home.html">Home</a></li>
        <li><a href="About.html">About</a></li>
        <li><a href="Contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Header;