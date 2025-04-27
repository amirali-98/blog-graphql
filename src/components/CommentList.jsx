import { Avatar, Box, Typography } from "@mui/material";
import dompurify from "dompurify";

export default function CommentList({ comments }) {
  console.log(comments);
  return (
    <>
      {comments?.length > 0 && (
        <Box mt={3}>
          <Typography mt={4} mb={2} variant="h5">
            نظرات:
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            {comments?.map(comment => (
              <Box
                key={comment.id}
                border="1px solid #ccc"
                padding={1}
                borderRadius={2}
              >
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <Avatar />
                  <Typography>{comment.fullName}</Typography>
                </Box>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(
                      comment.content.replace(/\n/g, "<br />")
                    ),
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
