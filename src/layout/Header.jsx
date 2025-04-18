import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h4"
            component="p"
            fontWeight="700"
            sx={{ flex: 1 }}
          >
            بلاگ
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
