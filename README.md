# sveltekit-fastapi-cookiecutter

A [cookiecutter](https://github.com/audreyr/cookiecutter) template for creating a custom Web app that combines SvelteKit and FastAPI and that can run on a single Heroku dyno.

## Usage

Install [cookiecutter](https://github.com/audreyr/cookiecutter)

```bash
pip install cookiecutter
```

After installing cookiecutter, use the sveltekit-fastapi-cookiecutter:

```bash
cookiecutter https://github.com/JoaoFelipe/sveltekit-fastapi-cookiecutter.git
```

As sveltekit-fastapi-cookiecutter runs, you will be asked for basic information about your custom Web app project. You will be prompted for the following information:

- *author_name*: your name or the name of your organization,
- *author_email*: your project's contact email,
- *project_name*: name of your project,
- *project_slug*: slug of your project name,
- *project_short_description*: short description of your project,
- *open_source_license*: open source license of you project.


## Information

To create this project, I combined information from [this post about deploying backend and frontend apps on the same heroku dyno](https://medium.com/ruby-daily/deploy-backend-and-frontend-apps-on-the-same-heroku-dyno-cfc6978a24d5) and [this post running multiple servers on one dyno](https://medium.com/@nadayar/heroku-fu-multiple-servers-on-one-dyno-6fc68d57b373). 
