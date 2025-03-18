
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the project
console.log('Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Create public_html directory if it doesn't exist
const publicHtmlDir = path.join(process.cwd(), 'public_html');
if (!fs.existsSync(publicHtmlDir)) {
  fs.mkdirSync(publicHtmlDir, { recursive: true });
  console.log('Created public_html directory.');
} else {
  console.log('public_html directory already exists.');
}

// Copy dist files to public_html
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Build may have failed.');
  process.exit(1);
}

// Function to copy directory recursively
const copyDir = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

// Copy files
try {
  copyDir(distDir, publicHtmlDir);
  console.log('Copied build files to public_html directory.');
} catch (error) {
  console.error('Error copying files:', error);
  process.exit(1);
}

// Copy .htaccess file to public_html
const htaccessPath = path.join(process.cwd(), '.htaccess');
const htaccessDestPath = path.join(publicHtmlDir, '.htaccess');

try {
  if (fs.existsSync(htaccessPath)) {
    fs.copyFileSync(htaccessPath, htaccessDestPath);
    console.log('Copied .htaccess file to public_html directory.');
  } else {
    console.warn('Warning: .htaccess file not found. Skipping...');
  }
} catch (error) {
  console.error('Error copying .htaccess file:', error);
}

console.log('------------------------------------');
console.log('Build for Hostinger completed!');
console.log('Upload the contents of the public_html directory to your Hostinger hosting.');
console.log('------------------------------------');
