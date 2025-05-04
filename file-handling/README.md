# 📁 File Read & Write Challenge 🖋️

This Python program performs file reading, content modification, and writing to a new file with proper error handling.

## 🚀 Features

- Prompts the user for a file to read.
- Handles errors such as:
  - File not found
  - Read/write permission issues
- Reads the content of the file.
- Modifies the content (default: converts all text to uppercase).
- Writes the modified content to a new file.

## 🧪 How It Works

1. User is prompted to enter the name of the input file.
2. The program attempts to read the file.
3. If successful, it transforms the text (e.g., to uppercase).
4. The user is then prompted to enter the name of the output file.
5. The modified content is saved to the new file.

## 📝 Example

```bash
Enter the filename to read: input.txt
Enter the filename to write the modified content: output.txt
Modified content written successfully to 'output.txt'.


⚠️ Error Handling
If the input file does not exist, an error message is displayed.

If the file cannot be read or written to, the program alerts the user.

📌 Requirements
Python 3.x

📂 Files
main.py – The main program script.

README.md – Documentation for the project.

📄 Sample Input File (input.txt)

Hello, world!
This is a test file.

👨‍💻 Author
Created by Erick Ondiwa