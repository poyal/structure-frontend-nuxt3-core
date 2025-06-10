import type {InferType} from 'yup';

import {TypeSchema} from '~/store/type/model';

export namespace TypeModel {
  export namespace Response {
    export type FindAll = InferType<typeof TypeSchema.Response.FindAll>;
    export type Id = InferType<typeof TypeSchema.Response.Id>;
    export type Item = InferType<typeof TypeSchema.Response.Item>;
  }
}
