function *g1(){
        console.log("你好");
        yield 'Yield 1正在运行';
        console.log('最好的P')
        yield 'Yield 2正在运行'
        return '返回'
}

var g = g1 ()
let c = 0
for (let val of g) {
    c++
    console.log(val,`第${c}次运行`)
}