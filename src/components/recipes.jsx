import React from 'react'
import {
  minValue,
  maxValue,
  number,
  ReferenceField,
  Filter,
  SelectInput,
  ReferenceInput,
  Show,
  NumberInput,
  RichTextField,
  ShowView,
  SimpleShowLayout,
  Create,
  Edit,
  TextInput,
  SimpleForm,
  NumberField,
  List,
  Datagrid,
  TextField,
} from 'react-admin'
import RichTextInput from 'ra-input-rich-text'
import RecipeShowTitle from './recipeViews/recipeShowTitle'
import RecipeShowHeader from './recipeViews/recipeShowHeader'
import StarRow from './starRow'

const PostTitle = ({ record }) => {
  return <span>{record ? `${record.title}` : ''}</span>
}
const validateRating = [number(), minValue(1), maxValue(5)]

const RecipeFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search titles" source="title" alwaysOn />
    <TextInput label="Search ingredients" source="ingredients" alwaysOn />
    <ReferenceInput label="Category" source="category_id" reference="categories" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
)

export const RecipeList = (props) => (
  <List {...props} filters={<RecipeFilter />} bulkActionButtons={false}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <StarRow source="rating" />
      <NumberField source="servings" />
      <ReferenceField source="category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const RecipeShow = (props) => (
  <Show {...props} title={<PostTitle />}>
    <SimpleShowLayout>
      <RecipeShowTitle source="title" />
      <RecipeShowHeader />
      <RichTextField source="ingredients" />
      <RichTextField source="directions" />
    </SimpleShowLayout>
  </Show>
)

const RecipeForm = () => (
  <SimpleForm>
    <TextInput source="title" />
    <NumberInput source="rating" validate={validateRating} />
    <NumberInput source="servings" />
    <TextInput source="duration_free" label="Duration" />
    <ReferenceInput source="category_id" reference="categories">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <RichTextInput source="ingredients" />
    <RichTextInput source="directions" />
  </SimpleForm>
)

export const RecipeEdit = (props) => <Edit {...props}>{RecipeForm()}</Edit>

export const RecipeCreate = (props) => <Create {...props}>{RecipeForm()}</Create>
