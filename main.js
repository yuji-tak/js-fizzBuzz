// ボタンに対する挙動を定義
function clickBtn() {
    
    // 正規表現：整数
    const pattern = /^([1-9]\d*|0)$/;
    // 入力された値(name属性で取得)
    const rawFizz = document.form.FizzNum.value;
    const rawBuzz = document.form.BuzzNum.value;

    // 正規表現を用い、小数入力時にalertを表示
    if (pattern.test(rawFizz) && pattern.test(rawBuzz)) {
        // ローカル変数にしない為、宣言を使用せず
        fizzNum = parseInt(rawFizz);
        buzzNum = parseInt(rawBuzz);
    } else {
        alert('整数を入力してね');
    }

    // 下記、関数処理をHTMLへ代入していく為の処理
    const target = document.getElementById('output_innner');
    // 関数を定義し、条件分岐で処理を実行
    function fizzBuzz() {
        // 元テキストを削除
        target.innerHTML = '';

        for (let i = 1; i < 100; i++) {
            if (i % fizzNum == 0 && i % buzzNum == 0) {
                target.innerHTML += 'FizzBuzz\t' + i + '<br>';

            } else if (i % fizzNum == 0) {
                target.innerHTML += 'Fizz\t' + i + '<br>';

            } else if (i % buzzNum == 0) {
                target.innerHTML += 'Buzz\t' + i + '<br>';
            }
        }
    }
    fizzBuzz();
};

// //  条件分岐：パターン①
// function fizzBuzz() {
//     for (var i = 1; i < 100; i++) {
//         if (i % 4 == 0 && i % 6 == 0) {
//             console.log('FizZBuzz' + i);
//             // document.write('FizZBuzz' + i);
//         } else if (i % 4 == 0) {
//             console.log('Fizz' + i);
//         } else if (i % 6 == 0) {
//             console.log('Buzz' + i);
//         }
//     }
// }
//     // fizzBuzz();

// buttonの処理例
// const btn = document.querySelector('#btn');
// const output = function() {
//     alert('hello');
// };
// btn.addEventListener('click', output);

// // 【】修正
// // 正規表現を用い、小数入力時にalertを表示
// if (pattern.test(rawFizz)) {
//     // ローカル変数にしない為、宣言を使用せず
//     fizzNum = parseInt(rawFizz);
//     // console.log(fizzNum);
// } else {
//     alert('整数を入力してね');
// }
//         // ※検討したこと
//         // parseInt()　Number.isInteger()

// if (pattern.test(rawBuzz)) {
//     buzzNum = parseInt(rawBuzz);
//     // console.log(buzzNum);
// } else {
//     alert('整数を入力してね');
// }