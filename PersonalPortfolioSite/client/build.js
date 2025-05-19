const { execSync } = require('child_process');

// Build the client
console.log('Building the client...');
execSync('npm run build', { stdio: 'inherit' });