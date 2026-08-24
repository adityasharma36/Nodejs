
import {readFile,writeFile} from 'fs/promises'
import {fileURLToPath} from 'url'

const pathToFile = "/Users/adityakumarsharma/Desktop/Advance Backend/Day-02" + "/index.html"

const response = await readFile(pathToFile);

console.log(response.toString());


let template = response.toString();

const obj = {
    
    name:"Aditya",
    message:"Hello World this is me"
}

for(const [key,value] of Object.entries(obj)){
    template = template.replace(`{{${key}}}`, value);
}

const outputPath = fileURLToPath(new URL('./output.html', import.meta.url));
await writeFile(outputPath, template);