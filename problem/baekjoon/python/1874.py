# 스택 수열
def stack():
    _n = int(input())

    _stack = []
    _result = []
    _temp = 1
    _flag = False

    for _ in range(_n):
        _input = int(input())

        for j in range(_temp, _n + 1):
            if _input >= j:
                _result.append("+")
                _stack.append(j)
                _temp += 1
            else:
                break

        if _input == _stack[-1]:
            _result.append("-")
            _stack.pop()
        else:
            _flag = True

    if _flag:
        print("NO")
    else:
        for i in _result:
            print(i)


stack()
