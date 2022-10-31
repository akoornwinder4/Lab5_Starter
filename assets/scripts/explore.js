// explore.js
//explore 

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis; 
  const text = document.getElementById('text-to-speak');
  const voiceselect = document.getElementById('voice-select');
  const voicebutton = document.querySelector('button');
  const smileyface = document.querySelector('img[alt="Smiling face"]');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceselect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function speak(text) {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceselect.selectedOptions[0].getAttribute('data-name');
    utterThis.text = text;
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name == selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    utterThis.addEventListener('end', (event) => {
      smileyface.src = 'assets/images/smiling.png';
    })
    

    // if(synth.speaking){
    //   setTimeout(10);
    // } else{
    //   smileyface.src = 'assets/images/smiling.png';
    // }
  }

  voicebutton.addEventListener('click', (event) => {
    smileyface.src = 'assets/images/smiling-open.png';
    speak(text.value);
  });

}