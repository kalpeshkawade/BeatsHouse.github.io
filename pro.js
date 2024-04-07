let pla = document.getElementById("pla");
function playmusic(){
    let audio = new Audio("YAAR_DUA__MAMTA_SHARMA__DIPIKA_K_IBRAHIM__SHOAIB_IBRAHIM__BADASH__NEW_HINDI_SONG_2021(256k).mp3");
    audio.pla();
    
}
pla.addEventListener("click" ,playmusic);

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







      // =================================

      const music = new Audio('audio/1.mp3');
music.play();

const songs = [
    {
        id: 1,
        songName: `<p>Pahadon Mai</p>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Let Me Love You <br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Faded <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Bulleya <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Dheere Dheere <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Desi Kalaakar <br><div class="subtitle">Honey Singh</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/19.jpg"
    },
    // add music copy follow code and give , at end and sequencely id
    {
        id: 20,
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/20.jpg"
    }
]

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