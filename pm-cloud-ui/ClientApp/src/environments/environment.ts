// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    url: {
        monitoringServicesApi: "http://localhost:12001/api/",
        monitoringServicesRealTime: "http://localhost:12001/realTime/",
        epcServicesApi: "http://localhost:12003/api/",
        epcServicesRealTime: "http://localhost:12003/realTime/",
        authServicesApi: "http://local.promanage-cloud.com:5000"
    }
};
