docker-build:
	docker compose build --pull
docker-up:
	docker compose up -d
docker-down:
	docker compose down --remove-orphans
npm-install:
	docker compose run --rm node-cli npm install
npm-be-updated-all:
	docker compose run --rm node-cli npm outdated --depth=9999
