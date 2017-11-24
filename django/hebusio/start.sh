#!/bin/bash

# Start Gunicorn processes
echo Demarrage de Gunicorn ...
cd tutorials
exec gunicorn tutorials.wsgi:application \
    --bind 0.0.0.0:8002 \
    --workers 3