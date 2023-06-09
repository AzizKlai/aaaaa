import styles from './style.module.css'

export default function SignUp() {
  return (
    <div >
      <h1 className={styles.h11}>creer votre compte</h1>
      <form className={styles.containerr}>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            votre Nom
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            votre prenom
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
      
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
          Num tel
          </label>
          <input
            type="tel"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          ></input>
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
          Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          ></input>
        </div>
        
        <br />
        <button type="submit" className={`btn btn-warning ${styles.b}`}>
        s'inscrire
        </button>
      </form>
    </div>
  );
}
