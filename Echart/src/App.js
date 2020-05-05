import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Routes from './routes/Route.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          { Routes.map((item, key)=> {
            if(item.exact) {
              return <Route exact path={item.path} key={key} component={item.component}></Route>
            }else {
              return <Route path={item.path} key={key} render={() => {
                return <item.component ob={item.routes} />
              }}></Route>
            }
          }) }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
