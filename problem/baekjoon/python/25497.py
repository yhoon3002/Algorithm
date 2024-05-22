def ims():
    _num = int(input())
    _skill = input()
    _stack = []
    _count = 0

    # L R S K
    for i in range(_num):
        if _skill[i].isdigit():
            _count += 1
        else:
            if _skill[i] == "L" or _skill[i] == "S":
                _stack.append(_skill[i])
            elif _skill[i] == "R":
                if "L" in _stack:
                    _count += 1
                    _stack.remove("L")
                else:
                    break
            elif _skill[i] == "K":
                if "S" in _stack:
                    _count += 1
                    _stack.remove("S")
                else:
                    break

    print(_count)


ims()
