// VAR for class= .container. Name: container. 
let container = document.querySelector(".container");

// An Array containing a JavaScript Object. Data used to create html elements.
let dogs = [{ name: "BICHON FRISE", image: "https://fwkc-cloudinary.corebine.com/fwkc-production/image/upload/b_transparent,c_pad,dpr_1.25,f_webp,g_center,q_auto,w_768/v1/fwkc/import/1012", description: "The Bichon originated in the Mediterranean area. They appeared in Italy and then Spain where painters often included them in their works. They were also popular in France and Belgium where they became nobility favorites during the Renaissance era. The breed was introduced into the United States in the 1950's, received AKC recognition in 1973 and has since become highly successful in the show ring. The Bichon excels in Obedience and Agility and has established himself as an outstanding therapy dog. With his outgoing personality and social attitude, the Bichon has historically been known as a fine companion dog.", webpage: "https://www.westminsterkennelclub.org/breeds/bichon-frise" }, 
{ name: "AKITA", image: "https://fwkc-cloudinary.corebine.com/fwkc-production/image/upload/b_transparent,c_pad,dpr_1.25,f_webp,g_center,q_auto,w_768/v1/fwkc-prod/Nik_WKC_AkitaBreedImage_1", description: "A national monument in Japan, the akita’s proud heritage includes hunting large game such as bear, elk and boar. This powerful and dignified member of the working group is renowned for courage and loyalty, but may not be tolerant of other animals. His luxurious double-coat can include any combination of vibrant colors. Aloof toward strangers, they form strong family bonds. Highly intelligent with a keen sense of humor, the akita responds best to respectful commands and training techniques that rely on motivation rather than force. Strong-willed and proud, akitas are not receptive to abusive methods.", webpage: "https://www.westminsterkennelclub.org/breeds/akita" }, 
{name: "BULLDOG", image: "https://fwkc-cloudinary.corebine.com/fwkc-production/image/upload/b_transparent,c_pad,dpr_1.0,f_webp,g_center,q_auto,w_768/v1/fwkc/import/1016", description: "Despite common misconception this breed is simply called the ‘Bulldog’, not English, nor British. In contrast to his historical beginnings, today’s Bulldog is fun-loving, affectionate and well-rounded. Though originally bred for the brutal sport of bull baiting, today the Bulldog is represented in the ‘Non Sporting Group’ which is comprised of multi-purpose companionable breeds. With his classic, beloved sour-mug and his sturdy, muscular frame he has been selected the perfect mascot for many sports teams and businesses. He is often owner-handled in the show ring due to his less complex grooming needs and more unique presentation style.", webpage: "https://www.westminsterkennelclub.org/breeds/bulldog"
}];

// Console.log the arrayVariableName to view the independet elements within it and in this case each independent element will list the name, Image, description and webpage properties along with their values.
console.log(dogs);


// Created Loop: Dogs [arrayVariableName] - To iterate over the array.
// The initializer referenceS the index of the elements within THE Array. The contidition: i < dogs.length. The afterthough: i++ . 
for (let i = 0; i < dogs.length; i++) {
//console.log the elements contained in the Array.
    console.log(dogs[i])
    console.log(dogs[i].name)
    console.log(dogs[i].image)
    console.log(dogs[i].description)

    // Created the HTML elements using JavaScript. 
    // Created a div element and assigned it to a variable using: document.createElement("div").
    // Added: setAttribute and textContent accordingly.
    // Confirmed each with console.log.
    let div = document.createElement("div");
    console.log(div);
    div.setAttribute("class", "bt-white");
    let h2 = document.createElement("h2");
    h2.textContent = dogs[i].name;
    console.log(h2);
    let img = document.createElement("img");
    console.log(img);
    img.setAttribute("src", dogs[i].image);
    console.log(img);
    let p = document.createElement("p");
    p.textContent =dogs[i].description;
    console.log(p);
    let a = document.createElement("a");
    a.setAttribute("href", dogs[i].webpage);
    a.textContent =dogs[i].name+" webpage";
    console.log(a);

    // Append div with elements 
    // Confirm div with console.log 
    div.append(h2);
    div.append(img);
    div.append(p);
    div.append(a);
    console.log(div);

    // Append div to the container
    container.append(div);
    
};


































































// let body= document.querySelector ("body");
// console.log(body);
// body.style.background = "#686868";
// body.style.display = "flex";
// body.style.flexWrap = "wrap";

// let container= document.querySelector (".container");
// console.log(container);
// container.style.display = "inline-block";
// container.style.maxWidth = "25%";
// container.style.background = "whitesmoke";
// container.style.border = "5px solid #000000";

// let headerOne= document.querySelectorAll ("h1"); // [h1, h1]

// console.log(headerOne);
// h1.style.fontFamily = ("georgia");
// h1.style.textAlign = ("center");




// let img= document.querySelectorAll ("img");
// img.style.width = ("100%");
// img.style.height = ("250px");
// img.style.borderTop = ("3px #000000 solid");
// img.style.borderBottom = ("3px #000000 solid");
// img.style.margin = ("none");

// let p= document.querySelectorAll ("p");
// p.style.fontFamily = ("arial-narrow");
// p.style.fontSize = ("x-small");
// p.style.padding = ("5px");
// p.style.background = ("lightgray");

// let a= document.querySelectorAll ("a");
// a.style.textDecoration = ("none");
// a.style.fontFamily = ("Cambria");
// a.style.fontSize = ("small");
// a.style.fontWeight = ("400");
// a.style.color = ("blue");





