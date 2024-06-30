import { getVersionInfo } from './version';

export const homePage = `
<!DOCTYPE html>
<html>
  <head>
    <title>Resto API</title>
  </head>
  <body>
    <img src="https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate-vite/main/misc/heisenberg.png" />
    <h3>Resto API</h3>
    <div style="color:gray; font-style: italic; font-size: 15px; display: none;">${getVersionInfo()}</div>
    <br />
    <div style="color:black; font-style: italic; font-size: 18px;">
    Router:
      <ul>
        Resto
        <li><a title="Query - /trpc/getRestaurants" href="/getRestaurants">Get Restaurants</a></li>
        <li><a title="Mutation - /trpc/addFavorite" href="/trpc/addFavorite">Add Favorite</a></li>
      </ul>
    </div>
  </body>
</html>
`;
