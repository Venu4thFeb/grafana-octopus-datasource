import { DataSourcePlugin } from '@grafana/data';
import { Datasource } from './datasource';
import { OctopusConfigEditor } from './OctopusConfigEditor';
import { OctopusQueryEditor } from './OctopusQueryEditor';
import { OctopusAnnotationsEditor } from './OctopusAnnotationsEditor';

export const plugin = new DataSourcePlugin(Datasource)
  .setConfigEditor(OctopusConfigEditor)
  .setQueryEditor(OctopusQueryEditor)
  .setAnnotationQueryCtrl(OctopusAnnotationsEditor);
