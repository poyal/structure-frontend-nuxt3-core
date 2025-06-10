import {number, string, array, object, enums, date, datetime, time} from '~/utils/yup';
import {CUSTOM_TYPE} from '~/store/type/enum';

// TODO: TDZ 해결 해야함.
export namespace TypeSchema {
  export namespace Response {
    export const Id = object({
      id: number('아이디')
    });

    export const Item = object({
      name: string('이름')
    }).label('아이템');

    export const FindAll = object({
      title: string('타이틀'),
      customType: enums('customType', CUSTOM_TYPE.ENUM),
      date: date('date'),
      datetime: datetime('datetime'),
      time: time('time'),
      item: TypeSchema.Response.Item,
      items: array('아이템 목록', TypeSchema.Response.Item)
    }).concat(TypeSchema.Response.Id);
  }
}
