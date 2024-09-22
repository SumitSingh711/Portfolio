import streamlit as st

# Function to load a file's content
file_path = r'D:\Projects\Portfolio'


def load_file(file_path):
    with open(file_path, "r") as file:
        return file.read()


# Load CSS, JS, and HTML content
css_content1 = load_file("style.css")
css_content2 = load_file("mediaqueries.css")
js_content = load_file("script.js")
html_content = load_file("index.html")


# Combine the HTML with embedded CSS and JS
complete_html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App</title>
    <style>
        {css_content1}  <!-- Insert the first CSS here -->
        {css_content2}  <!-- Insert the second CSS here -->
    </style>
</head>
<body>
    {html_content}   <!-- Insert the HTML here -->
    <script>
        {js_content}  <!-- Insert the JS here -->
    </script>
</body>
</html>
"""

# Render the complete HTML in the Streamlit app
st.components.v1.html(complete_html, height=1600, width=1200, scrolling=True)