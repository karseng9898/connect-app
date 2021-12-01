import moment from 'moment';
import _ from 'lodash';

export function composeValidators(...args: any[]) {
  return (value: string) => {
    let error;
    _.forEach(args, validator => {
      const res = validator(value);
      if (res) {
        error = res;
      }
    });
    return error;
  };
}

export function required(value: string) {
  return value ? undefined : 'This field is required';
}

export function confirmPassword(password: string) {
  return (value: string) =>
    value === password ? undefined : 'Password does not match';
}

export function maxLength(max: number) {
  return (value: string) =>
    value && value.length > max
      ? `Must be ${max} characters or less`
      : undefined;
}

export function minLength(min: number) {
  return (value: string) =>
    value && value.length < min
      ? `Must be ${min} characters or more`
      : undefined;
}

export function maxNumber(max: number) {
  return (value: string) =>
    _.toNumber(value) > max ? `Must be ${max} or less` : undefined;
}

export function minNumber(min: number) {
  return (value: string) =>
    _.toNumber(value) < min ? `Must be ${min} or more` : undefined;
}

export function email(value: string) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
}

export function alphaNumeric(value: string) {
  return value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
}

export function number(value: string) {
  return value && /[^0-9 ]/i.test(value)
    ? 'Only numeric characters'
    : undefined;
}

export function validDate(value: string) {
  const date = moment(value);
  return date.isValid() ? undefined : 'Invalid date';
}

export function noWhiteSpace(value: string) {
  return value && /\s/.test(value) ? 'White space is not allowed' : undefined;
}
