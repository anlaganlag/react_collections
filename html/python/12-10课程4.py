class Solution:
    def checkIfPrerequisite(self, n: int, pre: List[List[int]], q: List[List[int]]) -> List[bool]:
        al = collections.defaultdict(list)
        m = {}

        for a,b in pre:
            al[b].append(a)
        
        def isPre(a,b):
            if a==b:
                return True
            if (a,b) in m:
                return m [(a,b)]
            for t in al[b]:
                if isPre(a,t):
                    m[(a,t)] = True
                    return True
            m[(a,b)] = False
            return False

        return [isPre(a,b) for a,b in q]