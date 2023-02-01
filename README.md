# Project Title

Multiple API call with pokeAPI

## Demo

https://shimmering-panda-91d15b.netlify.app

## Built With

- `React` : version 18.2.0
- `RTKQuery`
- `tailwindcss`: version ^3.2.4
- `create-react-app`

## Feature

- Multiple API calls are made so that the amount of data fetched in a single call is not too large.
- The character can be filtered by name, and the output is dynamically rendered on the page.

## Challenge

- Because the api answer contains a large quantity of data, it was difficult to think of ways to limit the network request and lower the amount of data at a single request. To avoid this, I create a request in each page as it is rendered, and then the following request is sent when the user clicks each character.
- This project is a simple but useful example of how to manage multiple API requests in an SPA application.",

## Getting Started

```
npm install
npm start
```
