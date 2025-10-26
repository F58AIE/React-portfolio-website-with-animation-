import { useState } from "react";
import "./header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">
      <button onClick={() => {setShowModal(true);}} className="menu flex">
     <span className="fa-solid fa-bars"></span>
     </button>
      <div/>

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

      <button className="mode flex">
    <span class="fa-regular fa-moon"></span>
    <i class="fa-solid fa-sun"></i>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button className="xbutton" onClick={() => {setShowModal(false);}}>
                <span class="fa-solid fa-xmark"></span>
                </button>
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
