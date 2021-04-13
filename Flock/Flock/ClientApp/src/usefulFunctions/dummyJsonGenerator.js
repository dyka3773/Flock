
/**const jsonPrototype = {
    title: "10",
    details: {
        name: "10",
        startDate: [1,500]
    },
    id: "id"
}
 * 
 * 
 * 
 */


const randomNum = (values) => {
    const min = values[0];
    const max = values[1];
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomString = (length) => {
    const allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    let newString = [];
    const charactersLength = allCharacters.length;

    for (let i = 0; i < length; i++)
        newString.push(allCharacters[randomNum([0, charactersLength])])


    return newString.join('');
}

const randomEmail = () => {
    const emailConstructor = [];

    emailConstructor.push(randomString(10));
    emailConstructor.push("@");

   
    emailConstructor.push(["gmail", "outlook", "yahoo", "hotmail", "flock"][randomNum([0, 4])]);
    

    emailConstructor.push(".com");

    return emailConstructor.join('');
    
}

const recursive = (prototype, entry, id) => {
    let newVal;



    for (let prop in prototype) {
        

        if (prototype[prop] instanceof Array) {
            newVal = randomNum(prototype[prop]);
        } else if (typeof prototype[prop] === "string") {
            if (prototype[prop] === "id")
                newVal = id;
            else if (prototype[prop].match(/\d+/g))
                newVal = randomString(parseInt(prototype[prop]));
            else if (prototype[prop] === "email")
                newVal = randomEmail();
        } else {
            newVal = recursive(prototype[prop], {}, id);
        }
            
         entry = { ...entry, [prop]: newVal }
    }

    return entry;
}


const dummyJsonGenerator = (jsonPrototype, num, startid) => {

    const data = [];

    for (let i = 0; i < num; i++) {


        data.push(recursive(jsonPrototype, {}, startid));   
        startid++;
    }

    return data;
}

export default dummyJsonGenerator;