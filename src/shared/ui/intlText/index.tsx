import { useIntl } from '@hooks';
import React, { Fragment } from 'react';

interface IntlTextProps {
  pass: string;
}

export const IntlText: React.FC<IntlTextProps> = ({ pass }) => {
  const intl = useIntl();
  return <>{intl.messages[pass]}</>;
};
