import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AuthorRelatedPost({ post }) {
  return (
    <Grid
      size={{ xs: 12, md: 3, xl: 4 }}
      key={post.id}
      border="1px solid #ccc"
      borderRadius={2}
      padding={1}
      sx={{ cursor: "pointer" }}
      boxShadow="0 0 10px rgba(0,0,0,0.1)"
    >
      <Link to={`/posts/${post.slug}`}>
        <img
          style={{ width: "100%", borderRadius: "12px" }}
          src={post.cover.url}
          alt={post.title}
        />
        <Typography component="h4" fontSize="1.2rem" fontWeight="700">
          {post.title}
        </Typography>
      </Link>
    </Grid>
  );
}
