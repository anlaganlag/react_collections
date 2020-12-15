    def maxLevelSum(self, root: TreeNode) -> int:
        ans = []
        def bfs(n):
            if  n:
                q  = [n]
                while q:
                    tmp =[]
                    nq = []
                    for i in q:
                        tmp.append(i.val)
                        if i.left:
                            nq.append(i.left)
                        if i.right:
                            nq.append(i.right)
                    q = nq
                    ans.append(sum(tmp))
        bfs(root)
        return ans.index(max(ans))+1

    