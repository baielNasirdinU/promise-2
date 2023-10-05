const getTodos=(resurse)=>{
return new Promise((resolve,reject)=>{
 const request =new XMLHttpRequest()    
 request.addEventListener("readystatechange",()=>{
    if (request.readyState===4 && request.status===200) {
        const data =JSON.parse(request.responseText)
        resolve(data)
        
    }else if (request.readyState===4) 
        
    {
        reject("no page")
    }
 })
 request.open('GET',resurse)
 request.send()
})
}
getTodos('./data/data.json').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})