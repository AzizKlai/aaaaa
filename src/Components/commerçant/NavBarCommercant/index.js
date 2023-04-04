import { AiFillShopping  } from "react-icons/ai";
import { BiStats  } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import styles from "./style.module.css";
import React from "react";

export default class NavBarCommercant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className={styles.navbaritems1}>
        <h2 className={styles.logo1}>Mr Akkash</h2>
        <div className={styles.menu_icons1} onClick={this.handleClick}>
          <i className={this.state.clicked ? `${styles.fas1} fa-times` : `${styles.fas1} fa-bars`}></i>
        </div>
        <ul className={this.state.clicked ? `${styles.nav_menu1} ${styles.active1}` : `${styles.nav_menu1}`}>
          

          
          

          <li>
            <a href="commandes" className={styles.link1}>
             commande
            </a>
          </li>
          <li></li>
        <li>
            <a href="home" className={styles.link1}>
             HomePg
            </a>
          </li>
          <li></li>
          <li>
            <a href="profile" className={styles.link1}>
            Profil
            </a>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <button className="btn btn-dark">log out</button>
          </li>
        </ul>
      </div>
    );
  }
}
