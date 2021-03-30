

const items = [
    {
        title: "Camp",
        details: {
            name: "camp1",
            start:"sad"
        },
        id: "1"
    },
    {
        title: "Thanos",
        details: {
            name: "camp12",
            start: "sad2"
        },
        id: "2"
    },
    {
        title: "Camp",
        details: {
            name: "camp13",
            start: "sad3"
        },
        id: "3"
    },
    {
        title: "Stratos",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "4"
    },
    {
        title: "Stavros",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "5"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "6"
    },
    {
        title: "Kwstantinos",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "7"
    },
    {
        title: "Thanasis",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "8"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "9"
    },
    {
        title: "Stefanos1",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "10"
    },
    {
        title: "Thanos1",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "11"
    },
    {
        title: "Kwstas",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "12"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "13"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "14"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "15"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "1111"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "2111"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "3111"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "411"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "5111"
    }, {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "61111"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "71111"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "811"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "9111"
    },
];

const items2 = [


    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "10"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "11"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "12"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "13"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "14"
    },
    {
        title: "Camp",
        details: {
            name: "camp1",
            start: "sad"
        },
        id: "15"
    }
];
const itemsAr = [items, items2];

const getCampaigns = (pageNum) => {

    
    console.log(itemsAr[pageNum - 1]);
    return (itemsAr[pageNum - 1]);

}

export default getCampaigns;