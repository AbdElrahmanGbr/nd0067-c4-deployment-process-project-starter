import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `gbr`,
  password: "password123#",
  database: "udagram",
  host: "udagram.c1dvq4j92zcn.us-east-1.rds.amazonaws.com",
  aws_region: "",
  AWS_DEFAULT_REGION: "",
  aws_profile: "",
  aws_media_bucket: "",
  url: "http://localhost:8080",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  accessKeyId : "",
  secretAccessKey : ""
};
