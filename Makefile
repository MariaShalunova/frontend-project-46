install: 
	npm ci

fix:
	npx prettier --write .
	npx eslint --fix .