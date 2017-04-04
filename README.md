# RRF boilerplate

### A _slightly_ opinionated boilerplate for React, Redux, and Firebase

## Getting Started

`npm install`, then run `npm run dev` to start the server.

Like some of our other repos, we're using webpack's define plugin to sprinkle global envs, so make a `env.json` in the root directory.

You'll need at least two things in here:

```
{
  "$KEEN_PROJECT_ID": "golookthisup",
  "$KEEN_READ_KEY": "soyoucanreadstuff"
}
```

### This is supposed to be ugly
