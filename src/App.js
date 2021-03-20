import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import AlbumFeatue from "./features/Song";
import TodoList from "./features/Todo";

function App() {
  // return <AlbumFeatue />;
  return (
    <div className="app">
      <h3>Homepage</h3>

      <p>
        <Link to="todoList">TodoList</Link>
      </p>
      <p>
        <Link to="album">AlbumFeatue</Link>
      </p>
      <Switch>
        <Route path="/todoList" component={TodoList} exact />
        <Route path="/album" component={AlbumFeatue} exact/>
      </Switch>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
