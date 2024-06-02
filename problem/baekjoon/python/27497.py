# 알파벳 블록
import sys
from collections import deque


def alphabet():
    n = int(sys.stdin.readline())

    order = []
    deq = deque()

    for _ in range(n):
        inputs = sys.stdin.readline().split()

        if int(inputs[0]) == 1:
            deq.append(inputs[-1])
            order.append("b")
        elif int(inputs[0]) == 2:
            deq.appendleft(inputs[-1])
            order.append("f")
        else:
            if len(deq) > 0:
                if order[-1] == "f":
                    deq.popleft()
                    order.pop()
                else:
                    deq.pop()
                    order.pop()
            else:
                continue

    if len(deq) == 0:
        print(0)
    else:
        print("".join(deq))


alphabet()
