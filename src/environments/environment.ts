// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  warUrl: 'http://121.129.12.192:33333/base/fightRecord/',
  termUrl: 'http://121.129.12.192:33333/milltaryTerm/',
  quizUrl: 'http://121.129.12.192:33333/base/quiz/?category=militaryTerm',
  quizUrl2: 'http://121.129.12.192:33333/base/quiz/?category=fightRecord',
  quizUrl3: 'http://121.129.12.192:33333/base/quiz/?category=all'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
