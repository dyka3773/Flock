
import { addManyContacts } from '../dataRequests/addContact';
import context from '../contexts/context';

const csvToJsonConvert = async (csv,group, token) => {
    //document.querySelector('#import').files[0];
    const reader = new FileReader();
    const contacts = [];

 

    reader.onload = (e) => {
        const ar = e.target.result.split('\n');

         for (let i of ar) {

            const fullName = i.split(',')[0];

            const email = i.split(',')[1];

           

            if (fullName && email) {
                contacts.push({
                    fullName: fullName, email: email.substring(0, email.length - 1) });
            }
                
        }
        const contVar = contacts;

        return addManyContacts(contVar, token, group);
    }

    await reader.readAsText(csv);

}

export default csvToJsonConvert;