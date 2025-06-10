import {useAlbumServerStore} from '~/store/album/album.server';
import type {AlbumModel} from '~/store/album/album.model';
import {AlbumSchema} from '~/store/album/album.schema';
import {getDefault} from '~/utils/yup';

export default defineEventHandler(async (event) => {
  const id: string | undefined = getRouterParam(event, 'id');
  let one: AlbumModel.Response.FindOne = getDefault<AlbumModel.Response.FindOne>(AlbumSchema.Response.FindOne);

  const store = useAlbumServerStore();
  await store.setOne(id);
  const data: AlbumModel.Response.FindOne = store.getOne();

  if (!!data) {
    one = data;
  }

  return {one};
});
