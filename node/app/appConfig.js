let appConfig={};

appConfig.port=3100;
appConfig.allowCorsOrigin="*";
appConfig.env="dev";
appConfig.db={
    uri='mongodb://127.0.0.1:27017/blogAppDB',
};
appConfig.apiVersion ='/api/v1';

module.exports={
    port: appConfig.port,
    allowCorsOrigin : appConfig.allowCorsOrigin,
    Evnviornment : appConfig.env,
    db: appConfig.db,
    apiversion: appConfig.apiVersion

}