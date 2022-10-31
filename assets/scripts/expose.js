// expose.js
//explore

window.addEventListener('DOMContentLoaded', init);

function init() { 
  // TODO
  const myselect = document.getElementById("horn-select");
  myselect.addEventListener('change', (event)=>{
    const myimg = document.querySelector('img[alt="No image selected"]');
    myimg.src = `assets/images/${event.target.value}.svg`;
    
    const myaud = document.getElementsByClassName("hidden");
    myaud.src = `assets/audio/${event.target.value}.mp3`;
  });

  const vol = document.getElementById("volume");
  vol.addEventListener('input', (event) => {
    const volIcon = document.querySelector('img[alt="Volume level 2"]');
    //const volSet = document.
    if(vol.value == 0){
      volIcon.src = 'assets/icons/volume-level-0.svg'
    } else if (1 <= vol.value  && vol.value < 33){
      volIcon.src = 'assets/icons/volume-level-1.svg'
    } else if ( 33 <= vol.value && vol.value < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg'
    } else {
      volIcon.src = 'assets/icons/volume-level-3.svg'
    }
  })

  const myaud = document.getElementsByClassName("hidden");
  const soundbutton = document.querySelector('button');
  const confetti = new JSConfetti();
  soundbutton.addEventListener('click', ()=>{
    const aud = new Audio(myaud.src);
    aud.volume = vol.value / 100;
    aud.play();
    if(myaud.src == 'assets/audio/party-horn.mp3'){
      confetti.addConfetti();
    }
  })

}

