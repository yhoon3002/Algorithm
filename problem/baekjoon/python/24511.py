# questack
# 실패
import sys
from collections import deque


def queuestack():
    # 자료구조의 개수
    n = int(sys.stdin.readline())

    # 0: 큐 / 1: 스택
    # 0 : FIFO / 1 : FILO
    a = list(map(int, sys.stdin.readline().split()))
    b = list(map(int, sys.stdin.readline().split()))
    m = int(sys.stdin.readline())
    c = list(map(int, sys.stdin.readline().split()))

    x = c[0]

    for i in a:
        if a[i] == 0:
            x = a[i]


queuestack()
