import React, {Component} from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import buildHasuraProvider from 'ra-data-hasura-graphql';
import { Admin, Resource, EditGuesser, ListGuesser, ShowGuesser } from 'react-admin';
import {RecipeList, RecipeEdit, RecipeCreate, RecipeShow } from './components/recipes'
import authProvider from './authProvider'
import ApolloClient from 'apollo-boost'




class App extends Component {
  constructor() {
      super();
      this.state = { dataProvider: null };
  }
  async componentDidMount() {
    const key = localStorage.getItem('key')
    const headers = {'content-type': 'application/json', 'x-hasura-admin-secret': key}; 
    const client = new ApolloClient({uri: 'https://floating-meadow-53258.herokuapp.com/v1/graphql', headers: headers});

    const dataProvider = await buildHasuraProvider({ client: client })
    this.setState({ dataProvider })
  }

  render() {
      const { dataProvider } = this.state;

      if (!dataProvider) {
          return <div>Loading</div>;
      }

      return (
        <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        >
        <Resource name="recipes" show={RecipeShow} list={RecipeList} edit={RecipeEdit} create={RecipeCreate}/>
      </Admin>
      );
  }
}

export default App;