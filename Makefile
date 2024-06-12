install: 
	npm ci

run:
	node bin\gendiff.js -h

fix:
	npx eslint --fix .