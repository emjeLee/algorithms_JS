const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(item=>item);

solution(input);

function solution(numbers) {
    const C = +numbers[0]
    for(let i=1; i<=C; i++){
        let count = 0;
        const scoreArr = numbers[i].split(' ').map(item=>+item) // 값들을 배열에 숫자로 담아준다
        scoreArr.shift(); // 첫 번째 값 제거
        const sum = scoreArr.reduce((acc, curr) => {
            return acc + curr;
        },0);
        const avg = sum / scoreArr.length;
        scoreArr.forEach(el => {
            if(el > avg){
                count++;
            } 
        })
        const result = ((count / scoreArr.length) * 100).toFixed(3);
        console.log(`${result}%`);
    } 
}

// 첫째값 제거하지않고 할 수 있는방법 찾아보기
// .length 를 쓰면 메모리를 더 잡아 먹는 거 같다