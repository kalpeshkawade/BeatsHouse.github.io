const music = new Audio('audio/Popular Songs/2.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Pehle Bhi Main <br><div class="subtitle">Vishal Mishra</div>`,
        poster: "img/Popular Songs/1.jpg"
    },
    {
        id: 2,
        songName: `Satranga <br><div class="subtitle">Arijit Singh </div>`,
        poster: "img/Popular Songs/2.jpg"
    },
    {
        id: 3,
        songName: `Akhiyaan Gulaab <br><div class="subtitle">Mitraz </div>`,
        poster: "img/Popular Songs/3.jpg"
    },
    {
        id: 4,
        songName: `O Maahi <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/Popular Songs/4.jpg"
    },
    {
        id: 5,
        songName: `Chaleya <br><div class="subtitle">Arijit Singh & Shilpa Rao</div>`,
        poster: "img/Popular Songs/5.jpg"
    },
    {
        id: 6,
        songName: `Apna Bana Le <br><div class="subtitle">Arijit Singh & Sachin-Jigar</div>`,
        poster: "img/Popular Songs/6.jpg"
    },
    {
        id: 7,
        songName: `Mere Ghar Ram Aaye Hain <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/Popular Songs/7.jpg"
    },
    {
        id: 8,
        songName: `Teri Baaton Mein Aisa Uljha Jiya  <br><div class="subtitle">Raghav, Tanishk Bagchi & Asees Kaur.</div>`,
        poster: "img/Popular Songs/8.jpg"
    },
    {
        id: 9,
        songName: `Heeriye <br><div class="subtitle">Arijit Singh & Jasleen Royal</div>`,
        poster: "img/Popular Songs/9.jpg"
    },
    {
        id: 10,
        songName: `You and Me <br><div class="subtitle">Shubh</div>`,
        poster: "img/Popular Songs/10.jpg"
    },
    {
        id: 11,
        songName: `One Love <br><div class="subtitle">Shubh</div>`,
        poster: "img/Popular Songs/11.jpg"
    },
    {
        id: 12,
        songName: `Despacito <br><div class="subtitle">Daddy Yankee</div>`,
        poster: "img/Popular Songs/12.jpg"
    },
    {
        id: 13,
        songName: `Shape of You <br><div class="subtitle">Ed Sheeran</div>`,
        poster: "img/Popular Songs/13.jpg"
    },
    {
        id: 14,
        songName: `See You Again <br><div class="subtitle">Charlie Puth</div>`,
        poster: "img/Popular Songs/14.jpg"
    },
    {
        id: 15,
        songName: `Amplifier <br><div class="subtitle">Imran Khan</div>`,
        poster: "img/Popular Songs/15.jpg"
    },
    {
        id: 16,
        songName: `Aaja We Mahiya <br><div class="subtitle">Imran Khan</div>`,
        poster: "img/Popular Songs/16.jpg"
    },
    {
        id: 17,
        songName: `We Don't Talk Anymore <br><div class="subtitle">Charlie Puth</div>`,
        poster: "img/Popular Songs/17.jpg"
    },
    {
        id: 18,
        songName: `Arabic Kuthu <br><div class="subtitle">Anirudh Ravichander & Jonita Gandhi</div>`,
        poster: "img/Popular Songs/18.jpg"
    },
    {
        id: 19,
        songName: `ButtaBomma <br><div class="subtitle">Armaan Malik</div>`,
        poster: "img/Popular Songs/19.jpg"
    },
    // add music copy follow code and give , at end and sequencely id
    {
        id: 20,
        songName: `Mehabooba <br><div class="subtitle">Ananya Bhat</div>`,
        poster: "img/Popular Songs/20.jpg"
    },
    {
        id: 21,
        songName: `Chor <br><div class="subtitle">Justh</div>`,
        poster: "img/Popular Songs/21.jpg"
    },
    {
        id: 22,
        songName: `Dastoor <br><div class="subtitle">Jasleen Royal</div>`,
        poster: "img/Popular Songs/22.jpg"
    },
    {
        id: 23,
        songName: `Dil Jhoom <br><div class="subtitle"> Vishal Mishra , Shreya Ghoshal </div>`,
        poster: "img/Popular Songs/23.jpg"
    },
    {
        id: 24,
        songName: `Dil Kya Kare <br><div class="subtitle">Stebin Ben & Asees Kaur</div>`,
        poster: "img/Popular Songs/24.jpg"
    },
    {
        id: 25,
        songName: `Dil Se Dil Tak <br><div class="subtitle"> Laqshay Kapoor, Akashdeep Sengupta, Suvarna Tiwari</div>`,
        poster: "img/Popular Songs/25.jpg"
    },
    {
        id: 26,
        songName: `Heer Aasmani <br><div class="subtitle">Bpraak,Vishal Dadlani, Sheykhar Ravjiani</div>`,
        poster: "img/Popular Songs/26.jpg"
    },
    {
        id: 27,
        songName: `Sher Khul Gaye <br><div class="subtitle">Benny Dayal,  Shilpa Rao, Vishal & Sheykhar </div>`,
        poster: "img/Popular Songs/27.jpg"
    },
    {
        id: 28,
        songName: `Hum Mile The Jahan <br><div class="subtitle">Mohit Chauhan</div>`,
        poster: "img/Popular Songs/28.jpg"
    },
    {
        id: 29,
        songName: `Husn <br><div class="subtitle">Anuv Jain</div>`,
        poster: "img/Popular Songs/29.jpg"
    },
    {
        id: 30,
        songName: `Love Like That <br><div class="subtitle">Jonita, Ali Sethi</div>`,
        poster: "img/Popular Songs/30.jpg"
    },
    {
        id: 31,
        songName: `Pahadon Mein <br><div class="subtitle">Vishal Mishra</div>`,
        poster: "img/Popular Songs/31.jpg"
    },
    {
        id: 32,
        songName: `Tu Meri Hai  <br><div class="subtitle"> Jigar Saraiya & Shreya Ghosal</div>`,
        poster: "img/Popular Songs/32.jpg"
    },
    {
        id: 33,
        songName: `Laal Peeli Akhiyaan <br><div class="subtitle">Romy and Tanishk Bagchi/div>`,
        poster: "img/Popular Songs/33.jpg"
    },
    {
        id: 34,
        songName: `Leke Prabhu Ka Naam <br><div class="subtitle">Arijit Singh, Nikhita Gandhi</div>`,
        poster: "img/Popular Songs/34.jpg"
    },
    {
        id: 35,
        songName: `90 - 90 Nabbe Nabbe <br><div class="subtitle">Gippy Grewal & Jasmine Sandlas</div>`,
        poster: "img/Popular Songs/35.jpg"
    },
    {
        id: 36,
        songName: `Desh Pehle <br><div class="subtitle">JUBIN NAUTIYAL</div>`,
        poster: "img/Popular Songs/36.jpg"
    },
    {
        id: 37,
        songName: `Nandanandanaa <br><div class="subtitle">Raghav Chaitanya</div>`,
        poster: "img/Popular Songs/37.jpg"
    },
    {
        id: 38,
        songName: `PYAAR BAN GAYE <br><div class="subtitle">Sachet Tandon & Parampara Tandon</div>`,
        poster: "img/Popular Songs/38.jpg"
    },
    {
        id: 39,
        songName: `Ishq-E-Jaan <br><div class="subtitle">Rahat Fateh Ali Khan  </div>`,
        poster: "img/Popular Songs/39.jpg"
    },
    {
        id: 40,
        songName: `Ishare Tere <br><div class="subtitle">Guru Randhawa, Zahrah S Khan</div>`,
        poster: "img/Popular Songs/40.jpg"
    },
    {
        id: 41,
        songName: `Who I Am <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/Popular Songs/41.jpg"
    },
    {
        id: 42,
        songName: ` Oru Manam <br><div class="subtitle">Karthik</div>`,
        poster: "img/Popular Songs/42.jpg"
    },
    {
        id: 43,
        songName: `Bawariya <br><div class="subtitle">Vilen</div>`,
        poster: "img/Popular Songs/43.jpg"
    },
    {
        id: 44,
        songName: `Top Class / Overseas <br><div class="subtitle">Karan aujla</div>`,
        poster: "img/Popular Songs/44.jpg"
    },
    {
        id: 45,
        songName: ` Tera Mera Rishta <br><div class="subtitle">Vishal Mishra, Shaarib & Toshi </div>`,
        poster: "img/Popular Songs/45.jpg"
    },
    {
        id: 46,
        songName: `Halka Halka Sa <br><div class="subtitle">Arijit Singh</div>`,
        poster: "img/Popular Songs/46.jpg"
    },
    {
        id: 47,
        songName: `Bade Miyan Chote Miyan <br><div class="subtitle">Anirudh Ravichander & Vishal Mishra</div>`,
        poster: "img/Popular Songs/47.jpg"
    },
    {
        id: 48,
        songName: `Jeetegaa Toh Jiyegaa  <br><div class="subtitle">Vikram Montrose, Paradox</div>`,
        poster: "img/Popular Songs/48.jpg"
    },
    {
        id: 49,
        songName: `Raghunandana <br><div class="subtitle">Saicharan Bhaskaruni, Lokeshwar Edara, Harshavardhan Chavali</div>`,
        poster: "img/Popular Songs/49.jpg"
    },
    {
        id: 50,
        songName: `Rom Rom <br><div class="subtitle">MC Square and Tanishk Bagchi</div>`,
        poster: "img/Popular Songs/50.jpg"
    },
    {
        id: 51,
        songName: `Saiyyan <br><div class="subtitle">Asim Azhar</div>`,
        poster: "img/Popular Songs/51.jpg"
    },
    {
        id: 52,
        songName: `Kurchi Madathapetti <br><div class="subtitle">Sahithi Chaganti & Sri Krishna </div>`,
        poster: "img/Popular Songs/52.jpg"
    },
    {
        id: 53,
        songName: `Nu King <br><div class="subtitle">Jason Derulo</div>`,
        poster: "img/Popular Songs/53.jpg"
    },
    {
        id: 54,
        songName: `Shivrayancha Chhava <br><div class="subtitle">Kailash Kher</div>`,
        poster: "img/Popular Songs/54.jpg"
    },
    {
        id: 55,
        songName: `Jeena Haraam <br><div class="subtitle">Vishal Mishra, Shilpa Rao</div>`,
        poster: "img/Popular Songs/55.jpg"
    },
    {
        id: 56,
        songName: `Saathiya <br><div class="subtitle">Shreya Ghoshal, Ajay Gogavale</div>`,
        poster: "img/Popular Songs/56.jpg"
    },
    {
        id: 57,
        songName: `Chikni Chameli <br><div class="subtitle">Shreya Ghoshal, Ajay Gogavale</div>`,
        poster: "img/Popular Songs/57.jpg"
    },
    {
        id: 58,
        songName: `Ved Lavlay <br><div class="subtitle">Ajay Gogavale</div>`,
        poster: "img/Popular Songs/58.jpg"
    },
    {
        id: 59,
        songName: `Yad Lagla <br><div class="subtitle">Ajay Gogavle</div>`,
        poster: "img/Popular Songs/59.jpg"
    },
    {
        id: 60,
        songName: `Zingaat  <br><div class="subtitle">Ajay Gogavale & Atul Gogavale</div>`,
        poster: "img/Popular Songs/60.jpg"
    },
]

// Array.from(document.getElementsByClassName('bx')).forEach((e, i) =>{
//     e.getElementsByTagName('background-image')[0].src = songs[i].poster;
//     e.getElementsByTagName('p')[0].innerHTML = songs[i].songName;
// });

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('background-image')[0].src = songs[i].poster;
    e.getElementsByTagName('p')[0].innerHTML = songs[i].songName;
});

// let Kk = document.getElementById('Kk');
let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/Popular Songs/${index}.mp3`;
        poster_master_play.src = `img/Popular Songs/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' , ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=> {
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=> {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=> {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('bx')).length;
    }
    music.src = `audio/Popular Songs/${index}.mp3`;
        poster_master_play.src = `img/Popular Songs/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('bx')).length) {
        index = 1;
    }
    music.src = `audio/Popular Songs/${index}.mp3`;
        poster_master_play.src = `img/Popular Songs/${index}.jpg`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})



