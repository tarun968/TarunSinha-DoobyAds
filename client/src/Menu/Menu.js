import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/apicalls";
import { signout } from "../Auth/apicalls";
import { useNavigate } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {
          isAuthenticated() && (
            <li className="nav-item">
            <Link className="nav-link" to="/Images">
            See all the Images
          </Link>
            </li>
          )
        }
        {
          isAuthenticated() && (
            <li className="nav-item">
            <Link className="nav-link" to="/Add-image">
          Add a new Image
          </Link>
            </li>
          )
        }
        {
          !isAuthenticated() && (
            <li className="nav-item">
              <Link className="nav-link" to="/Signin">
                Signin
              </Link>
            </li>
          )
        }

        {
          !isAuthenticated() && (

            <li className="nav-item">
              <Link className="nav-link" to="/Signup">
                Signup
              </Link>
            </li>
            )
        }
        {
          isAuthenticated() && (
            <li className="nav-item">
              <Link className="nav-link" 
              onClick={signout} 
              to="/">
                SignOut
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default Menu;
