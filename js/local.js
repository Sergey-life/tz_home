let inputIn = document.querySelector('.form-control');
let button = document.querySelector('button');

button.onclick = function () {
    const box = document.querySelector('#box')

    if (box.checked)  {

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

        const div = document.getElementById('container')
        const list = permutator(items)

        list.forEach(i => {
            const el = document.createElement('p')

            el.textContent = i.toString()

            div.appendChild(el)
        })
    }
}


