import React from "react";
import Logo from "/Logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.header_container}>
          <div className={styles.header_content}>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
