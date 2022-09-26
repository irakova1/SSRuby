let chosenImage=document.getElementById('input-img');

chosenImage.addEventListener('change', (event) =>{
  let image = document.getElementById('output-img');
  image.src = document.getElementById('input-img').value;
})


function isOnline() {
  return window.navigator.onLine;
}

window.addEventListener('offline', () => {console.log('Offline mode')});
let id = 0;


function onSubmit(){
  let news = document.getElementById('text-area');
  let title = document.getElementById('title-input');
  if(news.value.trim() != ''
  && title.value.trim() != ''
  && chosenImage.value.trim() != ''
  )
  {
    let post = {
      title: title.value,
      image: chosenImage.value,
      news: news.value
    }
    id+=1;
    localStorage.setItem(id.toString(), JSON.stringify(post));
    alert('News will have been posted');
    if (isOnline()){
      alert('News are updated')
    }
    else{
      alert('LS will be posted later');
    }
    news.value = '';
    title.value = '';
    chosenImage.value = '';
    console.log(`Post#${id} will have been posted`);
  }
  else{
    alert("All fields are required to be filled!");
  }
}
