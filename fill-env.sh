#!/bin/sh

touch .env
echo 'REACT_APP_FIREBASE_API_KEY="$REACT_APP_FIREBASE_API"' >> .env
echo 'REACT_APP_AUTH_URL="$REACT_APP_AUTH_URL"' >> .env
echo 'REACT_APP_DATABASE_URL="$REACT_APP_FIREBASE_API"' >> .env

less -FX .env
