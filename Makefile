install: 
	npm ci

help:
	node bin\gendiff.js -h

test:
	gendiff '.\__fixtures__\file1.json' '.\__fixtures__\file2.json'

run:
	gendiff file1.json file2.json

lint:
	npx eslint --fix .