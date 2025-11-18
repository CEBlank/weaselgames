/* //const { MongoClient, ServerApiVersion } = require("mongodb");
import config from '../mongoConfig.json';
import mongodb from 'mongodb';

//mongodb.MongoClient;



// Replace the placeholders in the connection string uri with your credentials
const uri = config.MONGODB_URI;
const MongoClient = mongodb.MongoClient;
const ServerApiVersion = mongodb.ServerApiVersion;

// Create a client with options to specify Stable API Version 1
const client = new MongoClient(uri,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }); */