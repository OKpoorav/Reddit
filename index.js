const button= document.querySelector('.new button');
const cards =  document.querySelector('.main') 
const input =  document.querySelector('.Input')
const nameR  = document.querySelector('.main');

nameR.addEventListener('keydown',(e)=>{
    if(e.target.matches('.Input')){
    console.log('hi');
    

if(e.key==="Enter"){
    const laneElement = e.target.closest('.lane'); 
    e.target.outerHTML = `<h1>R/${e.target.value}</h1>`;
    
   
    
    
    fetchData(e.target.value,laneElement)

    
}
}
})
button.addEventListener('click',(e)=>{
const NewDiv =  document.createElement('div');
NewDiv.innerHTML= ` <div class="lane">
            <div class="redditName">
                <input type="text" placeholder="Enter Name" class="Input">
                <div class="post">Dummy 1</div>
                <div class="post">Dummy 2</div>
                <div class="post">Dummy 3</div>
                <div class="post">Dummy 4</div>
            </div>
        </div>`;
cards.appendChild(NewDiv)


})

async function fetchData(name,container) {
  const url = `https://www.reddit.com/r/${name}.json`;

  try {
    const data = await fetch(url);
    if (!data.ok) {
      throw new Error("Error in Fetching Data");
    }
    const json = await data.json();
const posts =  container.querySelectorAll('.post');

    for (let i = 0; i < posts.length && i < json.data.children.length; i++) {
        let title = json.data.children[i + 1].data.title;
        let selftext = json.data.children[i + 1].data.selftext;
        let url = json.data.children[i + 1].data.url;

    
        selftext = selftext.replace(/https?:\/\/\S+/g, '');
    
        let mediaContent = '';
        if (/\.(jpg|jpeg|png|gif)$/i.test(url)) {
            mediaContent = `<img src="${url}" alt="Image">`;
        } else if (/\.(mp4|webm)$/i.test(url)) {
            mediaContent = `<video controls>
                                <source src="${url}" type="video/${url.split('.').pop()}">
                                Your browser does not support the video tag.
                            </video>`;
        } else {
            mediaContent = `<a href="${url}" target="_blank">View Post</a>`;
        }
    
        posts[i].innerHTML = `
            <div class='Title'>${title}</div>
            <div class='content'>${selftext}</div>
            ${mediaContent}
        `;
    }
    // console.log(json.data.children[0].data.title);

  } catch (error) {
    console.error(error);
  }
}

