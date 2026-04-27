---
description: Walk-through guide of manually connecting your existing Keystatic project to GitHub.
title: GitHub mode
image: http://localhost:3000/og/docs/github-mode
---

# GitHub mode

Keystatic's `github` mode unleashes enhanced collaboration capabilities.

To use it, you'll need your project on an existing GitHub repository. Collaborators will need `write` access to this repository.

---

[Setting up GitHub mode](#setting-up-git-hub-mode)

Start by changing the `storage` option in your Keystatic config to use the `github` kind.

You will need to specifiy a repo `owner` and `name`:

```
storage: {
-   kind: 'local',
+   kind: 'github',
+   repo: {
+     owner: REPO_OWNER,
+     name: REPO_NAME
+   }
}
```

You can also define the `repo` as a string with the `owner/name` format:

```
storage: {
   kind: 'github',
   repo: `${REPO_OWNER}/${REPO_NAME}`
}
```

[Connecting with GitHub](#connecting-with-git-hub)

With `github` mode on, visit the `/keystatic` route. You will be prompted to login with GitHub.

The first time you click this button will initiate the setup process:

If you happen to know the URL of your deployed project and/or the GitHub repo is owned by a GitHub organization, you can fill in those fields.

Otherwise, leave them blank and click on "Create GitHub App".

[Create a custom GitHub App](#create-a-custom-git-hub-app)

The next step will walk you through creating a GitHub App. Choose a name for your app, and proceed.

[Grant repo access](#grant-repo-access)

Next, you will need to grant this new GitHub App access to your GitHub repo:

Finally, you will be taken back to your local Keystatic Admin UI... running in `github` mode!

👀

You can tell Keystatic runs in `github` mode by the extra UI around your GitHub repo, like a branch dropdown.

[New environment variables](#new-environment-variables)

Behind the scenes, some environment variables were generated in a `.env` file on your project:

```
# Keystatic
KEYSTATIC_GITHUB_CLIENT_ID=...
KEYSTATIC_GITHUB_CLIENT_SECRET=...
KEYSTATIC_SECRET=...
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=... # for Next.JS or `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` for Astro
```

These variables are used to authenticate users with GitHub, based on their access to the GitHub repo in question.

Next time someone with `write` access on the repo visits `/keystatic`, they will be able to login and access the Admin UI.

[Branch prefix](#branch-prefix)

The `branchPrefix` option lets you scope out what GitHub branches Keystatic should interact with:

```
storage: {
   kind: 'github',
   repo: 'Thinkmill/keystatic',
+   branchPrefix: 'my-prefix/'
}
```

Keystatic will only list branches starting with `my-prefix/` in the Admin UI, and will only let you create new branches with that prefix.

[Add redirect_uri](#add)

When you authorize on a server and get the following error from GitHub, you need to modify the GitHub application settings.

> Be careful! The `redirect_uri` is not associated with this application. The application might be misconfigured or could be trying to redirect you to a website you weren't expecting.

To add a redirect URL:

1. Go to the [list of "Installed Github Apps"](https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#navigating-to-the-github-app-you-want-to-review-or-modify)
   - For Users: <https://github.com/settings/installations>
   - For Organisations: `https://github.com/organizations/<org name>/settings/installations`
2. Select the app > Choose "App settings"
   - For Users: `https://github.com/settings/apps/<app slug>`
   - For Organisations: `https://github.com/organizations/<org name>/settings/apps/<app slug>`
3. Use "Add Callback URL" > Add the additional URL > Save

Now try reloading the authentication page.

---

[Deploying Keystatic](#deploying-keystatic)

Coming soon 🚧

⚡️

The process of deploying Keystatic can vary based on where you're deploying, but here's the **TL;DR**:

- Copy the Keystatic environment variables over to your deployed environment,
- Make sure the host can run Node.js for Keystatic's API routes.

---

[Screencast walk-through](#screencast-walk-through)

This segment of the [Keystatic Mini-Course on YouTube](https://www.youtube.com/playlist?list=PLHrxuCR-0CcSmkyLcmdV7Ruql8DTm644k) may help understand how to set up the `github` storage kind:

## On this page

- [Overview](#heading-1-overview)
- [Setting up GitHub mode](#setting-up-git-hub-mode)
- [Connecting with GitHub](#connecting-with-git-hub)
- [Create a custom GitHub App](#create-a-custom-git-hub-app)
- [Grant repo access](#grant-repo-access)
- [New environment variables](#new-environment-variables)
- [Branch prefix](#branch-prefix)
- [Add ](#add)
- [Deploying Keystatic](#deploying-keystatic)
- [Screencast walk-through](#screencast-walk-through)

---

[Edit this page](https://github.com/Thinkmill/keystatic/edit/main/docs/src/content/pages/github-mode.mdoc)
