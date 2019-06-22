# GreenMap Website

## Nuxt Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Environment Variables

```
MAPBOX_TILE_SERVER=<url>
OSM_TILE_SERVER=<url>
API_URL=<url>
```

## Development

```
yarn dev
```

## Production

```
yarn build
docker-compose up
```
