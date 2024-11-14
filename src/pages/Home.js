import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return (
    <>
      {isAuth ? (
        <div>
          <h1>Home page</h1>
          <p>Welcome!</p>

          <button onClick={() => dispatch(removeUser())}>
            Logout from {email}
          </button>
        </div>
      ) : (
        navigate("login")
      )}
    </>
  );
};

export default Home;
