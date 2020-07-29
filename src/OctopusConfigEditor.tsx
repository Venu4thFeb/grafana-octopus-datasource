import React, { PureComponent, ChangeEvent } from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceJsonData } from '@grafana/data';

export interface OctopusDataSourceOptions extends DataSourceJsonData {
  octopusURL?: string;
}
export interface OctopusDatasourceSecureJsonData {
  ApiKey?: string;
}
interface Props extends DataSourcePluginOptionsEditorProps<OctopusDataSourceOptions> { }
interface State { }

export class OctopusConfigEditor extends PureComponent<Props, State> {
  onOctopusURLChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      octopusURL: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };
  onAPIKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonData: {
        ApiKey: event.target.value,
      },
    });
  };
  onResetAPIKey = () => {
    const { onOptionsChange, options } = this.props;
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        ApiKey: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        ApiKey: '',
      },
    });
  };
  render() {
    const { options } = this.props;
    const secureJsonData = (options.secureJsonData || {}) as OctopusDatasourceSecureJsonData;
    const { jsonData, secureJsonFields } = options;
    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <label className="gf-form-label width-10" title="Tenant ID">
            Octopus URL
          </label>
          <input
            className="gf-form-input width-24"
            type="text"
            onChange={this.onOctopusURLChange}
            value={jsonData.octopusURL || ''}
            placeholder="https://<YOUR_OCTOPUS_URL>.com"
          ></input>
        </div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-10" title="API Key">
              API Key
            </label>
            {((secureJsonFields && secureJsonFields.ApiKey) as boolean) ? (
              <>
                <label className="gf-form-label width-18">Configured</label>
                <span className="gf-form-button btn btn-secondary width-6" onClick={this.onResetAPIKey}>
                  Reset
                </span>
              </>
            ) : (
                <input
                  type="password"
                  value={secureJsonData.ApiKey || ''}
                  className="gf-form-input width-24"
                  onChange={this.onAPIKeyChange}
                ></input>
              )}
          </div>
        </div>
      </div>
    );
  }
}
