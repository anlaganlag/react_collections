const s =  `67   97   69
46   88   96
13   76   49
61   77   86
 4   85   56
25   18   12
27   40   32
20   66   10
17   60   31
16   51   93`
const s1=s.split(" ").map(x=>parseInt(x)).filter(x=>!isNaN(x))
console.log(s1)

s1.sort((a,b)=>a-b)
console.log(s1);