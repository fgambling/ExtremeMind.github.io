# ExtremeMind Studio Website

A modern, responsive portfolio website for ExtremeMind Studio, featuring a comprehensive showcase of projects and services.

## Features

- **Multi-language Support**: Dropdown menu to switch between English and Chinese
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Project Showcase**: Image carousels for featured projects
- **Modern UI**: Clean, professional design with smooth animations
- **Project Portfolio**: Detailed project descriptions with technology stacks

## Language Support

The website supports both English and Chinese languages:

- **Default Language**: English
- **Language Dropdown**: Click the language button in the top navigation bar to open a dropdown menu
- **Current Language Display**: The button shows the current language (EN/中文)
- **Dynamic Content**: All text content, including titles, descriptions, and navigation elements, updates dynamically

## How to Use Language Switching

1. **English Mode**: The button displays "EN"
2. **Click the button**: A dropdown menu appears with "English" and "中文" options
3. **Select language**: Click on the desired language option
4. **Chinese Mode**: The button displays "中文"
5. **Switch back**: Click the button again and select "English"

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (vanilla)
- Image carousels
- Multi-language support system with dropdown menu

## Project Structure

```
ExtremeMind.github.io/
├── index.html          # Main HTML file with multi-language support
├── style.css           # CSS styles including language dropdown
├── script.js           # JavaScript functionality including language switching
├── static/             # Static assets
│   ├── auto_score/     # Automatic scoring system images
│   ├── relationship/   # Relationship app images
│   ├── logo.png        # Logo files
│   └── github.png      # GitHub icon
└── README.md           # This file
```

## How to Use

1. Open `index.html` in a web browser
2. The website loads in English by default (button shows "EN")
3. Click the language dropdown button in the top navigation bar
4. Select your preferred language from the dropdown menu
5. All content will update dynamically to the selected language

## Language Implementation

The multi-language system uses:

- `data-en` and `data-zh` attributes on HTML elements
- JavaScript to dynamically update content based on selected language
- CSS styling for the language dropdown with smooth animations
- Responsive design that works on all device sizes
- Dropdown menu with hover effects and click-outside-to-close functionality

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Local Development

To run the website locally:

1. Clone or download the repository
2. Open `index.html` in your web browser
3. No server setup required - the website works with file:// protocol

## License

© 2025 ExtremeMind. All rights reserved.
