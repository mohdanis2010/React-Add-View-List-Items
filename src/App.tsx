import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreatePart from "./pages/CreatePart";
import Home from "./pages/Home";
import Header from "./components/Header";
import Divider from "@material-ui/core/Divider";


function App({ data }: { data: any }) {
  const [lists, setTodos]: any = useState([]);
  const addTodo: Function = (name: string, status: string) => {
    data.dispatch({
      type: "ADD_TODO",
      payload: {
        name: name,
        status: status,
      },
    });
    setTodos(data.getState());
  };

  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Divider variant="middle" />
          <div>
            <Route exact path="/" render={() => <Home lists={lists} />} />
            <Route
              path="/create"
              render={() => <CreatePart addTodo={addTodo} />}
            />
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
