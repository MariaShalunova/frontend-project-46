install: 
	npm ci

help:
	node bin\gendiff.js -h

test:
	node bin\gendiff.js '.\__fixtures__\file1.json' '.\__fixtures__\file2.json'

run:
	gendiff '.\__fixtures__\file1.json' '.\__fixtures__\file2.json'

fix:
	npx eslint --fix .