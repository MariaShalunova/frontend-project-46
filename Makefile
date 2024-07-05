install: 
	npm ci

help:
	node bin\gendiff.js -h

tests:
	npm test --watchAll
	npx jest --coverage

run:
	gendiff '.\__fixtures__\file1.json' '.\__fixtures__\file2.json'

lint:
	npx eslint --fix .