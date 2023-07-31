import styles from "./styles.module.scss";

function SubHeader() {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.options}>
          <label>
            <input type="checkbox" />
            <span>Photos</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Videos</span>
          </label>
        </div>
        <div className={styles.option}>
          <label>
            <input type="checkbox" />
            <span>All</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
