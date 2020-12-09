from collections import defaultdict
pre=[[1,0],[7,0],[7,1],[3,1],[2,1],[3,2],[2,6],[5,2]]
n=8
def canFinish(n ,pre):
    edges = defaultdict(list)
    visited = [0]*n
    cycled = False
    stack = []

    for i in pre:
        edges[i[1]].append(i[0])

    def dfs(i):
        nonlocal cycled
        visited[i] = 1
        for c in edges[i]:
            if not visited[c] :
                dfs(c)
                if cycled:
                    return
            elif visited[c]==1:
                cycled = True
                return
        visited[i] =2
        stack.append(i)

    for i in range(n):
        if not cycled and not visited[i]:
            dfs(i)
    return  stack[::-1]

print(canFinish(n,pre))
