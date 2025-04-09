const fs = require('fs');
const path = require('path');

const apiKey = process.env.API_KEY;

const envContent = `
export const environment = {
  production: true,
  API_KEY: '${apiKey}',
};
`;

fs.writeFileSync(
  path.join(__dirname, 'src/environments/environment.ts'),
  envContent
);

console.log('✅ Environment file generated.');