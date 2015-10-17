import { createConstants } from 'utils';

//todo: remove email_array_fetch, not used anywhere
export default createConstants(
  'EMAIL_ARRAY_FETCH',
  'EMAIL_ARRAY_REQUEST',
  'EMAIL_ARRAY_FETCH_SUCCESS',
  'EMAIL_ARRAY_FETCH_ERROR',

  'ALL_EMAIL_FETCH_REQUEST',
  'ALL_EMAIL_FETCH_SUCCESS',
  'ALL_EMAIL_FETCH_ERROR',

  'ML_EMAIL_FETCH_REQUEST',
  'ML_EMAIL_FETCH_SUCCESS',
  'ML_EMAIL_FETCH_ERROR',

  'CLEAR_ALL_EMAILS_CACHE',

  'EMAIL_SHOW_ONE_FLAG',
  'EMAIL_SHOW_ALL_FLAGS',
  'EMAIL_SHOW_COMPLETE',

  'ALL_EMAILS_SHOW_ONE_FLAG',
  'ALL_EMAILS_SHOW_ALL_FLAGS',
  'ALL_EMAILS_SHOW_COMPLETE',

  'REQUESTING_EMAIL_UNFLAG',
  'EMAIL_UNFLAG_ERROR',
  'EMAIL_UNFLAG_SUCCESS',
  'EMAIL_MARK_READ_SUCCESS',
  'EMAIL_MARK_READ_ERROR',
);
