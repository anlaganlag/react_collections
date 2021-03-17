#include <stdio.h>
#include <stdlib.h>

int main(){
    // 这里是分配给指针..malloc就是用于内存分配..里面填写的是数字大小
    //比如这里可以就是int的大小乘以3.即可以放入3个整数..
    
    int *num = malloc(sizeof(int)*3);
    // 分别显示移动3喂的数是什么?
    *(num+0) = 5;
    *(num+1) =30;
    *(num+2) =67;

    free(num);
    printf("%d\n",num[0]);
    printf("%d\n",num[1]);
    printf("%d\n",num[2]);
    printf("%d\n",num[3]);
    return 0;

}