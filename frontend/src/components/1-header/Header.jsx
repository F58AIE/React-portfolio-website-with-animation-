import { useState } from "react";
import "./header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">
      <button onClick={() => {setShowModal(true);}} className="menu">
     <span className="fa-solid fa-bars"></span>
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

      <button className="mode">
    <span class="fa-regular fa-moon"></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button class="fa-solid fa-xmark" onClick={() => {setShowModal(false);}}/>
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
