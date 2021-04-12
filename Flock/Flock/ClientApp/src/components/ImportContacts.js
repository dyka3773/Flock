import React from 'react';
import csvToJson from '../usefulFunctions/csvToJson'


const ImportContacts = () => {

    const createContacts = () => {

        if (document.querySelector("#import").files[0])
            csvToJson(document.querySelector("#import").files[0]);

    }

    return <>
        <label className="custom-file-upload">
            <input type="file" id="import" onChange={createContacts} />
                            Custom Upload
                        </label>
        <button onClick={createContacts}>AAA</button>
    </>

}

export default ImportContacts;