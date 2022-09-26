window.addEventListener('offline', () => {console.log('Offline mode')});

window.addEventListener('online', () => {
  addAppeal ();
})

function isOnline() {
  return window.navigator.onLine;
}

window.onload = () =>{
 if (isOnline()){
  addAppeal();
 } else{
   console.log('LS will be posted later')
 };
}

let id = 0;

function addAppeal(){
  for (let i = 0; i < localStorage.length; i++){
    newAppeal = JSON.parse(localStorage.getItem(localStorage.key(i)));
    document.getElementById("appeals").innerHTML +=
    ' <div class="appeal"><section class="topics"><hr  style="--i:5" class="up-line-card"> <div class="topic-body">' +
    newAppeal.appeal +
    ' </div> <div class="down-string"><span> ' +
    new Date().toLocaleDateString() +
    '</span><span>' +
    newAppeal.author +
    '</span></div></section></div>'
  }
  localStorage.clear();
  alert('Appeals are updated')
}

function onSubmit(){
  let appeal = document.getElementById('text-area');
  let author = document.getElementById('author-input');
  if(appeal.value.trim() != ''
  && author.value.trim() != ''){
    let post = {
      appeal: appeal.value,
      author: author.value,
    }
    id+=1;
    localStorage.setItem(id.toString(), JSON.stringify(post));
    if (isOnline()){
      addAppeal();
    }
    else{
      alert('LS will be posted later');
    }
    appeal = '';
    author = '';
    console.log(`Appeal#${id} will have been posted`);
  }
  else{
    alert("All fields are required to be filled!");
  }
} 

function onClear(){
  appeal.value = '';
  author.value = '';
}
