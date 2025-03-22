# Docker Desktop Installation Guide for Mac

This guide walks through the process of installing Docker Desktop on macOS systems.

## System Requirements

- **macOS version**: macOS 11 (Big Sur) or newer
- **Hardware**: 
  - 2010 or newer Mac with Intel processor
  - Apple Silicon Mac (M1/M2/M3)
- **RAM**: At least 4 GB (8 GB recommended)
- **Disk space**: At least 5 GB of free space

## Installation Steps

1. **Download Docker Desktop**
   - Visit the [Docker Desktop for Mac download page](https://www.docker.com/products/docker-desktop)
   - Click on "Download for Mac"
   - Select the appropriate version for your Mac (Intel or Apple Silicon)

2. **Install Docker Desktop**
   - Locate the downloaded `.dmg` file and double-click it
   - Drag the Docker icon to your Applications folder
   ![Docker Desktop Installation Screenshot](https://docs.docker.com/desktop/install/images/docker-app-drag.png)

3. **Launch Docker Desktop**
   - Open your Applications folder and double-click on Docker
   - You may be prompted for your password to allow Docker to install its components
   - Wait for Docker to start (the Docker icon in the menu bar will stop animating when Docker has started successfully)

4. **Verify Installation**
   - Open Terminal
   - Run the following commands to verify Docker is working:
   ```bash
   docker --version
   docker-compose --version
   docker run hello-world
   ```

5. **Enable Kubernetes (Optional)**
   - Open Docker Desktop preferences
   - Navigate to the Kubernetes tab
   - Check "Enable Kubernetes"
   - Click "Apply & Restart"

## Troubleshooting macOS Installation

- **Permission Issues**: If you see permission errors, make sure Docker has permission to write to `/var/run/docker.sock`. You may need to run `sudo chmod 666 /var/run/docker.sock`
- **Performance Issues on Apple Silicon**: Adjust resource allocation in Docker Desktop preferences
- **Firewall Blocking**: Ensure your firewall allows Docker to communicate

## Post-Installation Steps

1. **Sign in to Docker Hub (Optional)**
   - Click on the Docker Desktop icon
   - Click "Sign in / Create Docker ID"
   - Sign in with your Docker Hub account or create a new one

2. **Adjust Resources (Recommended)**
   - Open Docker Desktop preferences
   - Navigate to Resources
   - Adjust CPU, memory, and disk space based on your needs

3. **Test Your Installation**
   - Run a sample container:
   ```bash
   docker run -d -p 80:80 docker/getting-started
   ```
   - Open `http://localhost:80` in your browser

4. **Install Docker Extensions (Optional)**
   - Open Docker Desktop
   - Click on "Extensions" in the left sidebar
   - Browse and install useful extensions

## Common Docker Commands to Get Started

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# List images
docker images

# Pull an image
docker pull ubuntu

# Run a container interactively
docker run -it ubuntu bash

# Stop a container
docker stop container_id

# Remove a container
docker rm container_id

# Remove an image
docker rmi image_id

# View container logs
docker logs container_id

# Execute a command in a running container
docker exec -it container_id command
```

## Next Steps

- [Docker Tutorial for Beginners](https://www.docker.com/101-tutorial)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Overview](https://docs.docker.com/compose/)
- [Docker Hub](https://hub.docker.com/) - Explore available images