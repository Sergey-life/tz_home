let inputIn = document.querySelector('.form-control');
let button = document.querySelector('button');
let local = document.querySelector('.local');

button.onclick = function () {
    let value = inputIn.value;
    let b = value;
    let a = b.split(", ");

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

    local.innerHTML = permutator(a)
}





