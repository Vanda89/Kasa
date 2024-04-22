import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src="../assets/Kasa_logo.png" alt="Kasa" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header