# Base Class
class Book:
    def __init__(self, title, author, pages):
        self._title = title              # Encapsulated attribute (convention)
        self._author = author
        self._pages = pages

    def get_description(self):
        return f"'{self._title}' by {self._author}, {self._pages} pages."

    def read(self):
        return f"Reading the physical book '{self._title}'..."

# Inherited Class
class EBook(Book):
    def __init__(self, title, author, pages, file_size, format):
        super().__init__(title, author, pages)  # Call to the base class constructor
        self._file_size = file_size
        self._format = format

    # Method Overriding (Polymorphism)
    def get_description(self):
        return (f"'{self._title}' by {self._author}, {self._pages} pages "
                f"[{self._format} format, {self._file_size}MB]")

    def read(self):
        return f"Opening the ebook '{self._title}' on your device..."

# Creating instances
book1 = Book("The Great Gatsby", "F. Scott Fitzgerald", 180)
ebook1 = EBook("Digital Fortress", "Dan Brown", 384, 2.5, "PDF")

# Using the methods
print(book1.get_description())
print(book1.read())

print(ebook1.get_description())
print(ebook1.read())
