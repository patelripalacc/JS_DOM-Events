console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(“node1”) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let allH3 = document.getElementsByTagName("h3");
for (let h3 of allH3){
    h3.textContent = "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let myNewP = document.createElement("p");
myNewP.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let myParent = document.querySelector("#parent");
myParent.appendChild(myNewP);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let myNewA = document.createElement("a");
myNewA.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>
myNewA.href = "https://google.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
myParent.insertBefore(myNewA,myNewP);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newP = document.createElement("p");
newP.textContent = "New Child Node";
let oldP = document.querySelector("#N1");
let parent1 = document.querySelector("#exercise-container3");
parent1.replaceChild(newP,oldP);

// TODO: Remove the "New Child Node"
parent1.removeChild(newP);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM
let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
list.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    // TODO: Append the new list items to the unordered list element
    ul.appendChild(li);
});


// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show(){
    // This div should be a 'modal' that covers the main content on the screen
    let modal = document.createElement("div");          
    let modalCard = document.createElement("div");
    let p = document.createElement("p");
    let closeBtn = document.createElement("button");
    let h2 = document.createElement("h2")
    modal.style.textAlign = "center";
    closeBtn.style.color = "red";
    
    closeBtn.textContent = "X";
    h2.textContent = "Modal Header";
    // -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
    p.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    
    modalCard.appendChild(h2);
    modalCard.appendChild(p);
    modalCard.appendChild(closeBtn);
    
    modal.id = "modal";
    modalCard.classList.add("modal-card");
    
    modal.appendChild(modalCard);
    document.body.appendChild(modal);
    // BONUS: The modal popup should be able to be closed. Refactor for this functionality
    closeBtn.addEventListener("click",()=>{
        document.body.removeChild(modal);
    });

    // modal.addEventListener("click",()=>{
    //     document.body.removeChild(modal);
    // });
}

let button = document.querySelector("#btn");
button.addEventListener("click",show);

