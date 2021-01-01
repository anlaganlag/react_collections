const h = () => {}





//执行时 绑定了h和0...
//g是内部的生成的会被销毁..
//即首次执行时记住了h和x=0
const f = (fn,x) => {
    const g = () => console.log(x)
    if (x<1){
        f(g,1)
    }else {
        fn()
    }
    
}
f(h,0)

// console.log(f(h,0))