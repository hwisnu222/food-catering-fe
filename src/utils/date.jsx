import { format as formatFns } from "date-fns";

export const DateUtility = {
  format: (date) => {
    console.log({ date });
    return formatFns(new Date(date), "PPpp");
  },
};
