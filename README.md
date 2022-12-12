# Dash Frontend

[Landlog](https://www.landlog.cc)

# Development Build
```sh
# Build
$ yarn install
# Run
$ yarn dev
```

# Build using Docker
```sh
# Build
$ docker build -t gchr.io/sutyum/landlog/dash-fe .
# Run
$ docker run -p 3000:3000 -t gchr.io/sutyum/landlog/dash-fe
```

# Production Build
```sh
$ yarn build
$ yarn start
```
