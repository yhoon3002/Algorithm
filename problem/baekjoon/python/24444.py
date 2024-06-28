# 알고리즘 수업 - 너비 우선 탐색 1
import sys
from collections import deque

input = sys.stdin.readline

N, M, R = map(int, input().strip().split())
visited = [False] * (N + 1)
graph = [[] for _ in range(N + 1)]

for _ in range(M):
    u, v = map(int, input().strip().split())
    graph[u].append(v)
    graph[v].append(u)

for i in range(1, N + 1):
    graph[i].sort()

queue = deque()
queue.append(R)
visited[R] = True

ans = [0] * (N + 1)
ans[R] = 1
cnt = 1

while queue:
    v = queue.popleft()

    for w in graph[v]:
        if not visited[w]:
            cnt += 1
            visited[w] = True
            ans[w] = cnt
            queue.append(w)


for i in range(1, N + 1):
    print(ans[i])
