docker run -d \
	--name dev-postgres \
	-e POSTGRES_PASSWORD=Pass2021! \
	-v ${HOME}/postgres-data/:/var/lib/postgresql/data \
    -p 5432:5432
    postgres