
def fizzBuzz(num):
    result = ''
    for i in range(1, num + 1):
        if i % 3 == 0 and i % 5 == 0:
            result += ('FizzBuzz ')
        elif i % 5 == 0:
            result += ('Buzz ')
        elif i % 3 == 0:
            result += ('Fizz ')
        else:
            result += str(i) + ' '
    return result.strip()

print(fizzBuzz(15))

