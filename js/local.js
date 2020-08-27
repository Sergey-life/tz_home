let inputIn = document.querySelector('.form-control');
let button = document.querySelector('button');
let local = document.querySelector('.local');

button.onclick = function () {
    let value = inputIn.value;
    let b = value;
    let a = b.split(", ");
    console.log(a.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x));
    local.innerHTML = a.map(x => [Math.random(), x]).sort(([a], [b]) => a - b).map(([_, x]) => x);
}





