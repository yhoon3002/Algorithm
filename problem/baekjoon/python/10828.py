# 스택
def stack():
    _num = int(input())  # 첫 번째로 받는 n(명령어의 수)
    _stack = []  # 명령어를 수행하고 난 후의 결과(스택)
    _result = []  # 결과

    for i in range(_num):
        _input = input()  # 명령어
        _len = len(_stack)  # 스택의 길이

        if "push" in _input:
            _stack.append(int(_input.split(" ")[-1]))
        if _input == "pop":
            if len(_stack) == 0:
                _result.append(-1)
            else:
                _result.append(_stack[-1])
                _stack.pop()
        if _input == "top":
            if _len == 0:
                _result.append(-1)
            else:
                _result.append(_stack[-1])
        if _input == "size":
            _result.append(len(_stack))
        if _input == "empty":
            if len(_stack) == 0:
                _result.append(1)
            else:
                _result.append(0)

    for i in range(len(_result)):
        print(_result[i])


stack()
