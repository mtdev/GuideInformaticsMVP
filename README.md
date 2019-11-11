# Bootstrapping

## DB Setup

Create a new database called guidedb:

```bash
psql -U postgres -c "CREATE DATABASE guidedb;"
psql -U postgres -c "CREATE ROLE guidedbuser WITH LOGIN CREATEDB ENCRYPTED PASSWORD '<some pass>';"
```

## Environment Variable setup

Replace db password with your desired password in `./.env` and set the
variables with:

```bash
source ./env.sh
```

## Virtualenv setup

Create a virtualenv and activate it:

```bash
pip install virtualenv
virtualenv gi
source gi/bin/activate
pip install -r ./requirements.txt
```

pro-tip: alias something to start this venv and source the environment
variables all at once


## Run Migrations and Start Server

```bash
python manage.py migrate
python manage.py runserver
```

## Start Webpack for frontend work

```bash
yarn && yarn start
```

