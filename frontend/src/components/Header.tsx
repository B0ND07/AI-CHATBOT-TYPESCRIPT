import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
            {/* <NavigationLink
              bg="#00fffc"
              to="/chat"
              text="go to chat"
              textColor="black"
            /> */}
            <NavigationLink
              bg="yellow"
              to="/"
              text="logout"
              textColor="black"
              onClick={auth.logout}
            />
          </>
            
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/"
                text="login"
                textColor="black"
              />
              <NavigationLink
                bg="yellow"
                to="/signup"
                text="signup"
                textColor="black"
              
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
