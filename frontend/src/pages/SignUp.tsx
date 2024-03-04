import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";


const SignUp = () => {

  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("creating account", { id: "signup" });
      await auth?.signup(email, name, password);
      toast.success("signed in success", { id: "signup" });
      if (auth?.isLoggedIn) {
        navigate("/chat");
      }
    } catch (error) {
      toast.error("signing error", { id: "signup" });
  
    }
  };
  useEffect(() => {
    if (auth?.isLoggedIn) {
      return navigate("/chat");
    }
  }, [auth]);
  return (
    <Box
      width={"100%"}
      height={"80vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          padding: "30px",
          boxShadow: "10px 10px 20px #000",
          borderRadius: "10px",
          border: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            padding={2}
            fontWeight={600}
          >
            SignUp
          </Typography>
          <CustomizedInput type="text" name="name" label="Name" />
          <CustomizedInput type="email" name="email" label="Email" />
          <CustomizedInput type="password" name="password" label="Password" />
        

          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1,
              mt: 2,
              width: "400px",
              color: "black",
              borderRadius: 2,
              bgcolor: "#00fffc",
              ":hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            endIcon={<IoIosLogIn />}
          >
            Signup
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
