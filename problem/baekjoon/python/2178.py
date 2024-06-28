# 미로 탐색
from collections import deque

N, M = map(int, input().split())

board = []
for _ in range(N):
    board.append(list(input()))

# board는 0, 0에서 N - 1, M - 1로 이동해야함

visited = [[False] * M for _ in range(N)]
ans = [[0] * M for _ in range(N)]

queue = deque()
queue.append((0, 0))
visited[0][0] = True
ans[0][0] = 1

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

while queue:
    x, y = queue.popleft()

    # for nx, ny in [(x - 1, y), (x + 1, y), (x, y + 1), (x, y - 1)]:
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        # 미로밖으로 이동하는 경우 제외
        if nx < 0 or nx >= N or ny < 0 or ny >= M:
            continue
        # 0이면 이동 불가
        if board[nx][ny] == "0":
            continue
        # 만약 다음에 이동하고자 하는 칸이 방문되지 않은 칸이라면,
        if not visited[nx][ny]:
            visited[nx][ny] = True
            # 다음에 방문하는 칸은 이전에 방문한 칸보다 딱 한칸만 더 이동하면됨
            ans[nx][ny] = ans[x][y] + 1
            queue.append((nx, ny))

# 마지막 칸까지의 최단 경로
print(ans[N - 1][M - 1])
