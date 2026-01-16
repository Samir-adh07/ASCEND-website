# Docker Deployment Guide

## Prerequisites
- Docker installed
- Docker Compose installed

## Quick Start

### 1. Build and Run with Docker Compose

```bash
docker-compose up -d
```

Your app will be available at `http://localhost:3000`

### 2. Stop the Container

```bash
docker-compose down
```

## Manual Docker Build

### Build the Image

```bash
docker build -t ascend-website .
```

### Run the Container

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SANITY_PROJECT_ID=mjs0jfmc \
  -e NEXT_PUBLIC_SANITY_DATASET=production \
  -e SANITY_API_TOKEN=your_token_here \
  ascend-website
```

## Using Environment Variables

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=mjs0jfmc
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

Then run:

```bash
docker-compose --env-file .env up -d
```

## Production Deployment

### Deploy to any VPS (DigitalOcean, AWS, etc.)

1. **Copy files to server:**
   ```bash
   scp -r . user@your-server:/path/to/app
   ```

2. **SSH into server:**
   ```bash
   ssh user@your-server
   cd /path/to/app
   ```

3. **Run with docker-compose:**
   ```bash
   docker-compose up -d
   ```

### Using Docker Hub

1. **Tag and push:**
   ```bash
   docker tag ascend-website your-username/ascend-website:latest
   docker push your-username/ascend-website:latest
   ```

2. **Pull and run on server:**
   ```bash
   docker pull your-username/ascend-website:latest
   docker run -d -p 3000:3000 --env-file .env your-username/ascend-website:latest
   ```

## Useful Commands

```bash
# View logs
docker-compose logs -f

# Rebuild after code changes
docker-compose up -d --build

# Remove everything (including volumes)
docker-compose down -v

# Access container shell
docker exec -it ascend-website sh

# View running containers
docker ps

# Stop specific container
docker stop ascend-website
```

## Nginx Reverse Proxy (Optional)

If you want to serve on port 80/443 with SSL:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Troubleshooting

**Container exits immediately:**
- Check logs: `docker-compose logs`
- Verify environment variables are set

**Port already in use:**
- Change port in docker-compose.yml: `"3001:3000"`

**Build fails:**
- Clear Docker cache: `docker builder prune`
- Rebuild: `docker-compose build --no-cache`
