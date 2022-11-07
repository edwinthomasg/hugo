document.addEventListener('DOMContentLoaded',() => {
    console.log("bundle 1 gets loaded ...")
})

//task to loop an array and filter
let iterate = (arr) => {
    arr.forEach(ele => {
        if(ele == 2)
        console.log(ele)
    })
}
iterate([1,2,3,4,5]);