print("test.py")

a = 7
b = 11

print(a, "+", b, "=",a + b)
print(a, "-", b, "=",a - b)
print(a, "x", b, "=",a * b)
print(a, "/", b, "=",a / b)

age = 35

def guess_my_age():
        guess = int(input("Guess my age: "))
        if guess < 35 and guess > 0:
                print("I am older than that!")
        elif guess > 35:
                print("I'm not that old!")
        elif guess == 35:
                print("You guessed correctly!")
        else:
                print("Your input was not valid.")

guess_my_age()