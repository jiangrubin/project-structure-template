import _ from 'lodash';

export default function isJSON<T> (value: T): boolean {
  return !_.isError(_.attempt(JSON.parse, value));
}