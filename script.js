const BLACK_KEYS = ['s', 'd','g', 'h', 'j'];
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const blackKeys = document.querySelectorAll('.black.key');
const whiteKeys = document.querySelectorAll('.white.key');

const keys = document.querySelectorAll('.key');

const playNote = key =>{
    let audioNote = document.querySelector(`#${key.dataset.note}`);
    // let audioNote = document.getElementById(key.dataset.note);
    audioNote.currentTime = 0;
    audioNote.play();
    key.classList.add('active');
    audioNote.addEventListener('ended', () => key.classList.remove('active'));
}
document.addEventListener('keydown', e =>{
    if(e.repeat) return;
    const keypressed = e.key;
    const whitekeyIndex = WHITE_KEYS.indexOf(keypressed);
    const blackkeyIndex = BLACK_KEYS.indexOf(keypressed);
    
    if (whitekeyIndex > -1 ) playNote(whiteKeys[whitekeyIndex]);
    if (blackkeyIndex > -1 ) playNote(blackKeys[blackkeyIndex]);

})
keys.forEach( key => key.addEventListener ('click',()=>playNote(key)))