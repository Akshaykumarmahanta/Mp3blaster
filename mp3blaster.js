console.log("well come to mp3 blaster");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let play =document.getElementById('play');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
 let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName:"blue eyes....",filepath:"songs/1.mp3", coverpath:"cover/yo-yo.jpg"},
    {songName:"01 Desi Kalakaar",filepath:"songs/2.mp3", coverpath:"cover/desi-kalakaar.jpg"},
    {songName:"03 Brown Rang",filepath:"songs/3.mp3", coverpath:"cover/yo-yo.jpg"},
    {songName:"One Bottle Down",filepath:"songs/4.mp3", coverpath:"cover/yo-yo.jpg"},
    {songName:"Chaar Bottle Vodka",filepath:"songs/5.mp3", coverpath:"cover/Blue-Eyes-.jpg"},
    {songName:"02 Love Dose",filepath:"songs/6.mp3", coverpath:"cover/yo-yo.jpg"},
    {songName:"01 Lungi Dance",filepath:"songs/7.mp3", coverpath:"cover/yo-yo.jpg"},
    {songName:"03 Party With Bhoothnath",filepath:"songs/8.mp3", coverpath:"cover/bhootnath.jpg"},
    {songName:"Tujh Pe Pyaar",filepath:"songs/9.mp3", coverpath:"cover/yo-yo.jpg"},
    
 ]
  songitems.forEach((element,i)=>{
   
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
 })
play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause' );
    gif.style.opacity = 1; 
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-circle-pause');
    play.classList.add('fa-circle-play' ); 
    gif.style.opacity = 0;
    }
})
// listen to Events
 audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
 //update bar
 progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
//  console.log(progress);
 myprogressbar.value = progress;    
}) 
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src =`songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause' );
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
   // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
   // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
})
