console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let Masterplay = document.getElementById('Masterplay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs = [
    {songName:"Laung da Lashkara", filepath:"songs/1.mp3", coverPath: "covers/download1.jpg"},
    {songName:"Rang Lageya", filepath:"songs/2.mp3" ,coverPath: "covers/download2.jpg"},
    {songName:"Paniyon Sa", filepath:"songs/3.mp3" ,coverPath: "covers/download3.jpg"},
    {songName:"Chogada Tara", filepath:"songs/4.mp3" ,coverPath: "covers/download4.jpg"},
    {songName:"Main Rang Sharbaton", filepath:"songs/5.mp3" ,coverPath: "covers/download5.jpg"},
    {songName:"Stand By Me", filepath:"songs/6.mp3" ,coverPath: "covers/download6.jpg"},
    {songName:"Udhal Ho", filepath:"songs/7.mp3" ,coverPath: "covers/download7.jpg"},
    {songName:"Tu Hi Mera", filepath:"songs/8.mp3" ,coverPath: "covers/download8.jpg"},
    {songName:"Kajra Re", filepath:"songs/9.mp3" ,coverPath: "covers/download9.jpg"},
    {songName:"Khudaiya Khair", filepath:"songs/10.mp3" ,coverPath: "covers/download10.jpg"},
]
songItems.forEach((element, i)=> {
   element.getElementsByTagName("img")[0].src= songs[i].coverPath;
   element.getElementsByClassName("span")[0].innerText = song[i].songName
})
// audioElement.play();
// Handle play/pause click
Masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Masterplay.classList.remove('fa-play-circle');
        Masterplay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;

    }
    else{
        audioElement.pause();
        Masterplay.classList.remove('fa-pause-circle');
        Masterplay.classList.add('fa-play-circle');
        gif.style.opacity= 0;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
     // Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})  
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     makeAllPlays();
     songIndex= parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src = `songs/${songIndex}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity = 1;
     Masterplay.classList.remove('fa-play-circle');
     Masterplay.classList.add('fa-pause-circle')
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     Masterplay.classList.remove('fa-play-circle');
     Masterplay.classList.add('fa-pause-circle')

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     Masterplay.classList.remove('fa-play-circle');
     Masterplay.classList.add('fa-pause-circle')

})
