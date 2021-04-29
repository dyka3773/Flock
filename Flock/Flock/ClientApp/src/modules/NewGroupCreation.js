import React from 'react';
import context from '../contexts/context';

import Form from '../components/Form'

const inputs = [
  {
        label: "Name",
        id: "name",
        required:true

    }
  ]

const NewGroupCreation = () => {


    return <>
        <h1>Add a new group:</h1>
        <Form
            inputs={inputs}
            submit={{ label: "submit", onClick: (sub) => console.log(sub) }}
        />
    </>


}