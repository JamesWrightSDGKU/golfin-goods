print("Hello, world!")

# this is a comment

# VARIABLES
name = "James"
last_name = "Wright"
cohort = 55
is_active = True
print(name)
print(name + " " + last_name + " #" + str(cohort))
# f-string
print(f"{name} {last_name} #{cohort}")

# TYPE CONVERSION
num = 9.75
print(type(num))
print(int(num)) # convert a float to an integer

age = 25
print(str(age)) # convert an integer to a string

price = "10.99"
print(float(price)) # convert a string to a float

# CHALLENGE
# Create some variables called: name, age, and city and show them in a print
name = "James"
age = 35
city = "Temecula"
print(f"{name}, {age} - {city}")

# CHALLENGE:
# ARITHMETIC OPERATORS
x = 5
y = 3

print(x + y) # addition
print(x - y) # subtraction
print(x * y) # multiplication
print(x / y) # division
print(x % y) # modulus
print(x ** y) # exponentiation

# COMPARISON OPERATORS
a = 10
b = 5

print(a == b) # equal to?
print(a != b) # not equal to?
print(a > b) # greater than?
print(a < b) # less than?
print(a >= b) # greater than or equal to?
print(a <= b) # less than or equal to?

# LOGICAL OPERATORS
x = 5
y = 10

print(x > 3 and y < 15) # True, both conditions are true
print(x > 3 or y > 15) # True, first condition is true
print(not(x>3)) # False, condition is true, then applying negation

# LIST
fruits = ["apple", "banana", "cherry", "watermelon", "banana"] # list in py, array in JS
print(fruits) 
print(fruits[0]) # first element
print(fruits[-1]) # last element

# LIST METHODS
fruits.append("grape") # add "grape" to the end of the list
print(fruits)

fruits.remove("banana") # remove first instance of "banana"
print(fruits)

print(fruits.pop(1)) # remove index number
print(fruits)

print(fruits.index("grape")) # display index number of first instance of "grape"
print(fruits)

print(fruits.count("apple")) # count number of instances of "apple"

print(len(fruits)) # returns length of the list

# IF STATEMENT
# if condition:
    # code to execute if condition is true

age = 10

if age >= 18:
        print("You are an adult.")
else:
        print("You are an adolescent.")


if x > 10:
        print("x is greater than 10.")
elif x == 10:
        print("x is equal to 10.")
else:
        print("x is less than 10.")


# FOR LOOP
for fruit in ["apple", "banana", "cherry"]:
        print(fruit)

# (stop), (start, stop), (start, stop, step)
for i in range(5):
        print(i)


# FUNCTIONS
def greet():
        print("Hello from greet function")


greet() # call the function


# parameters and arguments
def say_hi(name): # name is a parameter
        print("Hi, " + name) # concatenation
        print(f"Hi, {name}") # f-string
        print("Hi,", name) # sep


say_hi("James") # James is an argument

# DICTIONARY
person = {
        "name": "George",
        "age": 53,
        "city": "Merced",
        "zip" : 83719
}

print(person)

print(person["city"])