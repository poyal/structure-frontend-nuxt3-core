import dayjs from 'dayjs';
import type {ObjectShape, ISchema} from 'yup';
import {array as _array, number as _number, string as _string, object as _object, addMethod} from 'yup';

import {DATE_FORMAT, TIME_FORMAT, DATE_TIME_FORMAT} from '~/utils/yup/yup-date-format.config';

addMethod(_string, 'datetime', function (format: DATE_TIME_FORMAT) {
  return this.transform((value) => dayjs(value).format(format));
});

addMethod(_string, 'date', function (format: DATE_FORMAT) {
  return this.transform((value) => dayjs(value).format(format));
});

addMethod(_string, 'time', function (format: TIME_FORMAT) {
  return this.transform((value: string) => {
    const times: string[] = value.split(':');
    const hour: number = Number(times?.[0] ?? 0);
    const minute: number = Number(times?.[1] ?? 0);
    const second: number = Number(times?.[2] ?? 0);

    return dayjs(new Date().setHours(hour, minute, second)).format(format);
  });
});

addMethod(_string, 'enums', function (targets: any) {
  return this.transform((value) => targets[value]);
});

export const object = (schema: ObjectShape) => _object(schema).nullable();

export const array = (label: string = '', schema: ISchema<any>) =>
  _array().nullable().default(null).label(label).of(schema).defined();

export const number = (label: string = '') => _number().nullable().default(null).label(label).defined();

export const string = (label: string = '') => _string().nullable().default(null).label(label).defined();

export const date = (label: string = '', format: DATE_FORMAT = DATE_FORMAT.DEFAULT) =>
  _string().nullable().default(null).label(label).defined().date(format);

export const datetime = (label: string = '', format: DATE_TIME_FORMAT = DATE_TIME_FORMAT.DEFAULT) =>
  _string().nullable().default(null).label(label).defined().datetime(format);

export const time = (label: string = '', format: TIME_FORMAT = TIME_FORMAT.DEFAULT) =>
  _string().nullable().default(null).label(label).defined().time(format);

export const enums = (label: string = '', targetEnum: any) =>
  _string().nullable().default(null).label(label).defined().enums(targetEnum);
