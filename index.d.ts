import * as Yup from 'Yup';
import type {DATE_FORMAT, DATE_TIME_FORMAT, TIME_FORMAT} from '~/utils/yup/yup-date-format.config';

declare module 'nitropack' {
  interface NitroApp {
    mapper: () => string;
  }
}

declare module 'yup' {
  interface StringSchema extends Yup.StringSchema {
    enums(targetEnum: any): StringSchema;

    date(format: DATE_FORMAT): StringSchema;

    time(format: TIME_FORMAT): StringSchema;

    datetime(format: DATE_TIME_FORMAT): StringSchema;
  }
}
