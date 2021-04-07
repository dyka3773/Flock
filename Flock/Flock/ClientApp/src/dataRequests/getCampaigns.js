import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator';

const jsonPrototype = {
    title: "10",
    details: {
        name: "10",
        startDate: [1, 500],
        group: "10"
    },
    id: "id"
}




const itemsAr = [dummyJsonGenerator(jsonPrototype, 50, 0), dummyJsonGenerator(jsonPrototype, 50, 50), dummyJsonGenerator(jsonPrototype, 20, 100)];

const getCampaigns = (pageNum) => {

    
    //console.log(itemsAr[pageNum - 1]);
    return (itemsAr[pageNum - 1]);

}

export default getCampaigns;