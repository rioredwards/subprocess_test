import sys
from api import get_project
from format import format_rich_text


# Get project's entry ID from Args. If no Args, exit with error message.
project_entry_ID = (
    sys.argv[1] if len(sys.argv) > 1 else sys.exit("No project entry ID supplied.")
)

# Fetch project entry by ID
project = get_project(project_entry_ID)
print("Project requested: ", project.title)

# Create string for usage (Rich Text)
usage_str = format_rich_text(project, "usage")

# Create final string for README.md
markdown_sections = [
    usage_str,
]

finalStr = "".join(markdown_sections)
print("Writing to README.md...")
print(finalStr)

# Write contents to README.md
f = open("README.md", "w")
f.write(finalStr)
f.close()
