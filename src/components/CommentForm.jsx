import { useState } from "react";
import { Box, TextField, Grid, Button, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../graphql/mutations";

const initialState = {
  fullName: "",
  email: "",
  content: "",
};

export default function CommentForm({ slug }) {
  const [comment, setComment] = useState(initialState);
  const [createComment, data] = useMutation(CREATE_COMMENT);

  function commentFormHandler(e) {
    const { name, value } = e.target;
    setComment(comment => ({ ...comment, [name]: value }));
  }

  function sendHandler() {
    createComment({
      variables: {
        ...comment,
        slug,
      },
    });
  }

  return (
    <Box>
      <Typography mb={2} variant="h5">
        نظر خود را بنویسید:
      </Typography>
      <Grid container gap={2}>
        <Grid size={12}>
          <TextField
            variant="outlined"
            label="نام"
            fullWidth
            name="fullName"
            onChange={commentFormHandler}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            variant="outlined"
            label="ایمیل"
            fullWidth
            name="email"
            onChange={commentFormHandler}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            variant="outlined"
            label="کامنت"
            fullWidth
            multiline
            name="content"
            onChange={commentFormHandler}
          />
        </Grid>
        <Grid size={12}>
          <Button variant="contained" fullWidth onClick={sendHandler}>
            ارسال کامنت
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
