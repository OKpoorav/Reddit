const button= document.querySelector('.new button');
const cards =  document.querySelector('.main') 
button.addEventListener('click',(e)=>{
const NewDiv =  document.createElement('div');
NewDiv.innerHTML= `<div class="lane">
            <div class="redditName">
                <h1>R/CarsIndia</h1>
                <div class="post">Dummy 1</div>
                <div class="post">Dummy 2</div>
                <div class="post">Dummy 3</div>
                <div class="post">Dummy 4</div>
            </div>
        </div>`;
cards.appendChild(NewDiv)

})











async function fetchData() {
  const url = "https://www.reddit.com/r/technology.json";

  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error("Error in Fetching Data");
    }
    const json = await data.json();
    console.log(json.data.children[0].data.title);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
