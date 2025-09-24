# create-fiber-app

Create production-ready Go Fiber applications with a single command. This CLI tool scaffolds a complete Go Fiber project with Docker support, hot reload, and best practices.

![npm version](https://img.shields.io/npm/v/create-fiber-app)
![license](https://img.shields.io/npm/l/create-fiber-app)
![downloads](https://img.shields.io/npm/dt/create-fiber-app)

## ✨ Features

- 🚀 **Go Fiber v2** - Fast and lightweight web framework
- 🐳 **Docker Ready** - Dockerfile and docker-compose.yml included
- 🔥 **Hot Reload** - Development server with Air for automatic reloading
- 📦 **Modular Structure** - Clean project organization
- 🛠️ **Makefile** - Common tasks automated
- 🔧 **Environment Config** - .env file support
- 📝 **API Examples** - Sample routes and middleware included
- ⚡ **Production Ready** - Multi-stage Docker build for minimal images

## 🚀 Quick Start

```bash
npx create-fiber-app my-app
cd my-app
make dev
```

That's it! Your Fiber application is now running with hot reload at http://localhost:3000

## 📋 Requirements

- Node.js 14.0 or higher (for the CLI)
- Go 1.24.7 or higher
- Docker (optional, for containerization)

## 🛠️ Usage

### Create a new project

```bash
npx create-fiber-app [project-name]
```

### With prompts (interactive mode)

```bash
npx create-fiber-app
```

### Skip prompts

```bash
npx create-fiber-app my-app -y
```

## 📁 Project Structure

```
my-app/
├── main.go              # Application entry point
├── go.mod              # Go module file
├── go.sum              # Go dependencies lock file
├── Dockerfile          # Multi-stage Docker build
├── docker-compose.yml  # Docker Compose configuration
├── Makefile           # Development and build commands
├── .air.toml          # Air hot reload configuration
├── .env.example       # Environment variables template
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

## 📝 Available Commands

Once your project is created, you can use these make commands:

```bash
make help         # Show all available commands
make install      # Install dependencies
make dev          # Start with hot reload
make build        # Build the application
make run          # Build and run
make test         # Run tests
make docker-build # Build Docker image
make compose-up   # Start with Docker Compose
```

## 🔧 Generated Application

The scaffolded application includes:

### API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /api/v1/users` - Sample API endpoint

### Middleware

- Recovery middleware for panic recovery
- Logger middleware for request logging
- CORS middleware for cross-origin requests

### Docker Support

- Optimized multi-stage Dockerfile
- Docker Compose setup for development
- Environment variable configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GoFiber](https://gofiber.io/) - The fantastic web framework
- [Air](https://github.com/cosmtrek/air) - Live reload for Go apps
- [Commander.js](https://github.com/tj/commander.js/) - CLI framework
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) - Interactive CLI prompts

## 📞 Support

- Create an issue on [GitHub](https://github.com/vinaayakha/create-fiber-app/issues)
- Follow for updates

---

Made with ❤️ by the Go community