# Base class
class Vehicle:
    def move(self):
        raise NotImplementedError("Subclasses must implement this method")

# Subclasses with different implementations of move()
class Car(Vehicle):
    def move(self):
        return "Driving on the road 🚗"

class Plane(Vehicle):
    def move(self):
        return "Flying in the sky ✈️"

class Boat(Vehicle):
    def move(self):
        return "Sailing on the water 🚢"

# Function that demonstrates polymorphism
def vehicle_movement(vehicle):
    print(vehicle.move())

# Create different vehicle objects
my_car = Car()
my_plane = Plane()
my_boat = Boat()

# Call the same method on different objects
vehicle_movement(my_car)
vehicle_movement(my_plane)
vehicle_movement(my_boat)

