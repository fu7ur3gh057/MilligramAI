FROM python:3.10.9-bullseye
# install poetry
RUN pip install poetry==1.4.2
# set environment variables
ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

# create and set workdir
WORKDIR /src/bridge
# copy local project
COPY .. .


COPY pyproject.toml poetry.lock ./
RUN poetry install --without dev && rm -rf $POETRY_CACHE_DIR

# make our server-entrypoint.sh executable
RUN chmod +x ./deploy/entrypoint.sh
EXPOSE 13502

ENTRYPOINT ["./deploy/entrypoint.sh"]