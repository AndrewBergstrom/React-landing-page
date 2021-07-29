import React from 'react';
import { Switch, Route} from 'react-router-dom';

//Layouts
import LandingPageLayout from './layouts/Landingpage'

//Pages
import HomePage from './pages/HomePage';

const App =() => {
  return (
  <Switch>
    <Route path='/'>
    <LandingPageLayout heading="Tailwind CSS">
      <HomePage />
    </LandingPageLayout>
    </Route>
  </Switch>
  );
};

export default App;