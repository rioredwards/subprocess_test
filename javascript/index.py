import subprocess
import json
import os


def run(rich_text):
    # Get path to javascript file
    current_directory = os.getcwd()
    file_path = os.path.join(current_directory, "javascript/dist/index.js")

    # Convert rich_text to JSON
    json_rich_text = json.dumps(rich_text)

    # Execute Node.js script and print out result
    result = subprocess.run(
        ["node", file_path, json_rich_text],
        capture_output=True,
        check=True,
    )

    print(result.stdout)
    print(result.stderr)

    markdown = result.stdout.decode("utf-8")
    return markdown
