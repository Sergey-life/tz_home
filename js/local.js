let inputIn = document.querySelector('.form-control');
let button = document.querySelector('button');
let local = document.querySelector('.local');

button.onclick = function () {
    let value = inputIn.value;
    let b = value;
    let a = b.split(", ");

    function shuffle(array) {
        var rand, index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
            rand = Math.floor(Math.random() * (index + 1));
            result[index] = result[rand];
            result[rand] = array[index];
        }
        return result;
    }
    local.innerHTML = shuffle(a)
    console.log(shuffle(a));
}





