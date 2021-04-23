



const dataToFormInputs = (details) => {


        const inputs = Object.keys(details).map((det) => {

            const type = det === "email" ? "email" : "text"; //used for validation

            return {
                label: det,
                id: det,
                value: details[det],
                type:type
            }
        });


    return inputs;

}

export default dataToFormInputs;