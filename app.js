let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#Reset');
// let newgamebtn = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;
const winpatterns = [
 [0, 1, 2],
 [0, 3, 6],
 [0, 4, 8],
 [1, 4, 7],
 [2, 5, 8],
 [2, 4, 6],
 [3, 4, 5],
 [6, 7, 8],
];
