# BrewDog Beers

Project that uses a public API <a href="https://punkapi.com/documentation/v2">Punkapi</a> to list the beers from the BrewDog brewery and an <a href="https://github.com/luisescx/brewdog-back">API</a> to authenticate the user.

![](/public/img/preview.png)

### Technologies

- NextJS
- Typescript
- Styled-components
- Storybook
- Axios
- Next-auth

## How to run

The beers route is an authenticated route and depends on the API <a href="https://github.com/luisescx/brewdog-back">Brewdog-back</a> to authenticate the user, without the running API is gonna be possible to access only the `sign-in` and `sign-up` routes.

- Due to some dependencies, it is necessary to have node >=14 version.
- Clone the project and in the root folder execute `yarn` to install the dependencies.
- Run the project with `yarn dev`.
- To run the storybook execute `yarn storybook`.
