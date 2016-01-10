import boom from 'boom';

export const userNotFound = (data) => boom.notFound('User not found', data);
export const paymentNotFound = (data) => boom.notFound('User not found', data);
export const validate = (valid) => boom.badRequest(valid.error.details[0].message);
