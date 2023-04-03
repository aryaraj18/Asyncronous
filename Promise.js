// Berhasil

// const myFunction = () => {
//     return new Promise((resolve,reject) => {
//         resolve("Halo, ini kondisi true/berhasil")
//     } )
// }

// myFunction() 
// .then((result) => {
//     console.log(result)
// })

// Gagal

// const myFunction = () => {
//     return new Promise((resolve,reject) => {
//         resolve("Halo, ini kondisi false/gagal")
//     } )
// }

// myFunction() 
// .then((result) => {
//     console.log(result)
// })

// dengan if else

// const myFunctionPromise = (param) => {
//     return new Promise( (resolve,reject) => {
//         if(param === 2){
//             resolve("Halo, ini kondisi true/berhasil")
//         }
//         else{
//             reject("Halo, ini kondisi false/gagal")
//         }
//     })
// }

// myFunctionPromise(2)
// .then((result) => {
//     console.log(result)
// }) 
// .catch((error) => {
//     console.log(error)
// })

// Dengan Catch
// const myFunction = () => {
//     return new Promise((resolve, reject) => {
//         reject("hallo, ini kondisi false/gagal")
//     })
// }

// myFunction()
// .catch((error) => {
//     console.log(error)
// })

// dengan AWAIT
async function myFunction(id) {
    let response = await fetch(endpoint + id)
    response = await response.json()
    console.log(response)
} 