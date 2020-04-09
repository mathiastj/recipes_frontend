import React from 'react';
import { ReferenceField, Filter, SelectInput, ReferenceInput, Show, NumberInput, RichTextField, ShowView, SimpleShowLayout, Create, Edit, TextInput, SimpleForm, NumberField, List, Datagrid, TextField } from 'react-admin';
import RecipeShowTitle from './recipeShowTitle'

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>;
};

const RecipeFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="title" alwaysOn />
      <ReferenceInput label="Ingredients" source="ingredients" reference="ingredients" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

export const RecipeList = props => (
    <List {...props} filters={<RecipeFilter/>} >
        <Datagrid rowClick="show">
            <TextField source="title" />
            <NumberField source="rating" />
            <NumberField source="servings" />
            <ReferenceField source="category_id" reference="categories">
              <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);



export const RecipeShow = props => (
  <Show {...props} title={<PostTitle/>}>
      <SimpleShowLayout>
          <RecipeShowTitle source="title"/>
          <NumberField source="rating" />
          <NumberField source="servings" />
          <NumberField source="duration" />
          <TextField component="pre" source="ingredients" />
          <TextField component="pre" source="directions" />
      </SimpleShowLayout>
  </Show>
);

export const RecipeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <NumberInput source="rating" />
          <NumberInput source="servings" />
          <NumberInput source="duration" />
          <ReferenceInput source="category_id" reference="categories">
               <SelectInput optionText="name" />
            </ReferenceInput>
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
