import { Container, Grid, Box, Typography } from "@mui/material";
import AuthorsList from "../components/AuthorsList";
import PostsList from "../components/PostsList";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box>
            <Typography color="#111827" fontWeight="700" component="h3" mb={2}>
              نویسنده‌ها
            </Typography>
            <AuthorsList />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box>
            <Typography color="#111827" fontWeight="700" component="h3" mb={2}>
              مقالات
            </Typography>
            <PostsList />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
