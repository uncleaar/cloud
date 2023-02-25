import { DEFAULT_LOCALE } from './getLocale';

import type { AcceptLocales } from './getLocale';

export const getMessages = (locale: AcceptLocales) => {
  const messages = import(`@app/locales/${locale}.json`);

  return messages;
};
