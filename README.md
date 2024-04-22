# Red Hat IDE Extensions Website

This website is home to the documentation for extensions managed by Red Hat's IDE Extensions team, along with its latest blog posts. 

Built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How to Contribute

Begin by forking and cloning [this repository](https://github.com/redhat-developer/idetools.dev).

### Requirements

In order to make changes or additions to the website, the following software must be installed:

*   [Node.js](https://nodejs.org/) v18.0 or higher

### Creating a Blog Post

To create a blog post, simply add a Markdown file to the `blog` directory. If you wish to include images in your blog post, you can also create a blog post folder to co-locate the images. The filename should conform to the following naming convention so that the blog post date can be extracted:

* yyyy-mm-dd-TITLE.md OR
* yyyy-mm-dd-FOLDERNAME/TITLE.md

Each blog post should contain the following front matter:

```
---
slug: {Desired blog post URL, e.g. my-blog-post}
title: {Insert desired title to be displayed}
authors: [{Author name as defined in authors.yml}]
tags: [{Desired tags, comma-separated}]
---
```

Be sure to add yourself to the list of authors in [authors.yml](./blog/authors.yml).

Visit [Docusaurus' blog documentation](https://docusaurus.io/docs/blog) for more information.


### Testing Locally

It is important to build and view the website locally before contributing to ensure that your changes are as desired.

In order to start a local development server that opens in a browser window at `http://localhost:3000/`, run

```
$ npm run start
```

With this command active, changes will be built and reflected live. If you wish to simply build your changes, run

```
$ npm run build
```

To load and view your new build, run

```
$ npm run serve
```
