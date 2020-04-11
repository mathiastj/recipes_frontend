import React from 'react';
import { DatagridBody, ReferenceField, Filter, SelectInput, ReferenceInput, Show, NumberInput, RichTextField, ShowView, SimpleShowLayout, Create, Edit, TextInput, SimpleForm, NumberField, List, Datagrid, TextField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import RecipeShowTitle from './recipeViews/recipeShowTitle'
import RecipeShowHeader from './recipeViews/recipeShowHeader'
import Stars from './stars'
import { MAX_STARS } from '../constants/stars'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

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
        <MyDatagrid rowClick="show">
            <TextField source="title" />
            {/* <StarRow {...props} /> */}
            <NumberField source="rating" />
            <NumberField source="servings" />
            <ReferenceField source="category_id" reference="categories">
              <TextField source="name" />
            </ReferenceField>
        </MyDatagrid>
    </List>
);

const MyDatagridBody = props => <DatagridBody {...props} row={<MyDatagridRow />} />;
const MyDatagrid = props => <Datagrid {...props} body={<MyDatagridBody />} />;

const MyDatagridRow = ({ record, resource, id, onToggleItem, children, selected, basePath }) => (
  <TableRow key={id}>
      {/* first column: selection checkbox */}
      <TableCell padding="none">
            {<Checkbox
                checked={selected}
                onClick={() => onToggleItem(id)}
            />}
        </TableCell>
      {/* data columns based on children */}
      {React.Children.map(children, field => {
        if (field.props.source === 'rating') {
          return (
            <TableCell>
              <Stars rating={record.rating}/>
            </TableCell>
          )
        }
        return (
          <TableCell key={`${id}-${field.props.source}`}>
              {React.cloneElement(field, {
                  record,
                  basePath,
                  resource,
              })}
          </TableCell>
      )})}
  </TableRow>
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

export const RecipeEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="title" />
          <NumberInput source="rating" />
          <NumberInput source="servings" />
          <NumberInput source="duration" />
          <ReferenceInput source="category_id" reference="categories">
               <SelectInput optionText="name" />
            </ReferenceInput>
          <RichTextInput multiline source="ingredients" />
          <RichTextInput multiline source="directions" />
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
