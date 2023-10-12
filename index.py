import subprocess

# Print out file contents
# result = subprocess.run(["cat", "hello.txt"], capture_output=True, text=True)
# print(result.stdout)

# Execute Node.js script and print out result
result = subprocess.run(["npm", "run", "start:javascript"], capture_output=True)
print(result.stdout.decode("utf-8"))
