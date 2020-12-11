from collections import deque as dq

def foo( s: str) -> str:
        r = dq([])
        d = dq([])
        n = len(s)
        for i in range(n):
            if s[i]=='R':
                r.append(i)
            else:
                d.append(i)
        while r and d:
            r_ = r.popleft()
            d_ = d.popleft()
            if r_<d_:
                r.append(r_+n)
            else:
                d.append(d_+n)
        return "Dire" if not r else "Radiant"
s1 ="RDD"

print(foo(s1))
