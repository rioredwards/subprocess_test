import subprocess
import sys

# Get project's entry ID from Args. If no Args, exit with error message.
# project_entry_ID = (
#     sys.argv[1] if len(sys.argv) > 1 else sys.exit("No project entry ID supplied.")
# )

# Execute Node.js script and print out result
result = subprocess.run(["npm", "run", "start:javascript", "features"], capture_output=True)
markdown = result.stdout.decode("utf-8")
print(markdown)

f = open("index.md", "w")
f.write(markdown)
f.close()
