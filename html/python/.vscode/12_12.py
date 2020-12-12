def countDigitOne(n: int) -> int:
    cnt = 0
    i = 1
    while n // i:
        h = n//(10*i)
        c = (n//i) % 10
        l = n - (n//i)*i
        if not c:
            cnt+=h*i
        elif c ==1:
            cnt += h*i+l+1
        else:
            cnt += (h+1)*i
        i *= 10
    return cnt

print(countDigitOne(12))