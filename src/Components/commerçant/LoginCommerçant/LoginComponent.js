import styles from "./LoginComponent.module.css";
import { Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function LoginComponent(props) {
 /* const params = useParams();
  let navigate = useNavigate();
  const [isauthenticated, setisauthenticated] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate('/');
  }
  const getAuthorizationHeader = () => `Bearer ${localStorage.getItem("token")}`;
  const [id, setid] = useState("");
  React.useEffect(() => {
    axios
      .get('http://localhost:3030/' + params.id, {
        headers: { Authorization: getAuthorizationHeader() },
      })
      .then((data) => {setisauthenticated(true); setid(data.data.username);
      })
      .catch((err) => {
        navigate('/');
      });
  });
  if (!isauthenticated) {
    return navigate('/');
  }else {*/
  return (
    <div className={`${styles.wrapper} ${styles.fadeInDown} `} id={styles.formFooter}
    >
      <div id={styles.formContent} >
        <form style={{ marginTop:"24px" }}>
          <input
            type="email"
            id="login"
            className={`${styles.fadeIn} ${styles.first} ${styles.forrm}`}
            name="login"
            placeholder="email"
            required
          />
          <input
            type="password"
            id="password"
            className={`${styles.fadeIn} ${styles.second} ${styles.forrm}`}
            name="login"
            placeholder="password"
            required
          />
          <input
            type="submit"
            className={`${styles.fadeIn} ${styles.third} ${styles.forrm1}`}
            value="Log In"
          />
        </form>

        <div >
          <p>
          
            <a  href="commerçant/signup">
               create new account 
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
//}
