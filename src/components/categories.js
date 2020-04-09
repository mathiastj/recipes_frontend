import React from 'react';
import { Filter, SelectInput, ReferenceInput, Show, NumberInput, RichTextField, ShowView, SimpleShowLayout, Create, Edit, TextInput, SimpleForm, NumberField, List, Datagrid, TextField } from 'react-admin';

export const CategoryCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
      </SimpleForm>
  </Create>
);
