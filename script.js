
const extraDate = document.querySelector('#current-date');

const date = Date();
let dateString = date.split(' ');
let today = `${dateString[0]}, ${dateString[2]}-${dateString[1]}-${dateString[3]}`;

extraDate.innerHTML = today;