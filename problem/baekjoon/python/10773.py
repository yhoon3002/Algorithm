def zero():
    _k = int(input())

    _stack = []
    _answer = 0

    for i in range(_k):
        _input = int(input())

        if _input == 0:
            _stack.pop()
        else:
            _stack.append(_input)

    for i in _stack:
        _answer += i

    print(_answer)


zero()
