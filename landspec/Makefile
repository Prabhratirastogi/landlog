dev: format type
	pipenv run python main.py

test: type
	pipenv run pytest

format:
	pipenv run black .

lint:
	pipenv run ruff ./ --watch

type:
	pipenv run mypy .

install:
	pipenv install
	pipenv install --dev
	pipenv run pre-commit install
	pipenv run pre-commit autoupdate

pre-commit: install
	pipenv run pre-commit run --all-files

shell:
	pipenv shell

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "dev  		Run the application in development mode"
	@echo "test 		Run the test suite"
	@echo "format 		Format the code"
	@echo "lint 		Run the linter"
	@echo "install  	Install the application"
	@echo "pre-commit 	Run pre-commit hooks"
	@echo "shell 		Run a shell in the virtual environment"

.PHONY: dev test install shell help
