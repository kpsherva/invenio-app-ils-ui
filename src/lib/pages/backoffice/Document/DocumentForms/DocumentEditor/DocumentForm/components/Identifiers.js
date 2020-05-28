import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ObjectArrayField, StringField, VocabularyField } from '@forms';
import { invenioConfig } from '@config';

export class Identifiers extends Component {
  render() {
    const { vocabularies } = this.props;
    return (
      <ObjectArrayField
        accordion
        fieldPath="identifiers"
        label="Identifiers"
        defaultNewValue={{
          scheme: '',
          value: '',
          material: '',
        }}
        objects={[
          {
            key: 'scheme',
            element: VocabularyField,
            props: {
              type: vocabularies.scheme,
              label: 'Scheme',
            },
          },
          {
            key: 'value',
            element: StringField,
            props: {
              inline: true,
              label: 'Value',
              required: true,
              optimized: true,
            },
          },
          {
            key: 'material',
            element: StringField,
            props: { inline: true, label: 'Material', optimized: true },
          },
        ]}
      />
    );
  }
}

Identifiers.propTypes = {
  vocabularies: PropTypes.shape({
    scheme: PropTypes.exact(
      invenioConfig.vocabularies.document.identifier.scheme
    ),
  }).isRequired,
};
