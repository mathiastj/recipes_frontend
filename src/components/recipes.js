import React from 'react';
import { Filter, SelectInput, ReferenceInput, Show, NumberInput, RichTextField, ShowView, SimpleShowLayout, Create, Edit, TextInput, SimpleForm, NumberField, List, Datagrid, TextField } from 'react-admin';

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>;
};

const RecipeFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
      {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput> */}
  </Filter>
);

export const RecipeList = props => (
    <List {...props} filters={<RecipeFilter/>} >
        <Datagrid rowClick="show">
            <TextField source="title" />
            <NumberField source="rating" />
            <TextField source="ingredients" />
            <TextField source="directions" />
        </Datagrid>
    </List>
);

export const RecipeShow = props => (
  <Show {...props} title={<PostTitle/>}>
      <SimpleShowLayout>
          <TextField source="title" />
          <NumberField source="rating" />
          <TextField component="pre" source="ingredients" />
          <TextField component="pre" source="directions" />
      </SimpleShowLayout>
  </Show>
);

export const RecipeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <NumberInput source="rating" />
          <TextInput multiline source="ingredients" />
          <TextInput source="title" />
          <TextInput multiline source="directions" />
      </SimpleForm>
  </Edit>
);

export const RecipeCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <NumberInput source="rating" />
          <TextInput multiline source="ingredients" />
          <TextInput source="title" />
          <TextInput multiline source="directions" />
      </SimpleForm>
  </Create>
);
