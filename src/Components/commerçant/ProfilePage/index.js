import styles from "./style.module.css";

export default function () {
  return (
      <div className="container">
        <div className={`${styles.d_flex} justify-content-center align-items-center ${styles.profile}`}>
          <div className={styles.upload}>
            <img src="/coffeeShop.jpg" className={styles.profile_image}></img>
          {/*  <div className={styles.round}>
              <input type="file" accept="png jpg" name="logo" className={styles.file}></input>
               onChange={(e)=>{e.target.value}
              
            </div>*/}
          </div>

          <div className={styles.profile_info}>
            <form className={styles.modifier_form}>
              <div className="mb-1">
                <label for="name" className={`form-label ${styles.title}`}>
                  Nom:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-1">
                <label for="name" className={`form-label ${styles.title}`}>
                  Prenom:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                ></input>
              </div>
              
              <div className="mb-1">
                <label for="tel" className={`form-label ${styles.title}`}>
                Num tel:
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-1">
                <label for="tel" className={`form-label ${styles.title}`}>
                Email:
                </label>
                <input
                  type="email"
                  id="tel"
                  className="form-control"
                ></input>
              </div>
              <button className=" btn btn-warning ">update info</button>
            </form>
          </div>
        </div>
      </div>
  );
}
