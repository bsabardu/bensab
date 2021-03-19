/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import Components
import { Button } from 'semantic-ui-react';

// == Import
import './styles.scss';

const ButtonMailto = ({ mailto, content, ...props }) => (
  <Button
    {...props}
    onClick={(e) => {
      window.location = mailto;
      e.preventDefault();
    }}
    content={content}
  />
);

// On déclare le type de props attendu
ButtonMailto.propTypes = {
  mailto: PropTypes.string,
  content: PropTypes.string,
};

ButtonMailto.defaultProps = {
  mailto: 'mailto:bsabardu@gmail.com',
  content: 'Contactez-moi',
};

export default ButtonMailto;
