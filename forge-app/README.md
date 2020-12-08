# forge-app

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Forge app built upon Probot.

## Setup

```sh
# Install dependencies
npm install

# Compile
npm run build

# Run
npm run start
```

## Docker

```sh
# 1. Build container
docker build -t forge-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> forge-app
```

## Contributing

If you have suggestions for how forge-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 AkatQuas

---

- [Deliveries](https://github.com/settings/apps/forge-app/advanced): find out the event/payload send to the App.

# Probot

- [Webhooks](https://probot.github.io/docs/webhooks/)

- GitHub APIs: [restful](https://probot.github.io/docs/github-api/#rest-api), [graphql](https://probot.github.io/docs/github-api/#graphql-api)

- [Application APIs](https://probot.github.io/api/latest/classes/application.html)

- [context APIs](https://probot.github.io/api/latest/classes/context.html)
