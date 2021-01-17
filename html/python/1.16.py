def union_find(nodes, edges):
    pre = [0]*len(nodes)     # 记录父节点
    
    for node in nodes:  # 初始化为本身
        pre[node] = node
 
    for u,v in edges:  # 标记父节点
        pre[v] = u
 
    for node in nodes:
        while True:         # 循环，直到找到根节点
            pNode = pre[node]
            if pNode == pre[pNode]:
                break
            pre[node] = pre[pNode]
 
    L = {}
    for i, f in enumerate(pre):
        L[f] = []
    for i, f in enumerate(pre):
        L[f].append(i)
 
    return L
 
 
if __name__ == '__main__':
    nodes = list(range(0, 12))
    test_edges = [[0, 1], [0, 4], [1, 2], [1, 3], [5, 6], [6, 7], [7, 5], [8, 9],[10,11]]
 
    L = union_find(nodes, test_edges)
    print(L)
    print('num of pyq:', len(L))