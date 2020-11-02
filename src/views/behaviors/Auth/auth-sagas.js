import { toast } from 'react-toastify';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import history from '#lib/history-lib.js';

import fastFeetApi from '#services/fastfeet-api.js';

import { signInSuccess } from './auth-actions.js';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const req = yield call(fastFeetApi.post, 'session', {
      email,
      password,
    });

    const { token, user } = req.data;

    fastFeetApi.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/');
    location.reload();
  } catch (error) {
    toast.error('Error. Check the request!');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
