import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { GET_POSTS } from "../graphql/queries";

export default function PostsList() {
  const [posts, setPosts] = useState({});
  const response = useQuery(GET_POSTS);
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(response);
  }, [response]);

  console.log(response);

  return (
    <Grid container gap={1}>
      {posts.data?.posts.map(post => (
        <Grid
          key={post.id}
          size={{ sm: 12, md: 5, lg: 4 }}
          borderRadius={2}
          overflow="hidden"
          border="2px solid #2563EB"
        >
          <Box
            padding={0.5}
            sx={{ display: "flex" }}
            alignItems="center"
            gap={1}
          >
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={post.author.avatar.url}
              alt={`${post.author.firstName} ${post.author.lastName}`}
            />
            <Typography
              color="##111827"
              fontSize=".9rem"
              fontWeight="500"
            >{`${post.author.firstName} ${post.author.lastName}`}</Typography>
          </Box>
          <img
            style={{ width: "100%" }}
            src={post.cover.url}
            alt={post.title}
          />
          <Box padding={1}>
            <Typography
              color="#111827"
              fontSize="1.1rem"
              fontWeight="700"
              mb={2}
            >
              {post.title}
            </Typography>
            <Button
              onClick={() => navigate(`/posts/${post.slug}`)}
              variant="outlined"
              fullWidth
            >
              مطالعه مقاله
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
