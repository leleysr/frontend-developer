import styles from "./styles.module.css";

export function Header() {
  return (
    <header>
      <div className={styles["teste"]}>
        <img src="" alt="Logo" />

        <div>
          <input type="text" placeholder="O que está procurando?" />
        </div>

        <div>
          <div>
            <a>
              <img src="" alt="User icon" />
              <p>Minha Conta</p>
            </a>
          </div>

          <div>
            <img src="" alt="Minicart icon" />
            <p>1</p>
          </div>
        </div>
      </div>
    </header>
  );
}
