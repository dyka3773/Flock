
const personal = {
    fName : "Stef",
    lName : "Touf",
    phone : 696969696,
    gender : "Female",
    country : "kazakstan",
    zip : 69420,
    email : "stefetoufe@gmail.com",
    password: 12345,
    numOfConts: 500,
    numOfCamps: 10,
    NumOfSent:3000
}

const company = {
    cName: "Stef",
    phone: 696969696,
    country: "kazakstan",
    phyAddress: "idk 24",
    zip: 69420,
    email: "stefetoufe@gmail.com",
    password: 12345,
    numOfConts: 500,
    numOfCamps: 10,
    numOfSent: 3000
}


const accounts = [company, personal];

const getAccount = (account=0) => {

    return (
        accounts[account]
    );
}

export default getAccount;