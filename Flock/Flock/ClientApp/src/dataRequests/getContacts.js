import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator';

const jsonPrototype = {
    details: {
        name: "10",
        surname: "10",
        email: "email"
    },
    id: "id"
}




const itemsAr = [dummyJsonGenerator(jsonPrototype, 50, 0), dummyJsonGenerator(jsonPrototype, 50, 50), dummyJsonGenerator(jsonPrototype, 50, 100)];


const getContacts = (pageNum) => {

   
    return(itemsAr[pageNum-1]);

}

export default getContacts;