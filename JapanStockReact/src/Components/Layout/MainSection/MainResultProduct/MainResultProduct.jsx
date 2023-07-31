import Btn from "../../../UI/Button/Btn";
import Mastercard from "../../../../assets/mastercard.jpg";
import Visa from "../../../../assets/visa.png";
import AmericanExp from "../../../../assets/americansExpress.png";
import Paypal from "../../../../assets/Paypal.png";
import Shop from "../../../../assets/imgShop.jpg";
import GridTwoCol from "../../Grid/MosaicGrid/GridTwoCol/Grid";
import styles from "./styles.module.scss";

function MainResultProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.results}>
        <div className={styles.img}></div>
        <p>
          Japan, a land where time seems to blend harmoniously with nature,
          unveils a tapestry of breathtaking landscapes and captivating
          cityscapes. Amidst the modernity, Japan's appreciation for simplicity
          and mindfulness can be witnessed in the Zen gardens and the meditative
          art of calligraphy. From the serene countryside to the bustling
          metropolises, this country weaves together a symphony of beauty that
          enchants all who wander through its captivating vistas. It is a
          tapestry woven with threads of beauty, where ancient traditions
          coexist with cutting-edge technology. Whether wandering through the
          serene landscapes or exploring the vibrant cities, Japan enthralls the
          senses, leaving an indelible mark on the heart of every traveler
          fortunate enough to behold its splendor.
        </p>

        <div className={styles.gridContainer}>
          <h2>Your might also like:</h2>
          <GridTwoCol />
        </div>
      </div>
      <div className={styles.purchase}>
        <div className={styles.map}></div>
        <div className={styles.box}>
          <div className={styles.info}>
            <img src={Shop}></img>
            <p>alt text api</p>
          </div>
          <p>#ID by photographer</p>

          <div className={styles.options}>
            <label>
              <input type="checkbox" />
              <span>Single Use - $99.00</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Unlimited - $299.00</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Exclusive - $899.00</span>
            </label>
          </div>
          <Btn height={"48px"} content="Purchase" />
          <p>
            Product is licenced for a single or multiple usage. For more
            information, see our licence details.
          </p>
          <div className={styles.cards}>
            <img src={Mastercard}></img>
            <img src={Visa}></img>
            <img src={AmericanExp}></img>
            <img src={Paypal}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainResultProduct;
