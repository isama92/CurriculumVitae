# Curriculum Vitae
#### by Stefano Borzoni

### Client
- Edit .env files (set languages `REACT_APP_LOCALES` is a json)
- Translations: run `npm run i18n:all` and check out i18n/locales directory. More info [here](https://github.com/yahoo/react-intl)


### Server
- Set environmeent variables
- It is possible to run ./build.sh to automatically build the docker image and run the container through a proxy.
- If not using docker, run `npm run build` in the client since the server will get files from client/build directory.
