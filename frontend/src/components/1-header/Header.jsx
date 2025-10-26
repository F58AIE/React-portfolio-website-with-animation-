import { useState } from "react";
import "./header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">
      <button onClick={() => {setShowModal(true);}}className="menu">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button>Light mode</button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button onClick={() => {setShowModal(false);}}><i class="fa-solid fa-xmark"></i></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
