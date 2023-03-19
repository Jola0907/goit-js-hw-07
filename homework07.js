
/////////////zadanie nr 1
const category = document.querySelectorAll("#categories li.item")
console.log("liczba kategori: ", category.length)

category.forEach(el => {
    const podkategoria = el.querySelectorAll(" li")
    const name = el.querySelector("h2").textContent
    console.log("kategoria: ", name)
    console.log("Liczba elementów: ", podkategoria.length)
})
///zadanie nr 2
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const list1 = document.querySelector("#ingredients")
  ingredients.forEach(el => {
    
    let item = document.createElement("li")
    item.textContent = el
    item.classList.add("item")
    list.appendChild(item)

   })
// zadanie nr 3
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  const list = document.querySelector("ul.gallery")
  const fr = document.createDocumentFragment()
    images.forEach(el => {
        
      
      let item = document.createElement("li")
      item.innerHTML = `<img src="${el.url}" alt="${el.alt}">`;
      fr.appendChild(item);
    
    })
    list.appendChild(fr);
    

