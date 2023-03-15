let users= [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
      age: 37
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
      age: 34
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
      age: 24
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
      age: 21
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
      age: 27
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
      age: 38
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
      age: 39
    }
  ]
//   const getActivUsers = (users) => {
//     //let friend = users.flatMap(user => user.friends)
//     let filterFriend = friend.filter(() => friend.indexOf(item) === index)
//     return filterFriend
//   };
//   console.log(getFriends(users))
//   const getActiveUsers = (users) => {
    
//     let activUsers = users.filter(activ => activ.isActive)
//     let finish = activUsers.flatMap( el => el.name)
//     return finish
   
// //   };

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line
// releaseDates.sort((a,b)=> {

// const ascendingReleaseDates =[...releaseDates].sort()

// const descendingReleaseDates =[...releaseDates].sort()
// })
// /////////////zadanie nr 1
// const category = document.querySelectorAll("#categories li.item")
// console.log("liczba kategori: ", category.length)

// category.forEach(el => {
//     const podkategoria = el.querySelectorAll(" li")
//     const name = el.querySelector("h2").textContent
//     console.log("kategoria: ", name)
//     console.log("Liczba elementów: ", podkategoria.length)
// })
//zadanie nr 2
// const ingredients = [
//     "Potatoes",
//     "Mushrooms",
//     "Garlic",
//     "Tomatos",
//     "Herbs",
//     "Condiments",
// //   ];
// //   const list = document.querySelector("#ingredients")
// //   ingredients.forEach(el => {
    
// //     let item = document.createElement("li")
// //     item.textContent = el
// //     item.classList.add("item")
// //     list.appendChild(item)

// //   })
// // zadanie nr 3
// const images = [
//     {
//       url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat",
//     },
//     {
//       url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//     },
//     {
//       url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running",
//     },
//   ];
//   const list = document.querySelector("ul.gallery")
//   const fr = document.createDocumentFragment()
//     images.forEach(el => {
        
      
//       let item = document.createElement("li")
//       item.innerHTML = `<img src="${el.url}" alt="${el.alt}">`;
//       fr.appendChild(item);
    
//     })
//     list.appendChild(fr);
    

