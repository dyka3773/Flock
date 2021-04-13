
//used to generate a form for creating a new contact along with the Form component
export const newContactFormInputs = [
    {
        label: "Name (First and Last)",
        id: "name",
        required:true
    },
    {
        label: "E-mail",
        id: "email",
        type: "email",
        required: true
    }
    ,
    {
        label: "Groups",
        id: "groups",
        required: true
    }
];


//used to match an incoming object's keys with proper labels
export const keysToLabel = {
    fName: "Name",
    lName: "Last Name",
    cName: "Name",
    phyAddress: "Physical Address",
    phone: "Phone",
    gender: "Gender",
    country: "Country",
    zip: "Zip Code",
    email: "Email Address",
    password: "Password",
}