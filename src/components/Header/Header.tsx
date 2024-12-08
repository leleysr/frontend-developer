import hamburguerIcon from "../../assets/hamburguer-icon.svg";
import logo from "../../assets/logo.svg";
import minicartIcon from "../../assets/minicart-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";

export function Header() {
  const { cart } = useCart();

  return (
    <header className={styles["header"]}>
      <div className={styles["header-wrapper"]}>
        <button className={styles["header-hamburguer-trigger"]}>
          <img
            className={styles["header-hamburguer-image"]}
            src={hamburguerIcon}
            alt=""
          />
        </button>

        <a className={styles["header-logo-link"]} href="">
          <img
            className={styles["header-logo"]}
            src={logo}
            width={181}
            height={41}
            alt="Logo"
          />
        </a>

        <div className={styles["header-search-bar-wrapper"]}>
          <input
            className={styles["header-search-bar"]}
            type="text"
            placeholder="O que está procurando?"
          />
        </div>

        <div className={styles["header-user-actions-wrapper"]}>
          <div className={styles["header-profile-wrapper"]}>
            <a className={styles["header-profile-link"]}>
              <img
                className={styles["header-profile-image"]}
                src={profileIcon}
                alt="User icon"
              />
              <p className={styles["header-profile-label"]}>Minha Conta</p>
            </a>
          </div>

          <div className={styles["header-minicart-wrapper"]}>
            <img
              className={styles["header-minicart-image"]}
              src={minicartIcon}
              alt="Minicart icon"
            />
            <p className={styles["header-minicart-quantity"]}>
              {cart?.length ?? 0}
            </p>
          </div>
        </div>
      </div>

      <div className={styles["header-search-bar-mobile-row"]}>
        <div className={styles["header-search-bar-wrapper"]}>
          <input
            className={styles["header-search-bar"]}
            type="text"
            placeholder="O que está procurando?"
          />
        </div>
      </div>
    </header>
  );
}
