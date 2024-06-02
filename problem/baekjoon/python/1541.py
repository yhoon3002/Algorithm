# 잃어버린 괄호
import sys


def lost_bracket():
    inputs = sys.stdin.readline().rstrip().split("-")
    sum = 0
    temp = 0

    first_splitted = inputs[0].split("+")

    for i in range(0, len(first_splitted)):
        sum += int(first_splitted[i])

    for i in range(1, len(inputs)):
        last_splitted = inputs[i].split("+")

        for j in range(len(last_splitted)):
            temp += int(last_splitted[j])

        sum -= temp
        temp = 0

    print(sum)


lost_bracket()
