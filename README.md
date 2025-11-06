# Personal Website - Terminal Style

A modern, computer science-inspired personal website with a terminal/byte aesthetic.

## Features

- 🖥️ **Terminal-inspired design** - Green text on dark background with monospace fonts
- ✨ **Glitch effects** - Animated glitch text in the hero section
- 📱 **Fully responsive** - Works on all devices
- 🎨 **Smooth animations** - Scroll-triggered fade-ins and hover effects
- 💻 **Code syntax highlighting** - Styled code blocks for skills and contact
- ⚡ **Interactive elements** - Hover effects, typing animations, and more

## Sections

1. **About** - Personal information displayed as JavaScript code
2. **Experience** - Work history in a timeline format
3. **Projects** - Showcase of your projects with tech stacks
4. **Hackathons** - Hackathon participation and achievements
5. **Contact** - Contact information in terminal command style

## Customization

### Personal Information

Edit the following sections in `index.html`:

- **Hero Section** (lines ~40-60): Update the ASCII art and subtitle
- **About Section** (lines ~80-100): Modify the JavaScript object with your details
- **Experience Section** (lines ~110-160): Update job titles, companies, and descriptions
- **Projects Section** (lines ~170-220): Add your projects with descriptions and links
- **Hackathons Section** (lines ~230-280): Add hackathon details
- **Contact Section** (lines ~290-320): Update email, GitHub, LinkedIn, Twitter links

### Colors

Modify the CSS variables in `styles.css` (lines ~10-20) to change the color scheme:

```css
:root {
    --text-primary: #00ff41;    /* Main green text */
    --text-secondary: #7ee787;  /* Secondary green */
    --accent: #00d9ff;          /* Accent color */
    --bg-primary: #0a0e27;      /* Background */
}
```

### Matrix Rain Effect

To enable the matrix rain background effect, uncomment the last line in `script.js`:

```javascript
createMatrixRain();
```

## Running Locally

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Feel free to use this template for your own personal website!
