import { DEFAULT_LOCALE } from './getLocale';

import type { AcceptLocales } from './getLocale';

export const getMessages = async (locale: AcceptLocales) => {
  try {
    const messages = import(`@app/locales/${locale}.json`);
    return messages;
  } catch (e) {
    const defaultMessages = await import(`@app/locales/${DEFAULT_LOCALE}.json`);
    return defaultMessages;
  }
};
