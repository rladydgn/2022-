import random


def get_random_number(min_range, max_range, n):
    numbers = []

    while len(numbers) < n:
        tmp = random.randint(min_range, max_range)
        if tmp not in numbers:
            numbers.append(tmp)

    return numbers


if __name__ == "__main__":
    a = get_random_number(1, 100, 5)
    print(a)
