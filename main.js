
// api url
const api_url =
      "https://gameinfo.albiononline.com/api/gameinfo/events?limit=51&offset=0";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data[0].Killer.Equipment);
    if (response) {
        hideloader();
    }
    show(data);
    return data
}
// Calling that async function

console.log(getapi(api_url)[0])