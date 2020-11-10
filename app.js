let products = [
{
    title: "Iphone 8",
    company: "Apple"
},
{
    title: "Galaxy",
    company: "Samsung"
},
{
    title: "Iphone 7",
    company: "Apple"
},
{
    title: "Iphone Xs",
    company: "Apple"
},
{
    title: "HTC Phone",
    company: "HTC"
}

];

function getUnique(arr) {
    // let tempArr = arr.map(item => item.company);
    // return [...new Set (tempArr)];
    return [...arr.reduce((acc, curr) =>{
        acc.add(curr.company);
        return acc;
    }, new Set())]
};

console.log(getUnique(products));