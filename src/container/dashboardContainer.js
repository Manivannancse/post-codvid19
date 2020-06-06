import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AppLayout from '../component/layout';
import FormComponent from '../component/form';
import Login from '../component/login';
import ListPage from '../component/list-page';

const DashboardContainer = () => {
  return (
    <AppLayout>
      <Router>
        <Switch>
          <Route exact path='/'>
            <FormComponent />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/list'>
            <ListPage />
          </Route>
          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </AppLayout>
  )
}

export default DashboardContainer; 