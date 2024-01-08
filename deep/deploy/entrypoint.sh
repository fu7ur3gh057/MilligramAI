#!/bin/sh

# Until deep folder created
until cd /src/deep; do
  echo "Waiting for deep volume..."
done

python main.py
exec "$@"