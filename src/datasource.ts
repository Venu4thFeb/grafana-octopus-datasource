import { flatten } from 'lodash';
import { DataSourceApi } from '@grafana/data';

export class OctopusDatasource extends DataSourceApi {
  constructor(private instanceSettings: any) {
    super(instanceSettings);
    console.log(this.instanceSettings);
  }
  testDatasource() {
    return new Promise(async (resolve: any, reject: any) => {
      resolve({ message: 'Successfully Connected to Octopus', status: 'success' });
    });
  }
  query(options: any) {
    console.log(options);
    const promises: any[] = [];
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
