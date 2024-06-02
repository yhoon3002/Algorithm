# 식당 입구 대기 줄
import sys


def line():
    n = int(sys.stdin.readline())

    # 현재의 줄 상태
    queue = []
    # 줄을 서서 대기하는 학생 수가 최대가 되었을 때의 학생 수
    count = 0
    # 줄을 서서 대기하는 학생 수가 최대가 되었을 때의 식당 입구의 맨 뒤에 대기 중인 학생의 번호
    last = 0

    for _ in range(n):
        inputs = list(map(int, sys.stdin.readline().split()))

        if len(inputs) == 1:
            # 맨 앞쪽 사람 빼내기
            queue.pop(0)
        else:
            # 줄 맨 뒤에 사람 세우기
            queue.append(inputs[1])

        if count < len(queue):
            count = len(queue)
            last = queue[-1]
        elif count == len(queue):
            if last > queue[-1]:
                last = queue[-1]

    print(count, last)


line()


# 맨 처음 안된 코드
# def line():
#     n = int(input())

#     # 현재의 줄 상태
#     queue = []
#     # 줄을 서서 대기하는 학생 수가 최대가 되었을 때의 학생 수
#     count = 0
#     # 줄을 서서 대기하는 학생 수가 최대가 되었을 때의 식당 입구의 맨 뒤에 대기 중인 학생의 번호
#     last = 0

#     for _ in range(n):
#         inputs = input()

#         if len(inputs) == 1:
#             # 맨 앞쪽 사람 빼내기
#             queue.pop(0)
#         else:
#             # 줄 맨 뒤에 사람 세우기
#             queue.append(inputs.split(" ")[1])

#         if count < len(queue):
#             count = len(queue)
#             last = queue[-1]
#         elif count == len(queue):
#             if last > queue[-1]:
#                 last = queue[-1]

#     print(count, last)


# line()
