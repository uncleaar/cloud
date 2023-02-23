import { useContext } from 'react';

import { IntlContext } from '@i18n';

export const useIntl = () => {
  const intl = useContext(IntlContext);

  return intl;
};
