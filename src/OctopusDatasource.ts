export class OctopusDataSource {
    private url: string;
    constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any) {
        this.url = this.instanceSettings.url + '/octopus';
        console.log(typeof this.templateSrv);
    }
    private doOctopusRequest(options: any, maxRetries = 1) {
        return this.backendSrv
            .datasourceRequest({
                method: 'GET',
                url: this.url + `/api/serverstatus`,
            })
            .catch((error: any) => {
                if (maxRetries > 0) {
                    return this.doOctopusRequest(options, maxRetries - 1);
                }
                throw error;
            });
    }
    private doQueries(queries: any[]) {
        return queries.map((query: any) => {
            return this.doOctopusRequest(query)
                .then((result: any) => {
                    return { result, query };
                })
                .catch((error: any) => {
                    throw { error, query };
                });
        });
    }
    query(options: any): Promise<any> {
        const queries: any[] = options.targets
            .filter((item: any) => {
                return item.hide !== true
            })
            console.log(queries);
        const promises = this.doQueries(queries);
        return Promise.all(promises).then((results: any) => {
            console.log(results);
            return results;
        });
    }
}