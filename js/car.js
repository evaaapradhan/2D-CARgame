var score=0;

var race= new Audio();
var crash = new Audio();
race.src="audio/Racing.mp3";
crash.src="audio/crash.mp3";
race.play();
document.addEventListener('DOMContentLoaded', function() {
    
   
     document.addEventListener('keydown', function(e) {
         if (e.key == 'ArrowLeft') {
             MoveLeft()
         }
         if (e.key == 'ArrowRight') {
             MoveRight()
         }
        
     })

     function MoveLeft() {
         hero = document.querySelector('#hero')
         leftPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
         leftPos -= 100;
         if (leftPos >= 0) {
             console.log(hero)
             hero.style.left = leftPos + 'px';
         }
       
     }



     function MoveRight() {
         hero = document.querySelector('#hero')
         rightPos = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
         rightPos += 100;
         if (rightPos < 300) {

             hero.style.left = rightPos + 'px';
         }

     }
     road = document.querySelector('#road')
     villian = document.querySelector('#villian')
     document.addEventListener('animationiteration', function() {
         randomNumber = Math.floor(Math.random() * 3) * 100
         villian.style.left = randomNumber + 'px';
     })
     checkDead = setInterval(function() {
         heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue('left'))
         villianLeft = parseInt(window.getComputedStyle(villian).getPropertyValue('left'))
         villiantop = parseInt(window.getComputedStyle(villian).getPropertyValue('top'))
         score++
         
         if (heroLeft == villianLeft && villiantop >= 400) {
            crash.play();
             alert('Game Over! RELOAD TO RESTART! Your SCORE is ' + score)
             document.querySelector('#score').innerHTML = 'Score: ' + score
             
             villian.style.animation = 'none';
             road.style.animation = 'none';
             villian.style.top = villiantop + 'px'
             console.log(villiantop) 
             clearTimeout(checkDead)
             window.location.reload();
             
         }
     }, 100)



 })