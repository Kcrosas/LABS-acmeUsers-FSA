const faker = require("faker");
//console.log(faker.helpers.userCard(50));
const ul = document.querySelector("#user-list");
const generator = require("./generator");

const users = generator(10);

const render = () => {
  const chosenNumber = window.location.hash.slice(1) * 1;
  const html = users
    .map((user, idx) => {
      console.log(chosenNumber);
      return `
        <li> 
         <a href=#${idx}>${user.name}</a><br> 
         ${chosenNumber === idx ? `<div>${JSON.stringify(user)}</div>` : ``}
         </li>          
        `;
    })
    .join("");
  ul.innerHTML = html;
};
render();
/* const firstRender = () => {
  const chosenNumber = window.location.hash.slice(1) * 1;
  const html = users
    .map((user, idx) => {
      console.log(chosenNumber);
      return `
          <li> 
           <a href=#${idx}>${user.name}</a><br> 
           ${chosenNumber === idx ? `<div>${user.phone}</div>` : ``}
           </li>          
          `;
    })
    .join("");
  ul.innerHTML = html;
};

firstRender(); */

window.addEventListener("haschange", () => {
  console.log("inside event listener");
  render();
});
