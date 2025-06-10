import type {InferType} from 'yup';

import {AlbumSchema} from '~/store/album/album.schema';

export namespace AlbumModel {
  export namespace Response {
    export type FindAll = InferType<typeof AlbumSchema.Response.FindAll>;
    export type FindOne = InferType<typeof AlbumSchema.Response.FindOne>;
  }

  export namespace Request {
    export type Add = InferType<typeof AlbumSchema.Request.Add>;
  }
}
