import React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource, ListGuesser } from 'react-admin';
import {RecipeList } from './components/recipes'
import hasuraDataProvider from 'ra-data-hasura';
import authProvider from './authProvider'

const key = localStorage.getItem('key')
const headers = {'content-type': 'application/json', 'x-hasura-admin-secret': key};

const App = () => <Admin
  dataProvider={hasuraDataProvider('https://floating-meadow-53258.herokuapp.com', headers)}
  authProvider={authProvider}
  >
  <Resource name="recipes" list={RecipeList} />
</Admin>

export default App;