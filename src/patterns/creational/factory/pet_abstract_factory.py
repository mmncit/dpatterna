from time import perf_counter
from pet_factory import Dog, Cat

class DogFactory:
    """Concrete dog factory"""
    
    # produces dog related objects
    def get_pet(self):
        return Dog()
    
    def get_food(self):
        return "Dog food!"


class CatFactory:
    """Concrete cat factory"""
    def get_pet(self):
        return Cat()
    
    def get_food(self):
        return "Cat food!"


class PetStore:
    """PetStore abstracts pet factories"""
    def __init__(self, pet_factory=None):
        self._pet_factory = pet_factory

    def show_pet_info(self):
        """Utility method to display the details of the objects returns"""
        pet = self._pet_factory.get_pet()
        pet_food = self._pet_factory.get_food()
        
        print("pet is '{}'!".format(pet))
        print("pet says hello by '{}'".format(pet.speak()))
        print("pet's food is '{}'".format(pet_food))


# Create a concrete factory
factory = DogFactory()

# Create a pet store 
dog_store = PetStore(factory)

# invoke utility method
dog_store.show_pet_info()