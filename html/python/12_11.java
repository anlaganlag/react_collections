class Solution {
    public int minNumberOfSemesters(int n, int[][] dependencies, int k) {
        int[] pre = new int[n]; // pre[i]表示要修第i门课程需要事先修习的课，用n位的二进制数来表示
        for (int[] dependency : dependencies) {
            dependency[0]--;
            dependency[1]--;
            pre[dependency[1]] |= (1 << dependency[0]);
        }
        int all = 1 << n;
        int[] dp = new int[all];
        for (int i = 0; i < all; i++) dp[i] = n;
        dp[0] = 0;
        for (int state = 0; state < all; state++) {
            int next = 0; // 当前修课状态下接下来能修的课
            for (int i = 0; i < n; i++) if ((state & pre[i]) == pre[i]) next |= 1 << i;
            next &= ~state; // 去重
            for (int sub = next; sub > 0; sub = (sub - 1) & next) { // 枚举所有的子集
                if (Integer.bitCount(sub) <= k) {
                    dp[state | sub] = Math.min(dp[state | sub], dp[state] + 1);
                }
            }
        }
        return dp[(1 << n) - 1];
    }
}