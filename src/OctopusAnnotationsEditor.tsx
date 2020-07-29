import React, { PureComponent } from 'react';
import { QueryEditorProps, DataQuery } from '@grafana/data';
import { OctopusDatasource } from './datasource';

export interface OctopusQuery extends DataQuery {}

type Props = QueryEditorProps<OctopusDatasource, OctopusQuery>;
interface State {}

export class OctopusAnnotationsEditor extends PureComponent<Props, State> {
  render() {
    return <div>Octopus Query Editor</div>;
  }
}
