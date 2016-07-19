// document.addEventListener('DOMContentLoaded', function () {
//   document.addEventListener('keyup', handleKeyPress)
// })
//
// function handleKeyPress (e) {
//   if (e.which == 81) {
//     movePlayer(1)
//   }
//
//   if (e.which == 80) {
//     movePlayer(2)
//   }
// }
//
// function movePlayer (playerInt) {
//   var row = document.getElementById('player' + playerInt + '_strip')
//   var cell = document.getElementsByClassName('active' + playerInt)
//   var nextCell = row.cells[cell[0].cellIndex + 1]
//
//   checkForVictory(nextCell, playerInt)
//
//   cell[0].className = ''
//   nextCell.className = 'active' + playerInt
// }
//
// function checkForVictory (nextCell, playerInt) {
//   if (nextCell === undefined) {
//     alert('Player ' + playerInt + ' wins!')
//     window.location.reload()
//   }
// }

var socket = io();

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  socket.emit('chat message', document.getElementById('message').value);
  document.getElementById('message').value = ''
})

socket.on('chat message', function(msg) {
  var li = document.createElement('li')
  li.innerHTML = msg
  document.getElementById('messages').appendChild(li)
});
