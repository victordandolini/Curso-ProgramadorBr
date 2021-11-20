let fs = require("fs");

// fs.readFile('teste.txt','utf-8', function (error, data) {
//     if(error) {throw error};

//     console.log(data)
// })

const args = process.argv.slice(2);

const fileName = args[0];

fs.readFile(fileName, 'utf-8', (error, data)=>{
    
    if(error) throw error;

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
        if(error) {throw error};
        console.log("arquivo gerado com sucesso")
    })
});