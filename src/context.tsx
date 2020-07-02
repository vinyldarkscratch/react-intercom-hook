import { createContext } from 'react';

import * as logger from './logger';
import { IntercomContextValues } from './contextTypes';

const NO_INTERCOM_PROVIDER_MESSAGE =
  'Please wrap your component with `IntercomProvider`.';

const IntercomContext = createContext<IntercomContextValues>({
  boot: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  shutdown: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  hardShutdown: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  update: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  hide: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  show: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  showMessages: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  showNewMessages: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  getVisitorId: () => {
    logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE);
    return '';
  },
  startTour: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
  trackEvent: () => logger.log('critical', NO_INTERCOM_PROVIDER_MESSAGE),
});

export default IntercomContext;
