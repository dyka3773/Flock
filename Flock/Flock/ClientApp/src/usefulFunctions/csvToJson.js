


const csvToJsonConvert = (csv,group = 0) => {
    //document.querySelector('#import').files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
        console.log(e.target.result.split('\n'));
    }

    reader.readAsText(csv);

    console.log(group);


}

export default csvToJsonConvert;