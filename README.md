# Frontend task

CSS grid and SCSS - for styling the applicaton

GatsbyJS - provides server side rendering, SEO optimization, plugins.

Normalize - makes browsers render all elements more consistently and in line with modern standards.

# To run project:

- Go to folder directory
- Type “yarn” or “npm install” to install node_modules
- To start the local server the project type “yarn dev” or “npm run dev”

(See more custom scripts in package.json)

# Added feature - Autocomplete search input

# Suggestions for discussion topics (time constraint and/or scope of project):

Calculate length of characters which is put into input field. You could optimize this further by only letting it render when user types in special amount of characters. Less stress on API etc.

Due to time constraints the API key is seen in the PageContent file. This would preferably be included as an env variable \${process.env.API_KEY} and be put into the gitignore file.

Image optimization and lazy loading (gatsby-img or similar).

If the poster image from API wouldn't exist, create a fallback image or message which tells the user the image coulnd't be fetched.

Work with SEO more, WCAG guidelines, availability and color contrasts.

Tackle potential performance issues.

Some error handling is there but expand on creating loaders, progressbars and error handling when data can't be fetched etc.
