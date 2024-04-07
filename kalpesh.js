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