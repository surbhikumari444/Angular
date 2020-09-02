let appConfig={};

appConfig.pprt=3100;
appConfig.allowCorsOrigin="*";
appConfig.env="dev";
// appConfig.db={
//     uri='mongoDB://test:test@127.0.0.1:27017/biogAppDB'
// };
appConfig.apiVersion ='/api/v1';

module.exports={
    port: appConfig.pprt,
    allowCorsOrigin : appConfig.allowCorsOrigin,
    Evnviornment : appConfig.db,
    db: appConfig.db,
    apiversion: appConfig.apiVersion

}