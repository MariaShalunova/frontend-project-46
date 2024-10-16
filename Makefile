install: 
	npm ci

publish:
	npm publish --dry-run

help:
	node bin\gendiff.js -h

run:
	gendiff '.\__fixtures__\file1.json' '.\__fixtures__\file2.json'

lint:
	npx eslint

lint-fix:
	npx eslint --fix .

tests:
	npm test --watchAll
	npx jest --coverage

test-coverage:
	npm test --coverage --coverageProvider=v8