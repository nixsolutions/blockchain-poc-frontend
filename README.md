## poc-fronted

#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
docker build . -t my-app
docker run -d -p 8080:80 my-app
```

the application will be available at: http://<HOST>: 8080, where <HOST> is the address of the second EC2 server on which this application is located.
