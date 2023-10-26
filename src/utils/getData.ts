// this method is for accessing data at the uri
const proxy = ' http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
// const proxy = ' http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';

async function getData(endpoint: string){
    const result = await fetch(`${proxy}${endpoint}`);

    // return it as json
    return await result.json();
}

export default getData;