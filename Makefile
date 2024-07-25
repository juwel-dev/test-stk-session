generate-migration:
	- ./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -d ./src/Datasource.ts migrations/$(name)

run-migration:
	- ./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run -d ./src/Datasource.ts