import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="header-logo" onClick={closeMenu}>
          Rento
        </a>

        {/* Desktop Navigation */}
        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#team" onClick={closeMenu}>
            Our Team
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#car" onClick={closeMenu}>
            Cars
          </a>

          <a href="#brand" onClick={closeMenu}>
            Brands
          </a>

          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
        </nav>

        {/* Right Side */}
        <div className="header-actions">
          <a href="#login" className="login-link">
            Login
          </a>

          <a href="#booking" className="book-now-btn">
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
