def read_and_modify_file():
    # Ask for the input file name
    filename = input("Enter the filename to read: ")

    try:
        # Try to open and read the file
        with open(filename, 'r') as file:
            content = file.read()
        
        # Modify content (for example, convert to uppercase)
        modified_content = content.upper()

        # Ask for output filename
        new_filename = input("Enter the filename to write the modified content: ")

        # Write the modified content to a new file
        with open(new_filename, 'w') as new_file:
            new_file.write(modified_content)

        print(f"Modified content written successfully to '{new_filename}'.")

    except FileNotFoundError:
        print(f"Error: The file '{filename}' does not exist.")
    except IOError:
        print(f"Error: Could not read from or write to file '{filename}' or '{new_filename}'.")

# Run the function
read_and_modify_file()
