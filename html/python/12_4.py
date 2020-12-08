from collections import defaultdict
p=[[1,0],[7,0],[7,1],[3,1],[2,1],[3,2],[2,6],[5,2]]
n=8
def canFinish(n ,p):
    e = defaultdict(list)
    visitedArray = n*[0]
    ans = []
    flag = True

    for i in p:
        e[i[1]].append(i[0])
    
    def dfs(dfsNode):
        nonlocal flag
        visitedArray[dfsNode]=1
        for alNode in e[dfsNode]:
            if visitedArray[alNode] ==0:
                dfs(alNode)
                if flag == False:
                    return
            elif visitedArray[alNode] ==1:
                flag = False
                return
        visitedArray[dfsNode] =2
        ans.append(dfsNode)

    for travasNode in range(n):
        if flag == True and visitedArray[travasNode]==0:
            dfs(travasNode)
    return ans[::-1]

print(canFinish(n,p))