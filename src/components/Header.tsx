import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => (
  <div>
    <Button color="primary">
      <Link to="/">Home</Link>
    </Button>
    <Button color="primary">
      <Link to="/create">Create</Link>
    </Button>
  </div>
);

export default Header;
