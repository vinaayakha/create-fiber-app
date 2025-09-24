# Publishing to npm

## Prerequisites

1. Create an npm account at https://www.npmjs.com/
2. Login to npm from your terminal:
   ```bash
   npm login
   ```

## Publishing Steps

### 1. First Time Publishing

```bash
# Make sure you're in the project root
cd /path/to/create-fiber-app

# Run tests
npm test

# Publish to npm
npm publish
```

### 2. Publishing Updates

```bash
# Update version (patch, minor, or major)
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes

# This will automatically:
# - Update version in package.json
# - Create a git commit
# - Create a git tag
# - Push to GitHub

# Publish to npm
npm publish
```

## After Publishing

1. Verify your package at: https://www.npmjs.com/package/create-fiber-app
2. Test it works:
   ```bash
   npx create-fiber-app@latest test-app
   ```

## Package Maintenance

- Keep dependencies updated
- Respond to issues on GitHub
- Follow semantic versioning
- Update README when adding features
- Test before each release

## Troubleshooting

If `create-fiber-app` name is taken, you can:
1. Use a scoped package: `@yourusername/create-fiber-app`
2. Choose a different name like `create-gofiber-app` or `fiber-app-generator`

To use a scoped package:
```bash
# Update package.json name to "@vinaayakha/create-fiber-app"
# Then publish with public access
npm publish --access public
```