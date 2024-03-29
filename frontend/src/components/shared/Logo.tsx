import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link style={{textDecoration:"none"}} to={"/"}>
        <Typography
          sx={{
            display: "block",
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px #000",
            fontSize: "20px",
          }}
        >
          AI GPT
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
