import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../css/list-style.css";

const Part = ({
  name,
  id,
  status,
}: {
  name: string;
  id: number;
  status: string;
}) => (
  <List style={{ listStyle: "none" }} className="list-item">
    <ListItem>
      {" "}
      <ListItemText>
        Name: <span className="meta">{name}</span>
      </ListItemText>
    </ListItem>
    <ListItem>
      {" "}
      <ListItemText>
        ID: <span className="meta">{id}</span>
      </ListItemText>
    </ListItem>
    <ListItem>
      {" "}
      <ListItemText>
        Status: <span className="meta">{status}</span>
      </ListItemText>
    </ListItem>
  </List>
);

export default Part;
