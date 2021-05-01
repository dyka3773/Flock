
//used to generate a form for creating a new contact along with the Form component
export const newContactFormInputs = [
    {
        label: "Name (First and Last)",
        id: "fullName",
        required:true
    },
    {
        label: "Email",
        id: "email",
        type: "email",
        required: true
    }
];


//used to match an incoming object's keys with proper labels and 
//in many cases decides weather the key will be displayed(see AccountSettings.js)
export const keysToLabel = {
    fName: "Name",
    lName: "Last Name",
    name: "Name",
    phyAddress: "Physical Address",
    phone: "Phone",
    gender: "Gender",
    country: "Country",
    zip: "Zip Code",
    email: "Email Address",
    password: "Password",
    numOfCamps: "Active Campaigns",
    numOfConts: "Contacts",
    numOfSent: "Delivered Emails"
}