import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { GET_AUTHORS } from "../graphql/queries";

export default function AuthorsList() {
  const [authors, setAuthors] = useState([]);
  const response = useQuery(GET_AUTHORS);

  useEffect(() => {
    setAuthors(response);
  }, [response]);

  return (
    <List sx={{ bgcolor: "#2563EB", borderRadius: 2 }}>
      {authors.data?.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Link to={`/authors/${author.slug}`}>
            <ListItem sx={{ justifyContent: "start", gap: 2 }}>
              <ListItemAvatar>
                <Avatar
                  alt={`${author.firstName} ${author.lastName}`}
                  src={author.avatar.url}
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography
                  textAlign="right"
                  color="#fff"
                >{`${author.firstName} ${author.lastName}`}</Typography>
              </ListItemText>
            </ListItem>
          </Link>
          {index !== authors.data?.authors.length - 1 && (
            <Divider sx={{ mt: 1 }} />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
