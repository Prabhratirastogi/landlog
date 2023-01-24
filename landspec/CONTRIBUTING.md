# How to contribute good code?

## Notes to a new contributer
- Python is an easy language
- Python caters to both Scripting Style Projects (Data Science, ML/DL, etc.) and Application Style Projects (Web Apps, Enterprise Systems, Robotics, etc)
- When writing Application Style Projects: Python has many demerits. Over the years, various key peices have emerged to solve these issues - Type Annotations, Virtual Environments, Dataclasses, etc.

![](https://www.loom.com/share/dbffcbc64d2f41f5ae0d9a84a82d16d9)

## Use Git and Github Correctly
- Create a new branch when starting a new task
- Make frequent commits (Atleast once per day)
- Create a new Pull Request immediately after creating a new branch to carry out a new task
- Make sure to add a description and a checklist of tasks to your PR immediately after starting a new task
- Make sure to write commit messages in the form of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## Use the Makefile
- The makefile provides commands for you to use, use these commands to run, test, lint, format and so on. Read and understand the makefile for better understanding of how it works

## Use Pipenv Correctly
- Use pipenv, do not pip install dependencies
- Use pipenv shell to enter the virtual environment

## Use Type Annotations
- Use types for everything, it should generally improve the readability of your code as well as decrease some classes of bugs
- Mypy is the type checker we are using

## Pre-commit Hooks are there to help you
- Ruff is the linter, it throws a lot of linter-errors and linter-warnings, these are there to help you improve the quality of your code OR to standardise the code in the code base
- Mypy is a type checker, it helps you by finding type errors in your code

## Enums, Dataclasses, Custom Exceptions
- Use Enums (with `auto()`) and String Enums (`class MyEnum(str, Enum)`) when describing types
- Prefer the use of Dataclasses over Raw Classes when applicable
- Use Custom Exceptions (`class SomeException(Exception):`) to throw fine grained errors instead of plain exception strings

## Pydantic
- Learn and use Pydantic for serializing and deserializing JSON/YAML/etc

## Put scripting portions of your code in the `__name__ == '__main__'` block
