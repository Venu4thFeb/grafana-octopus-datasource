import { flatten, cloneDeep } from 'lodash';
import { DataSourceApi } from '@grafana/data';
import { OctopusDataSource } from './OctopusDatasource';

export class Datasource extends DataSourceApi {
  private octopusDataSource: OctopusDataSource;
  constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any) {
    super(instanceSettings);
    this.octopusDataSource = new OctopusDataSource(this.instanceSettings, this.backendSrv, this.templateSrv);
  }
  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      this.octopusDataSource.query({
        targets: [{
          hide: false
        }]
      }).then((res: any) => {
        resolve({ message: 'Successfully Connected to Octopus', status: 'success' });
      }).catch((ex: any) => {
        reject({ message: 'Failed to connected Octopus', status: 'error' });
      })
    });
  }
  query(options: any) {
    const promises: any[] = [];
    const octoOptions = cloneDeep(options);
    if (octoOptions.targets.length > 0) {
      const octoPromise = this.octopusDataSource.query(octoOptions);
      if (octoPromise) {
        promises.push(octoPromise);
      }
    }
    return Promise.all(promises).then(results => {
      return { data: flatten(results) };
    });
  }
  annotationQuery(options: any) {
    console.log(options);
    const promises: any[] = [];
    return Promise.all(promises).then(results => {
      return [];
    });
  }
  metricFindQuery(query: string) {
    console.log(query);
    return Promise.resolve([]);
  }
}
