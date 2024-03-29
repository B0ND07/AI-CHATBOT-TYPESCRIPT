import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  RegisterUser,
  checkAuthStatus,
  loginUser,
  logoutUser,
} from "../helpers/api-communicator";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, name: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkStatus() {
      try {
        const data = await checkAuthStatus();
        
        if (data.email) {
          setUser({ email: data.email, name: data.name });
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
    checkStatus();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (email: string, name: string, password: string) => {
    try {
      const data = await RegisterUser(email, name, password);
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    // window.location.reload();
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
