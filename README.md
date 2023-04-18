# Hosting a Full-Stack Application

# Udagram
This application is provided to you as an alternative starter project if you do not wish to host your own code done in the previous courses of this nanodegree. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application.
- **The link of deploying** : ```http://gbr-udagram-fullstack.s3-website-us-east-1.amazonaws.com/```


## Built With
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![ESLint](https://img.shields.io/static/v1?style=for-the-badge&message=ESLint&color=4B32C3&logo=ESLint&logoColor=FFFFFF&label=)
![Jasmine](https://img.shields.io/static/v1?style=for-the-badge&message=Jasmine&color=8A4182&logo=Jasmine&logoColor=FFFFFF&label=)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![CircleCi](https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white)
![PostgresSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Prerequisites

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

- A EB for hosting server.

```

### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. Download or clone project to your PC

2. setup dependenscies
    - Download all pervious by :

      ```bash
      npm run api:install
      npm run frontend:install
      ```

3. setup databases

    - open postgres on postbird or cmd , coonect to database and create db and its recomended to set it "postgres"

      ```bash
      psql -U postgres
      CREATE DATABASE udagram;
      \c udagram;
      ```

4. Env Set up

    - environmental variables that needs to set in .env file.

    ```
      POSTGRES_USERNAME="postgres"
      POSTGRES_PASSWORD="postgres"
      POSTGRES_HOST="localhost"
      POSTGRES_DB="udagram"
      AWS_BUCKET="arn:aws:s3::: **your s3 bucket name** "
      AWS_REGION="us-east-1"
      AWS_PROFILE="default"
      JWT_SECRET=" **yoursecrettoken** "
      URL="http://localhost"
      AWS_ACCESS_KEY_ID=" **yourAWS_ACCESS_KEY_ID** "
      AWS_SECRET_ACCESS_KEY=" **yourAWS_SECRET_ACCESS_KEY** "
      POSTGRES_PORT=5432
      PORT=8080
    ```

6. build server

   ```
     api:build
   ```
7. build frontend

   ```
     frontend:build
   ```

## Testing

This project contains two different test you can run it by

1. `npm run frontend:test`
2. `npm run api:test`

There are no Unit test on the back-end

### Deploying

This project you can deploy it by:
1. `npm run deploy`

- **BUT BEFORE IT YOU SHOULD CHANGE**
   ```
     in udagram/udagram-frontend/bin/deploy.sh
     "aws s3 cp --recursive ./www s3://**your s3 bucket name**/"
   ```

- **AND**

   ```
     in udagram/udagram-api/bin/deploy.sh
     eb init udagram-api --platform node.js --region us-east-1
     eb use Udagramapi-dev
     eb deploy

     eb setenv AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY"
     AWS_DEFAULT_REGION="$AWS_DEFAULT_REGION" POSTGRES_USERNAME="$POSTGRES_USERNAME" POSTGRES_PASSWORD="$POSTGRES_PASSWORD"
     POSTGRES_DB="$POSTGRES_DB" PORT="$PORT" POSTGRES_HOST="$POSTGRES_HOST" AWS_REGION="$AWS_REGION" 
     AWS_PROFILE="$AWS_PROFILE" AWS_BUCKET="$AWS_BUCKET" URL="$URL" dbport="$dbport" JWT_SECRET="$JWT_SECRET" 
     AWS_PROFILE="$AWS_PROFILE"
 
   ```