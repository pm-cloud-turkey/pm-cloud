// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: true,
    url: {
        monitoringServicesApi: "http://local.promanage-cloud.com:30083/api/",
        monitoringServicesRealTime: "http://local.promanage-cloud.com:30083/realTime/",
        epcServicesApi: "http://local.promanage-cloud.com:30084/api/",
        epcServicesRealTime: "http:/local.promanage-cloud.com:30084/realTime/",
        authServicesApi: "http://local.promanage-cloud.com:30082"
    }
};
