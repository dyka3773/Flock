


const csvToJsonConvert = (csv) => {
    //document.querySelector('#import').files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
        console.log("heyhey");
        console.log(e.target.result.split('\n'));
    }

    reader.readAsText(csv);



}

export default csvToJsonConvert;