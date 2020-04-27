# Front-end application

This vue.js application interacts with the back-end application of the Child Medical Record project. The project has three roles: Parents, Hospital and Kindergarten.

To install the application on the server, you must clone it from this repository:

```
cd ~
git clone https://gitlab.nixdev.co/poc-blockchain/front.git
```

Insert the server name and port number in which the front-end application will be located in the .env file:
```
vim ~ / front / .env
```
VUE_APP_API_BASE_URL = 'http: //ec2-107-22-75-46.compute-1.amazonaws.com: 3006 /'

Now install all the dependencies necessary for the application to work:
```
cd front
npm install
```
## Application launch

We build the application and run it on port 8080:
```
docker build. -t my-app
docker run -d -p 8080: 80 my-app
```
Now this front-end application will be available at `http://<HOST>:8080`, where `<HOST>` is the server address.

Login for different roles - parents, hospital and kindergarten. The password for all roles is password.

## License
The project is developed by [NIX Solutions](http://nixsolutions.com) Go team and distributed under [MIT LICENSE](https://github.com/nixsolutions/blockchain-poc-frontend/blob/master/LICENSE)