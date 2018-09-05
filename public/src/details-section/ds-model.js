import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { createClassName, COMMON_CLASSES } from '../common/';
import { CLASSES, NORULESSELECTED } from './ds-constants';
import LoadingSpinner from 'components/loading-spinner';

const RulesDetails = ( { data, loading, onTagClick } ) => {
  return (
    <div className={createClassName(COMMON_CLASSES.flexCol, CLASSES.detailsContainer)}>
      { loading ? <LoadingSpinner/> : 
        ( data ? 
          <div className='details-container'>
            {data.critical ? <div className='critical-container'>{' '}</div> : undefined}
            <div className='weight-container'>{data.maxWeight}</div>
            <h2 className='ruleTitle'>{data.name}</h2>
            <div className='tags-container'>
              {data.qualityStandards.length > 0 ? 
                <ul className='details-tag'>
                  {data.qualityStandards.map(function(listValue){
                    return <li key={listValue.id} className='detail-tag' onClick={() => onTagClick(listValue)}>{listValue.id}</li>;
                  })}
                </ul> : undefined }
            </div>
            <div className='description-container detailssection'>
              <p className='rulesection'>Description</p>
              <p>{data.description}</p>
            </div>
            <div className='rationale-container detailssection'>
              <p className='rulesection'>Rationale</p>
              <p>{data.rationale}</p>
            </div>
            <div className='remediation-container detailssection'>
              <p className='rulesection'>Remediation</p>
              <p>{data.remediation}</p>
            </div>
            <div className='sample-container detailssection'>
              <p className="rulesection">Sample</p>
              <pre><code>{data.sample}</code></pre>
            </div>
            <div className='remediationsample-container detailssection'>
              <p className='rulesection'>Remediation Sample</p>
              <pre><code>{data.remediationSample}</code></pre>
            </div>
            <div className='reference-container detailssection'>
              <p className='rulesection'>Reference</p>
              <p className='textrule'>{data.reference}</p>
            </div>
          </div>
          : <div className={COMMON_CLASSES.txtCenter}>{NORULESSELECTED}</div> )
      }
    </div>
  );
};

RulesDetails.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onTagClick: PropTypes.func.isRequired
};

export default RulesDetails;