import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator';

const jsonPrototype = {
    title: "10",
    details: {
        name: "10",
        surname: "10",
        email: "20"
    },
    id: "id"
}




const itemsAr = [dummyJsonGenerator(jsonPrototype, 50, 0), dummyJsonGenerator(jsonPrototype, 50, 50), dummyJsonGenerator(jsonPrototype, 50, 100)];


const getContacts = (pageNum) => {

   
    return(itemsAr[pageNum-1]);

}

export default getContacts;