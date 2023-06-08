import _ from 'lodash';
import isJSON from './isJSON';

interface LoDashMixins extends _.LoDashStatic {
  isJSON<T>(value: T): boolean;
}

_.mixin({
  isJSON
});

export default <LoDashMixins>_;