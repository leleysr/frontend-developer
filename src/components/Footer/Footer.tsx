import footerLogo from "../../assets/footer-logo.svg";
import emailIcon from "../../assets/mail-icon.svg";
import contactUs from "../../assets/talk-to-us-icon.svg";
import { Newsletter } from "../Newsletter/Newsletter";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-newsletter-wrapper"]}>
        <Newsletter></Newsletter>
      </div>

      <div className={styles["footer-links-wrapper"]}>
        <div className={styles["footer-links-contact-wrapper"]}>
          <div className={styles["footer-links-contact-email"]}>
            <a href="" className={styles["footer-links-contact-email-link"]}>
              <img
                className={styles["footer-links-contact-email-icon"]}
                src={emailIcon}
                alt="Email icon"
                loading="lazy"
              />
              <p className={styles["footer-links-contact-email-label"]}>
                Entre em contato
              </p>
            </a>
          </div>

          <div className={styles["footer-links-contact-call-us"]}>
            <a href="" className={styles["footer-links-contact-call-us-link"]}>
              <img
                className={styles["footer-links-contact-call-us-icon"]}
                src={contactUs}
                alt="Fale conosco item"
                loading="lazy"
              />
              <p className={styles["footer-links-contact-call-us-label"]}>
                Fale com o nosso consultor online
              </p>
            </a>
          </div>
        </div>

        <div className={styles["footer-address-container"]}>
          <div className={styles["footer-address-wrapper"]}>
            <h3 className={styles["footer-address-title"]}>Localização</h3>
            <p className={styles["footer-address"]}>
              Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP
            </p>
            <a
              className={styles["footer-address-email"]}
              href="mailto:brasil@corebiz.ag"
            >
              brasil@corebiz.ag
            </a>
            <a
              className={styles["footer-address-telephone"]}
              href="tel:+551130901039"
            >
              +55 11 3090 1039
            </a>
          </div>
        </div>

        <div className={styles["footer-created-by-wrapper"]}>
          <p className={styles["footer-created-by-label"]}>Created by</p>
          <img
            className={styles["footer-created-by-image"]}
            src={footerLogo}
            alt="logo icon footer"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}
