import {number, string, date, object} from '~/utils/yup';

export const Auth = object({
  updateAt: date('수정일자'),
  updateBy: string('수정자')
});

export namespace AlbumSchema {
  export namespace Response {
    export const FindAll = object({
      id: number('아이디'),
      title: string('타이틀'),
      userId: number('유져아이디')
    });

    export const FindOne = object({
      id: number('아이디'),
      title: string('타이틀'),
      userId: number('유져아이디')
    }).concat(Auth);
  }

  export namespace Request {
    export const Add = object({
      id: number('아이디').required(),
      title: string('타이틀').required(),
      userId: number('유져아이디').optional()
    });
  }
}
