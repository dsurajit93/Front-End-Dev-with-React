let url = "'https://fakestoreapi.com/products"

async function getData(){
    let response = await fetch(url)
    console.log(response)
}

getData()