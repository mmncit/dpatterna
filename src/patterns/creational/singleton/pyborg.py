
class Borg:
    _shared_data = {} # attribute dictionary
    def __init__(self):
        self.__dict__ = self._shared_data 

class Singleton(Borg):
    '''Singleton class'''
    def __init__(self, **kwargs):
        Borg.__init__(self)
        self._shared_data.update(kwargs) # update the attribute dictionary
    
    def __str__(self):
        return str(self._shared_data) # returns attribute dictionary

# create a singleton and add acronym
x = Singleton(HTTP = "Hyper Text Transfer Protocol")
# print the object
print(x)
# create another singleton object
y = Singleton(SNMP = "Simple Network Management Protocol")
# and it should refers to the same attribute dictionary
# print the object
print(y)