// alert("welcome to music world");

document.getElementById('viewAllBtn')
.addEventListener('click', function() {
    var hiddenBoxes = document.querySelectorAll('.box.hidden');
    hiddenBoxes.forEach(function(box) {
      box.classList.remove('hidden');
    });
    document.getElementById('viewAllBtn').style.display = 'none';
  });

  document.getElementById('viewAll')
.addEventListener('click', function() {
    var hiddenctb = document.querySelectorAll('.ctb.hidden');
    hiddenctb.forEach(function(ctb) {
      ctb.classList.remove('hidden');
    });
    document.getElementById('viewAll').style.display = 'none';
  });

  document.getElementById('view')
  .addEventListener('click', function() {
      var hiddenctb = document.querySelectorAll('.bx.hidden');
      hiddenctb.forEach(function(bx) {
        bx.classList.remove('hidden');
      });
      document.getElementById('view').style.display = 'none';
    });


    document.getElementById('vie')
  .addEventListener('click', function() {
      var hiddenctb = document.querySelectorAll('.catb.hidden');
      hiddenctb.forEach(function(catb) {
        catb.classList.remove('hidden');
      });
      document.getElementById('vie').style.display = 'none';
    });

    document.getElementById('vi')
  .addEventListener('click', function() {
      var hiddenctb = document.querySelectorAll('.bt.hidden');
      hiddenctb.forEach(function(bt) {
        bt.classList.remove('hidden');
      });
      document.getElementById('vi').style.display = 'none';
    });

    document.getElementById('v')
  .addEventListener('click', function() {
      var hiddenctb = document.querySelectorAll('.real.hidden');
      hiddenctb.forEach(function(real) {
        real.classList.remove('hidden');
      });
      document.getElementById('v').style.display = 'none';
    });

    document.getElementById('vw')
    .addEventListener('click', function() {
        var hiddenctb = document.querySelectorAll('.cbox.hidden');
        hiddenctb.forEach(function(cbox) {
          cbox.classList.remove('hidden');
        });
        document.getElementById('vw').style.display = 'none';
      });

      document.getElementById('vr')
    .addEventListener('click', function() {
        var hiddenctb = document.querySelectorAll('.book.hidden');
        hiddenctb.forEach(function(book) {
          book.classList.remove('hidden');
        });
        document.getElementById('vr').style.display = 'none';
      });


      document.getElementById('ve')
    .addEventListener('click', function() {
        var hiddenctb = document.querySelectorAll('.radio.hidden');
        hiddenctb.forEach(function(radio) {
          radio.classList.remove('hidden');
        });
        document.getElementById('ve').style.display = 'none';
      });


      document.getElementById('trv')
.addEventListener('click', function() {
    var hiddenmar = document.querySelectorAll('.mar.hidden');
    hiddenmar.forEach(function(mar) {
     mar.classList.remove('hidden');
    });
    document.getElementById('trv').style.display = 'none';
  });



      let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_music = () => {
    if (index == songs.length) {
        index = 1   
    } else {
        index ++;
    }
    music.src = `audio/Popular Songs/${index}.mp3`;
    poster_master_play.src = `img/Popular Songs/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1   
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
    
})



