import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="brand" />
      <TextField source="category_display_name" />
      <DateField source="created_at" />
      <TextField source="description" />
      <TextField source="image_urls" />
      <TextField source="name" />
      <NumberField source="price" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);
