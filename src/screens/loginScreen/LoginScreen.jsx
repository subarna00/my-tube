import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./_login.scss";
export const LoginScreen = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("asd");
    dispatch(login());
  };
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);
  return (
    <div className="login">
      <div className="login_container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={() => handleLogin()}>Login with google</button>
        <p>This Project is made using Youtube Data API </p>
      </div>
    </div>
  );
};
