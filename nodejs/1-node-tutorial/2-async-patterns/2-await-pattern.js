const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))


/*
const {readFile, writeFile} = require('fs').promises;

//added ".promises" to first line, which allowed us to comment out the following
//const util = require('util');
//const readFileFilePromise = util.promisify(readFile)
//const writeFileFilePromise = util.promisify(writeFile)

    const start = async() => {
        try{
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        
        await writeFile(
            './content/result-mind-grenade.txt',
             `I'M  not WRITING TO A FILE : ${first} ${second}`,
             { flag: 'a' },     (err) =>{ 
                if (err){
                console.log(err);
                }else{
                    console.log('wrote to file');
                }
             }
        )
        console.log(first)
        console.log(second) //console.log(first, second)
        
        }
        catch(error){
            console.log(error)
        }
     }
    start()


     //two different ways to create a promise and use it
     //second solution adds utilities for a shorter program

//    getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

//  const getText = (path) => {
//     return new Promise((resolve)=>{
//         readFile(path,'utf8',(err,data)=> {
//             if(err){
//                 reject(err)
//             }
//             else {
//                 console.log(data)
//             }
//         })
//     })
// }
*/