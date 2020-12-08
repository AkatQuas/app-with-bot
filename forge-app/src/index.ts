import { ApplicationFunctionOptions } from 'probot/lib/types';

export = ({ app, getRouter }: ApplicationFunctionOptions) => {
  app.log.info('Yay, forge-app is loaded');

  app.on('push', async context => {
    // Code was pushed to the repo, what should we do with it?
    app.log.info(context);
  });

  app.on(
    ['issues.opened', 'issues.labeled', 'issues.edited'],
    async context => {
      if (context.payload.issue.body.match(/forge/)) {
        context.log.info('This issue is about forge');
      }

      // `context` extracts information from the event
      const issueComment = context.issue({
        body: `Thanks for ${context.payload.action} ${context.name} with this issue!`,
      });

      await context.octokit.issues.createComment(issueComment);
      context.log.debug('Comment created: ', issueComment);
    }
  );

  app.on('*', async context => {
    context.log.info('--- fallback info ---');
    context.log.info({ event: context.name, action: context.payload.action });
    context.log.info('--- fallback info end ---');
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/

  {
    const router = getRouter('/healthz');
    router.get('', (_, res) => {
      res.statusCode = 204;
      res.end();
    });
  }
};
