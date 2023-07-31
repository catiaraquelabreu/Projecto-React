import LinksCol from "../../Features/LinksCol/LinksCol";
import data from "../../API/FakeApiAreas/data.json";
import styles from "./styles.module.scss";

function LinksSection() {
  return (
    <div className={styles.content}>
      <div>
        <h2>Popular areas</h2>
        <div className={styles.links}>
          {data.map((item, index) => (
            <LinksCol
              key={index}
              contentTitle={item.contentTitle}
              contentItems={item.contentItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinksSection;
