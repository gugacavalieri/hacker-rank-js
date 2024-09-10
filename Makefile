build:
	docker compose run --rm --build this npm install
lint: 
	docker compose run --rm this npm run lint
test: 
	docker compose run --rm this npm run test
testWatch: 
	docker compose run --rm this npm run test:watch