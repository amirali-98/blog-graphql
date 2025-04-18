import { Box, Typography } from "@mui/material";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box component="main" margin={5}>
        {children}
      </Box>
      <Box bgcolor="#111827" textAlign="center" padding={2} component="footer">
        <Typography color="#fff">
          ساخته شده توسط امیرعلی منصوری با ❤️
        </Typography>
      </Box>
    </>
  );
}
