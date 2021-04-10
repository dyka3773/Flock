import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator';

const jsonPrototype = {
    details: {
        name: "10",
        startDate: [1, 500],
        group: "10"
    },
    id: "id"
}

const itemsDashboard = dummyJsonGenerator(jsonPrototype, 12, 0);

export const getDashboardCampaigns = (pageNum) => {


    //console.log(itemsAr[pageNum - 1]);
    return itemsDashboard;

}



const itemsAr = [dummyJsonGenerator(jsonPrototype, 50, 0), dummyJsonGenerator(jsonPrototype, 50, 50), dummyJsonGenerator(jsonPrototype, 20, 100)];

const getCampaigns = (pageNum) => {

    
    //console.log(itemsAr[pageNum - 1]);
    return (itemsAr[pageNum - 1]);

}

export default getCampaigns;