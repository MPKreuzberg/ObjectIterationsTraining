

const animals = {
    chicken: "Gertrude",
    pig: "Henry",
    sheep: "Melvin",
    rabbit: "Billy"
}
let animals1 = Object.keys(animals) // [ 'chicken', 'pig', 'sheep', 'rabbit' ]

let names = Object.values(animals) //[ 'Gertrude', 'Henry', 'Melvin', 'Billy' ]


// for (let i = 0; i < animals1.length; i++) {
//     let randomIndex = Math.floor(Math.random() * names.length)
//     let randomName = names[randomIndex]
//     let randomAnimal = animals1[i]
//     console.log(`${randomName} is a ${randomAnimal}`)
//   }
  

for (let animal of animals1) {
    let randomAnimal = Math.floor(Math.random() * names.length)
    let randomName = names[randomAnimal]
    console.log(`${randomName} is a ${animal}`)
  }

 