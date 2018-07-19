import React from 'react';
import '../style/detailsPanel.css';
import { createClassName } from '../common/lib';

export default class DetailsPanel extends React.PureComponent{
  render(){
    if (this.props.data){

      const criticalblock = this.props.data.critical ? <div className='critical-container'>{' '}</div> : '';
      const weightblock = this.props.data.maxWeight ? <div className='weight-container'>{this.props.data.maxWeight}</div> : '';
      const remediationblock = this.props.data.remediation ? <div className='remediation-container detailssection'><p className='rulesection'>Remediation</p><p>{this.props.data.remediation}</p></div> : '';
      const rationaleblock = this.props.data.rationale ? <div className='rationale-container detailssection'><p className='rulesection'>Rationale</p><p>{this.props.data.rationale}</p></div> : '';
      const sampleblock = this.props.data.sample ? <div className='sample-container detailssection'><p className="rulesection">Sample</p><pre><code>{this.props.data.sample}</code></pre></div> : '';
      const remediationsampleblock = this.props.data.remediationSample ? <div className='remediationsample-container detailssection'><p className='rulesection'>Remediation Sample</p><pre><code>{this.props.data.remediationSample}</code></pre></div> : '';
      const referenceblock = this.props.data.reference ? <div className='reference-container detailssection'><p className='rulesection'>Reference</p><p className='textrule'>{this.props.data.reference}</p></div> : '';
      //const outputblock = this.props.data.output ? <div className='output-container detailssection'><p className='rulesection'>Output</p><p className='textrule'>{this.props.data.output}</p></div> : '';
      //const techCriteria = this.props.data.
      let tagsblock;

      if( this.props.data.qualityStandards && this.props.data.qualityStandards.length > 0)
      {
        tagsblock = <ul className='details-tag'>{this.props.data.qualityStandards.map(function(listValue){return <li key={listValue.id} className='detail-tag' onClick={() => this.props.onTagClick(listValue)}>{listValue.id}</li>;})}</ul>;
      }

      // optional at the end of the block
      /*{outputblock}*/

      return (
        <div className={createClassName('flxc', 'flxShink4', 'ovfyauto')}>
          {criticalblock}
          {weightblock}
          <h2 className='ruleTitle'>{this.props.data.name}</h2>
          <div className='tags-container'>
            {tagsblock}
          </div>
          <div className='description-container detailssection'>
            <p className='rulesection'>Description</p>
            <p>{this.props.data.description}</p>
          </div>
          {rationaleblock}
          {remediationblock}
          {sampleblock}
          {remediationsampleblock}
          {referenceblock}
        </div>
      );
    }
    return (<div className={createClassName('flxc', 'flxGrw1', 'txtcenter', 'fright')}>No Rule Selected</div>);
  }

  parseCodeSample(sample){
    const newLine = /\\n/g, htmlBR = /\\/;
    return sample.replace(newLine, htmlBR);
  }
}