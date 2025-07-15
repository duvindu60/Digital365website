# Create necessary directories
New-Item -ItemType Directory -Force -Path src/app
New-Item -ItemType Directory -Force -Path src/components
New-Item -ItemType Directory -Force -Path public/partners

# Install dependencies
npm install next@latest react@latest react-dom@latest
npm install @heroicons/react clsx tailwind-merge framer-motion react-icons
npm install -D typescript @types/node @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D eslint eslint-config-next

# Initialize Next.js project
npx tailwindcss init -p 