﻿import dummyJsonGenerator from '../usefulFunctions/dummyJsonGenerator';

const jsonPrototype = {
    name:"6",
    id:"id"
}


const getGroups = () => {
    return dummyJsonGenerator(jsonPrototype, 100, 0);
}

export default getGroups;