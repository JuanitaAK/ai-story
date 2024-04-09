SHELL = /bin/bash

UID := $(shell id -u)
GID := $(shell id -g)

DOCKER_COMPOSE := $(if $(DOCKER_COMPOSE:-=),$(DOCKER_COMPOSE),docker-compose -f docker-compose.yml)

.ONESHELL:
.PHONY: start stop upstart

stop:
	$(DOCKER_COMPOSE) stop

start: stop
	$(DOCKER_COMPOSE) up -d --no-build --remove-orphans

upstart: stop
	@echo "Dockering..."
	cd ./backend
	rm -r -f ./node_modules
	$(DOCKER_COMPOSE) rm --force
	$(DOCKER_COMPOSE) build --build-arg UID=$(UID) --build-arg GID=$(GID) || exit 1
	$(DOCKER_COMPOSE) up -d --no-build --remove-orphans --force-recreate
