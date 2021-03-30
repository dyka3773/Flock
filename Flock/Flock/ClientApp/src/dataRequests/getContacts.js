const items = [
    {
        title: "Stefanos",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email:"stefetoufe@gmail.com"
        },
        id: "1"
    },
    {
        title: "Thanos",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "2"
    },
    {
        title: "Kwstas",
        details: {
            name: "Stefanos1",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "3"
    },
    {
        title: "Stratos",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "4"
    },
    {
        title: "Stavros",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "5"
    },
    {
        title: "Kwsths",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "6"
    },
    {
        title: "Kwstantinos",
        details: {
            name: "Stefanos23",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "7"
    },
    {
        title: "Thanasis",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "8"
    },
    {
        title: "Stelios",
        details: {
            name: "Stefanos23",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "9"
    },
    {
        title: "Stefanos1",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "10"
    },
    {
        title: "Thanos1",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "11"
    },
    {
        title: "Kwstas",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "12"
    },
    {
        title: "Stratos1",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "13"
    },
    {
        title: "Stavros1",
        details: {
            name: "Stefanos11111",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "14"
    },
    {
        title: "Kwsths1",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "15"
    },
    {
        title: "StefanosAA",
        details: {
            name: "Stefanos",
            surname: "ToufexisAAAAAAAA",
            email: "stefetoufe@gmail.com"
        },
        id: "1111"
    },
    {
        title: "ThanosAAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "2111"
    },
    {
        title: "KwstasAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "3111"
    },
    {
        title: "StratosAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "411"
    },
    {
        title: "StavrosAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "5111"
    }, {
        title: "KwsthsAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "61111"
    },
    {
        title: "KwstantinosAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "71111"
    },
    {
        title: "ThanasisAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "811"
    },
    {
        title: "SteliosAA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "9111"
    },
];

const items2 = [
    
    
    {
        title: "Stefanos1AA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "10"
    },
    {
        title: "Thanos1AA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "11"
    },
    {
        title: "KwstasAA",
        details: {
            name: "Stefanos",
            surname: "Toufexisawwad",
            email: "stefetoufe@gmail.com"
        },
        id: "12"
    },
    {
        title: "Stratos1AA",
        details: {
            name: "StefanosA",
            surname: "ToufexisA",
            email: "stefetoufe@gmail.com"
        },
        id: "13"
    },
    {
        title: "Stavros1AA",
        details: {
            name: "Stefanos",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "14"
    },
    {
        title: "Kwsths1AA",
        details: {
            name: "Stefanos122",
            surname: "Toufexis",
            email: "stefetoufe@gmail.com"
        },
        id: "15"
    }
];
const itemsAr = [items, items2];

const getContacts = (pageNum) => {

   
    return(itemsAr[pageNum-1]);

}

export default getContacts;