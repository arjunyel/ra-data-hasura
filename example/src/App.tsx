// // Initialize the dataProvider before rendering react-admin resources.
// import React, { useState, useEffect } from 'react';
// import buildHasuraProvider from 'ra-data-hasura';
// import { Admin, DataProvider, ListGuesser, Resource } from 'react-admin';

// import { PostCreate, PostEdit, PostList } from './posts';
// import { ProductList } from './products';

// const App = () => {
//   const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(
//     null
//   );

//   useEffect(() => {
//     const buildDataProvider = async () => {
//       const dataProvider = await buildHasuraProvider({
//         clientOptions: { uri: 'http://localhost:8080/v1/graphql' },
//       });
//       setDataProvider(() => dataProvider);
//     };
//     buildDataProvider();
//   }, []);

//   if (!dataProvider) return <p>Loading...</p>;

//   return (
//     <Admin dataProvider={dataProvider}>
//       <Resource
//         name="product"
//         list={ProductList}
//         // list={PostList}
//         // edit={PostEdit}
//         // create={PostCreate}
//       />
//     </Admin>
//   );
// };

// export default App;
// in src/App.js
import * as React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
