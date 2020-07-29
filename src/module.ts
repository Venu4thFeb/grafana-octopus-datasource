import { DataSourcePlugin } from '@grafana/data';
import { OctopusDatasource } from './datasource';
import { OctopusConfigEditor } from './OctopusConfigEditor';
import { OctopusQueryEditor } from './OctopusQueryEditor';
import { OctopusAnnotationsEditor } from './OctopusAnnotationsEditor';

export const plugin = new DataSourcePlugin(OctopusDatasource)
  .setConfigEditor(OctopusConfigEditor)
  .setQueryEditor(OctopusQueryEditor)
  .setAnnotationQueryCtrl(OctopusAnnotationsEditor);
