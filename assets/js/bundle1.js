document.addEventListener('DOMContentLoaded',() => {
    console.log("bundle 1 gets loaded ...")
})

//task to loop an array
let loop = (arr) => {
    arr.forEach(ele => {
        console.log(ele)
    })
}
loop([1,2,3,4,5]);
