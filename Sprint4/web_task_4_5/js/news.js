function isOnline() {
  return window.navigator.onLine;
}
window.addEventListener('offline', () => {console.log('Offline mode')});

window.addEventListener('online', () => {
  addNews ();
})

window.onload = () =>{
 if (isOnline()){
  addNews();
 } else{
   console.log('LS will be posted later')
 };
}

function addNews(){
  for (let i = 0; i < localStorage.length; i++){
    newPost = JSON.parse(localStorage.getItem(localStorage.key(i)));
    document.querySelector('.topics').innerHTML += 
    ' <div class="card"><hr style="--i:1" class="up-line-card"><div class="topic"><image class="topic-image" src="' +
    newPost.image +
    '" alt="topic image"></image><div class="topic-name">' +
    newPost.title +
    '</div><div class="topic-body">' +
    newPost.news +
    '</div></div></div>'
  }
  localStorage.clear();
  alert('News are updated')
}