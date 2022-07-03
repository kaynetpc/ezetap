/* eslint-disable no-console */
export const LogService = {
  info(...info: any[]) {
    console.log(info);
  },
  error(error: any) {
    console.error(error);
  },
};
