import React, {Component} from 'react';
import buildHasuraProvider from 'ra-data-hasura-graphql';
import { Admin, Resource, EditGuesser, ListGuesser, ShowGuesser } from 'react-admin';
import {RecipeList, RecipeEdit, RecipeCreate, RecipeShow } from './components/recipes'
import {CategoryCreate } from './components/categories'
import authProvider from './authProvider'
import ApolloClient from 'apollo-boost'


const preAuthDataProvider = {
  getList:    (resource, params) => Promise.resolve({data: []}),
  getOne:     (resource, params) => Promise.resolve(null),
  getMany:    (resource, params) => Promise.resolve(null),
  getManyReference: (resource, params) => Promise.resolve(null),
  create:     (resource, params) => Promise.resolve(null),
  update:     (resource, params) => Promise.resolve(null),
  updateMany: (resource, params) => Promise.resolve(null),
  delete:     (resource, params) => Promise.resolve(null),
  deleteMany: (resource, params) => Promise.resolve(null),
}


class App extends Component {
  constructor() {
      super();
      this.state = { dataProvider: null};
  }
  async componentDidMount() {
    const key = localStorage.getItem('key')
    if (!key) {
      this.setState({ dataProvider: preAuthDataProvider })
      return
    }
    const headers = {'content-type': 'application/json', 'x-hasura-admin-secret': key}; 
    const client = new ApolloClient({uri: 'https://floating-meadow-53258.herokuapp.com/v1/graphql', headers: headers});

    const dataProvider = await buildHasuraProvider({ client: client })
    this.setState({ dataProvider })
  }

  async componentDidUpdate() {
    const key = localStorage.getItem('key')
    if (this.state.dataProvider === null && key) {
      const headers = {'content-type': 'application/json', 'x-hasura-admin-secret': key}; 
      const client = new ApolloClient({uri: 'https://floating-meadow-53258.herokuapp.com/v1/graphql', headers: headers});
  
      const dataProvider = await buildHasuraProvider({ client: client })
      this.setState({ dataProvider })
    }
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
          <Resource name="categories" show={ShowGuesser} list={ListGuesser} edit={EditGuesser} create={CategoryCreate} />
        </Admin>
      );
  }
}

export default App;