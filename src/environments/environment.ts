// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  token:
    '0NMJRkV7Mt6CoFZ10E_31b4jxuoPRMSJUP1u-xS2wdlY6LMS6SU8RgpxYpigWVaxhr5xaFPV33G44TH1JvtZJNhe4G8YZFmT6TZ4u8h_TSJqQbYJgRti857GZQgj2Dar5fAy4SiAHYzx_xVgEJ8FxrXNbDS4eJZtIuO1ufetGfeNt7hQKvNRpjGwmkc232gR-7D5X2skZy0VHremngZVKnltFcWeOObUqBXzK1J2KYV8UqELhh_4k-i92C4ix75R4luwMu_jizISev0zJCvGW0mZvlX6YC02Ggrgq2EF3IziliyI2Od6RTvhzPQthHDH-XKFCzJk6ZyC5p1KbN_suw',
  api: 'https://data-test.ezone.ly/api/',
  getOrders: 'orders/getAllOrders?index=1&paymentStatus=0',
  getOrder: 'orders/getOrder',
  getOrderItems: 'orders/getOrderItems',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
