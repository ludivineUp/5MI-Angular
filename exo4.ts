function delay(ms: number) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}
function timeout(ms: number, promise : Promise) {
    return new Promise(function (resolve, reject) {
        promise.then(resolve);
        setTimeout(function () {
            reject(new Error(`Timeout after ${ms} ms`));
        }, ms);
    });
}

function testNum(x : number){
  return new Promise((resolve, reject) => {
     if(x > 10)
            resolve(" > 10");
        else
            reject("<= 10");
  });
}
testNum(12).then(result => console.log(result)).catch(err => console.log("Error"));

let mots = ["des mots","piment","cafe","abricot"];
const sortTabString = (tab) =>{tab.sort()};
sortTabString(mots);
const toutMaj = (tab) =>{
    return new Promise((resolve, reject) =>{
        let maj = tab.map(e =>{
            if(typeof e === "string")
                return e.toUpperCase();
            else
                reject("Not only string in tab");
            });
        resolve(maj);
    });
};

toutMaj(mots).
    then((result)=>console.log(result)).
    catch((err)=>console.log(err));


const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (array) => {
   return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if(typeof word === 'string'){
        return word.toUpperCase()
      } else {
        reject('Error: Not all items in the array are strings!')
      }
    })
    resolve(capsArray)
  })
}
 const sortWords = (array) => {
   return new Promise((resolve, reject) => {
     if(array) {
       array.forEach((el) => {
         if(typeof el !== 'string'){
           reject('Error: Not all items in the array are strings!')
         }
       })
       resolve(array.sort());
     } else {
       reject('Error: Something went wrong with sorting words.') 
     }
 })
} 

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
  
makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))



