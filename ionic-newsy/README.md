[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdzooli%2Fionic-newsy.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdzooli%2Fionic-newsy?ref=badge_shield)

# Newsy

## Description

A simple Deeplink management application for Web, Android and Desktop using Ionic, React and Electron with Capacitor.

Supports comments, voting, searching and a separate display of the trending news. Registered and logged in users are able to comment the news and everybody is able to add|edit|delete his|her own comments and links.

This is my personal learning project based on a Solidsails tutorial. My goal is to learn React and Ionic by doing.

Later I might create a custom Sqlite or MySQL based backend but now the learning is in focus.

## Example results and a Blog about the project

- Coming soon

## Requirements

Personally I was used Windows for development with VisualStudio Code and a Debian WSL because I am familiar with Linux but for some other interests I require Windows platform. I tried to mix comfortable development environments to an effective solution. The choice of tools is yours but you need at least:

- Node.js (for Linux or Windows)
- Ionic CLI
- Some text editor or IDE

```node
npm install -g @ionic/cli
```

- Clone of this repository

```bash
git clone https://dzooli.github.com/dzNewsy
```

- Optional
  - Electron
  ```node
  npm install -g electron
  ```
  - Capacitor
  ```node
  npm install -g capacitor
  ```
  - XCode (for iOs builds)
  - Android Studio (if you wish to build an Android application)

### Add another platforms (optional)

```bash
ionic integrations enable capacitor --add
ionic cap add electron
ionic cap add android
```

#### Sync the platforms after you finished the web app

```bash
ionic cap sync [--prod] # For production
ionic cap sync [--watch] # For development with automatic rebuild
```

### For backend

- Your own Firebase Authentication Service
- Your own Firebase Storage Service

## Contribution

You could create pull requests as you wish and we can create a simple application for future public use with more features and without Firebase dependency. If you have capacity to serve the backend feel free to contact me and we should plan the future of the application.
