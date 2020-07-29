import React, { PureComponent } from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceJsonData } from '@grafana/data';

export interface OctopusDataSourceOptions extends DataSourceJsonData {}
export interface AzureMonitorSecureJsonData {}
interface Props extends DataSourcePluginOptionsEditorProps<OctopusDataSourceOptions> {}
interface State {}

export class OctopusConfigEditor extends PureComponent<Props, State> {
  render() {
    return <div>Octopus Config Editor</div>;
  }
}
