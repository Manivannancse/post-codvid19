import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AppLayout from '../component/layout';
import FormComponent from '../component/form';
import ListPage from '../component/list-page';
import LoginContainer from './LoginContainer';

const DashboardContainer = ({ t }) => {
  return (
    <AppLayout>
      <Router>
        <Switch>
          <Route exact path='/'>
            <FormComponent />
          </Route>
          <Route exact path='/login'>
            <LoginContainer />
          </Route>
          <Route exact path='/list'>
            <ListPage />
          </Route>
          <Route path="*">
            <h1>{t('common.notfound')}</h1>
          </Route>
        </Switch>
      </Router>
    </AppLayout>
  )
}

export default DashboardContainer; 