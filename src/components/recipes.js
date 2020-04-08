import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const RecipeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="ingredients" />
            <TextField source="directions" />
        </Datagrid>
    </List>
);