class Dog:
    
    """"A simple dog class"""
    def __init__(self, name=""):
        self._name = name
    
    def speak(self):
        return self._name + " barks"

class Cat:

    """"A simple cat class"""
    def __init__(self, name=""):
        self._name = name
    
    def speak(self):
        return self._name + " meows"

def get_pet(pet="dog", name="my pet"):
    """Pet Factory method"""
    pets = dict(dog=Dog(name), cat=Cat(name))
    return pets[pet]


print(get_pet("dog", "Hope").speak())
print(get_pet("cat", "Peace").speak())