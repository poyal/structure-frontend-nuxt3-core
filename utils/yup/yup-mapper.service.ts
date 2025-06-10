import type {AnySchema} from 'yup';

export function parse<T>(schema: AnySchema, value: T): T {
  return schema.cast(value);
}

export function getDefault<T>(schema: AnySchema) {
  return schema.getDefault() as T;
}
