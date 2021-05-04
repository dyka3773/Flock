
export const dataToFormInputs = { //for contacts and campaigns
    subject: {
        id: "subject",
        label: "Subject",
    },
    text: {
        id: "text",
        label: "Text",
    },
    startDate: {
        id: "startDate",
        label: "Start Date",
        readOnly: true
    },
    endDate: {
        id: "endDate",
        label: "End Date",
        readOnly: true
    },
    creationDate: {
        id: "creationDate",
        label: "Creation Date",
        readOnly: true
    },
    name: {
        id: "name",
        label: "Name",
    },
    frequency: {
        id: "frequency",
        label: "Frequency",
        readOnly: true

    },
    numOfContacts: {
        id: "numOfContacts",
        label: "Num Of Contacts",
        readOnly: true

    },
    fullName: {
        id: "fullName",
        label: "Full Name",
       

    },
    email: {
        id: "email",
        label: "Email",
        type:"email"

    },
}


export const accountSettingsDataToFormInputs = {
    fName: {
        id: "fName",
        label: "First Name",
    },
    lName: {
        id: "lName",
        label: "Last Name",
    },
    phone: {
        id: "phone",
        label: "Phone",
    },
    gender: {
        id: "gender",
        label: "Gender",
    },
    country: {
        id: "country",
        label: "Country",
    },
    zip: {
        id: "zip",
        label: "Zip",
    },
    email: {
        id: "email",
        label: "Email",
        readOnly: true
    },
    name: {
        id: "name",
        label: "Name",
    },
    phyAddress: {
        id: "phyAddress",
        label: "Physical Address",
    }
}





export const dataToAccordionHeadersCampaign = {
    subject: "Subject",
    startDate: "Start Date",
    name: "Name"
}

export const dataToAccordionHeadersCampaignDashboard = {
    startDate: "Start Date",
    name: "Name"
}

export const dataToAccordionHeadersContact = {
    fullName: "Full Name",
    email: "Email"
}


export const keysToLabel = { //general
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