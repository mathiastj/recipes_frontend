import React from 'react';
import { minValue, maxValue, number, ReferenceField, Filter, SelectInput, ReferenceInput, Show, NumberInput, RichTextField, ShowView, SimpleShowLayout, Create, Edit, TextInput, SimpleForm, NumberField, List, Datagrid, TextField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import RecipeShowTitle from './recipeViews/recipeShowTitle'
import RecipeShowHeader from './recipeViews/recipeShowHeader'
import StarRow from './starRow'

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>;
};

const RecipeFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search titles" source="title" alwaysOn />
      <TextInput label="Search ingredients" source="ingredients" alwaysOn />
      <ReferenceInput label="Category" source="category_id" reference="categories" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

export const RecipeList = props => (
    <List {...props} filters={<RecipeFilter/>} >
        <Datagrid rowClick="show">
            <TextField source="title" />
            <StarRow source="rating"/>
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
          <RecipeShowHeader />
          <RichTextField component="pre" source="ingredients" />
          <RichTextField component="pre" source="directions" />
      </SimpleShowLayout>
  </Show>
);

const validateRating = [number(), minValue(1), maxValue(5)]

export const RecipeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="title" />
          <NumberInput source="rating" validate={validateRating}/>
          <NumberInput source="servings" />
          <NumberInput source="duration" />
          <ReferenceInput source="category_id" reference="categories">
               <SelectInput optionText="name" />
            </ReferenceInput>
          <RichTextInput source="ingredients" />
          <RichTextInput source="directions" />
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
