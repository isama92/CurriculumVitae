import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

const company = props => {
    return (<span>
        <span>{props.name}&nbsp;|&nbsp;</span>
        <FormattedDate value={props.from} month="long" year="numeric"/>&nbsp;-&nbsp;
        <FormattedDate value={props.to} month="long" year="numeric"/>
    </span>);
};

company.propTypes = {
    name: PropTypes.string.isRequired,
    from: PropTypes.instanceOf(Date).isRequired,
    to: PropTypes.instanceOf(Date).isRequired,
};

export default company;
