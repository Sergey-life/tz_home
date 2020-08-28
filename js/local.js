let inputIn = document.querySelector('.form-control');
let button = document.querySelector('button');
let local = document.querySelector('.local');

button.onclick = function () {
    let value = inputIn.value;
    let input = value;
    let items = input.split(", ");

    function permutator(inputArr) {
        var results = [];

        function permute(arr, memo) {
            var cur, memo = memo || [];

            for (var i = 0; i < arr.length; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    results.push(memo.concat(cur));
                }
                permute(arr.slice(), memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }

            return results;
        }

        return permute(inputArr);
    }

    console.log(permutator(items))
    ul = document.createElement('ul');

    document.getElementById('myItemList').appendChild(ul);

    items.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML += item;
    })

}





