export type MessengerAttributes = {
  /** The CSS selector of an element to trigger Intercom("show") in order to activate the messenger
   *
   * @remarks To target an element by ID: "#id_of_element". To target elements by class ".classname_of_elements"
   * @see {@link https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/customize-the-intercom-messenger-technical}
   */
  custom_launcher_selector?: string;
  /** Dictate the alignment of the default launcher icon to be on the left/right
   *
   * @remarks Possible values: "left" or "right" (any other value is treated as right)
   * @see {@link https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/customize-the-intercom-messenger-technical}
   */
  alignment?: string;
  /** Move the default launcher icon vertically
   *
   * @remarks Padding from bottom of screen. Minimum value: 20. Does not work on mobile
   * @see {@link https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/customize-the-intercom-messenger-technical}
   */
  vertical_padding?: number;
  /** Move the default launcher icon horizontally
   *
   * @remarks Padding from right side of screen. Minimum value: 20. Does not work on mobile
   * @see {@link https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/customize-the-intercom-messenger-technical}
   */
  horizontal_padding?: number;
  /** Hide the default launcher icon
   *
   * @remarks Setting to false will forcefully show the launcher icon
   * @see {@link https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/turn-off-show-or-hide-the-intercom-messenger}
   */
  hide_default_launcher?: boolean;
  /** Time in milliseconds for the Intercom session to be considered active
   *
   * @remarks A value of `5 * 60 * 1000` would set the expiry time to be 5 minutes
   */
  session_duration?: number;
  /** Used in button links and more to highlight and emphasise
   *
   * @remarks The color string can be any valid CSS: "color name", "hex" or "rgb"
   * @see {@link https://www.w3schools.com/cssref/css_colors.asp}
   */
  action_color?: string;
  /** Used behind your team profile and other attributes
   *
   * @remarks The color string can be any valid CSS: "color name", "hex" or "rgb"
   * @see {@link https://www.w3schools.com/cssref/css_colors.asp}
   */
  background_color?: string;
};

export type DataAttributesCompany = {
  /** The company ID of the company */
  company_id: string;
  /** The name of the company */
  name?: string;
  /** The time the company was created in your system */
  created_at?: string;
  /** The name of the plan the company is on */
  plan?: string;
  /** How much revenue the company generates for your business */
  monthly_spend?: number;
  /** Indicates the number of users in Intercom associated to the company
   *
   * @remarks Does not actually update the value but is a reserved keyword
   */
  user_count?: number;
  /** The number of employees in the company */
  size?: number;
  /** The URL for the company website */
  website?: string;
  /** The industry of the company */
  industry?: string;
};

export type DataAttributesAvatar = {
  /** The value is "avatar" */
  type: string;
  /** An avatar image URL
   *
   * @remarks Needs to be https */
  image_url?: string;
};

export type DataAttributes = {
  /** The email address of the currently logged in user
   * 
  @remarks Only applicable to users
  */
  email?: string;
  /** The user ID of the currently logged in user
   * 
  @remarks Only applicable to users
  */
  user_id?: string;
  /** The Unix timestamp (in seconds) when the user signed up to your app
   *
   * @remarks Only applicable to users
   * @see {@link https://www.w3schools.com/cssref/css_colors.asp}
   */
  created_at?: string;
  /** Name of the current user/lead */
  name?: string;
  /** Name of the current user/lead */
  phone?: string;
  /** This value can't actually be set by the Javascript API
   *
   * @remarks It automatically uses the time of the last request but is a this is a reserved attribute
   */
  last_request_at?: string;
  /** Sets the unsubscribe status of the record
   *
   * @see {@link https://www.intercom.com/help/en/articles/270-how-do-i-unsubscribe-users-from-receiving-emails}
   */
  unsubscribed_from_emails?: boolean;
  /** Set the messenger language programmatically (instead of relying on browser language settings)
   *
   * @see {@link https://www.intercom.com/help/en/articles/180-localize-intercom-to-work-with-multiple-languages}
   */
  language_override?: string;
  /** @see {@link https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters}
   *
   * @remarks All UTM parameters are updated automatically and can not be manually overidden
   */
  utm_campaign?: string;
  /** @see {@link https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters}
   */
  utm_content?: string;
  /** @see {@link https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters}
   */
  utm_medium?: string;
  /** @see {@link https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters}
   */
  utm_source?: string;
  /** @see {@link https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters}
   */
  utm_term?: string;
  /** Set the avatar/profile image associated to the current record
   *
   * @remarks Typically gathered via social profiles via email address
   * @see {@link https://www.intercom.com/help/en/articles/277-where-do-the-social-profiles-come-from}
   */
  avatar?: DataAttributesAvatar;
  /** Used for identity verification
   *
   * @see {@link https://www.intercom.com/help/en/articles/183-enable-identity-verification-for-web-and-mobile}
   * @remarks Only applicable to users
   */
  user_hash?: string;
  /** Current user's company
   *
   * @remarks Only applicable to users
   * @remarks Company ID and company name are the minimum requirements to pass a company into Intercom
   * @see {@link https://developers.intercom.com/installing-intercom/docs/javascript-api-attributes-objects#section-company-object}
   */
  company?: DataAttributesCompany;
  /** An array of companies the user is associated to
   *
   * @remarks Only applicable to users
   * @see {@link https://www.intercom.com/help/en/articles/186-group-your-users-by-company}
   */
  companies?: DataAttributesCompany[];
  /**
   * You can do this anytime by adding additional key/value pairs to your intercomSettings code snippet
   *
   * @see {@link https://www.intercom.com/help/en/articles/179-send-custom-user-attributes-to-intercom}
   * @remarks The key is the attribute name. The value is a placeholder for the data you’ll track
   */
  [customProperty: string]: any;
};

export type IntercomMethod =
  | 'boot'
  | 'shutdown'
  | 'update'
  | 'hide'
  | 'show'
  | 'showMessages'
  | 'showNewMessage'
  | 'onHide'
  | 'onShow'
  | 'onUnreadCountChange'
  | 'trackEvent'
  | 'getVisitorId'
  | 'startTour';

export type IntercomProps = MessengerAttributes & DataAttributes;

export type IntercomBootProps = {
  /** The app ID of your Intercom app which will indicate where to store any data  */
  app_id: string;
} & IntercomProps;

export type LogLevel = 'info' | 'error' | 'warn' | 'critical';
