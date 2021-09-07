# {{ cookiecutter.project_name }}

{{ cookiecutter.project_short_description }}

## Developing

Install Python dependencies using: 
```bash
poetry install
```

Install Javascript dependencies using:
```bash
npm install
```

Once you've installed the dependencies, you can start the developments servers:
```
npm run dev
```

It will run both the FastAPI server and the SvelteKit server.

FastAPI files are stored in the `app` directory. SvelteKit files are stored in the `src` directory. 


## Deployment

The SvelteKit app uses a node adapter for deployment with a proxy that accesses a local FastAPI server.

For building the production version of your app, run:
```bash
npm run build
```

To run both the production node server and the FastAPI server, run
```bash
honcho -f ProcfileHoncho start
```

### Heroku

It is possible to deploy the apps to a single Heroku dyno.

If you do not have it already, start a git repository:
```bash
git init
git branch -m master main
```

Create a heroku app:
```bash
heroku create {{ cookiecutter.project_slug }}
```

Add buildpacks to use Poetry, Python, and NodeJS:
```bash
heroku buildpacks:clear
heroku buildpacks:add https://github.com/moneymeets/python-poetry-buildpack.git
heroku buildpacks:add heroku/python
heroku buildpacks:add heroku/nodejs
```

Build your production files and commit them
```
npm run build
git add .
git commit -m "Production files"
```

Push changes to heroku:
```
git push heroku main
```

