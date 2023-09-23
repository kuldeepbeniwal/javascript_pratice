const list=[4,3,4,5,6,3,5,67]
list.forEach( function(val){
    console.log(val);
})

list.forEach((item)=>{
    console.log(item);
})

list.forEach((item,index,arr)=>{
    console.log(`value: ${item} index:${index} of arr:[${arr}]`)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})