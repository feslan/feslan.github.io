import { Injectable } from '@angular/core';
import mixpanel, { Dict } from 'mixpanel-browser';
// import * as mixpanel from 'mixpanel-browser';

@Injectable()
export class MixpanelService {
  private mixpanelToken: string;

  /**
   * constructor
   * get mixpanel token and initialize
   */
  constructor() {
    this.mixpanelToken = '875e9ff0a62dc433a8e4a96e88d26069';

    this.init();
  }

  /**
   * Initialize mixpanel.
   */
  init(): void {
    mixpanel.init(this.mixpanelToken);
  }

  /**
   * Create new Alias for user
   * Call this method only once in user lifecycle
   *
   * @param {string} alias
   */
  createAlias(alias: string) {
    mixpanel.alias(alias, mixpanel.get_distinct_id());
  }

  /**
   * Identify User
   *
   * @param {string} alias
   */
  identify(alias: string) {
    mixpanel.identify(alias);
  }

  /**
   * Push new action to mixpanel.
   *
   * @param {string} id Name of the action to track.
   * @param {*} [action={}] Actions object with custom properties.
   * @memberof MixpanelService
   */

  /**
   * setup mixpannel
   *
   */
  setup() {
    // mixpanel.loggingEnabled = false;
    this.setSuperProperties({ Platform: 'web' });
  }

  /**
   * setPeople
   * Store user profiles in Mixpanel's People Analytics product
   * @param {Object} properties
   */
  setPeople(properties: any = {}): void {
    mixpanel.people.set(properties);
  }

  /**
   * setSuperProperties
   *
   * @param {object} properties
   */
  setSuperProperties(properties: any) {
    mixpanel.register(properties);
  }

  /**
   * sendEvent
   *
   * @param {string} event
   * @param {object} properties
   */
  sendEvent(event: string, properties?: any) {
    if (properties) {
      mixpanel.track(event, properties);
    } else {
      this.trackEvent(event);
    }
  }

  /**
   * trackEvent
   * @param {string} event
   */
  trackEvent(event: string) {
    mixpanel.track(event);
  }

  timeEvent(eventName: string) {
    mixpanel.time_event(eventName);
  }

  /**
   * Reset Mixpanel
   */
  logout() {
    mixpanel.reset();
  }
}
