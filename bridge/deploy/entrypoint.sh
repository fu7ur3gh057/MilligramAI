#!/bin/sh

# Until bridge folder created
until cd /src/bridge; do
  echo "Waiting for bridge volume..."
done

poetry run python main.py
exec "$@"