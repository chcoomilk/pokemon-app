import {
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_FAILURE,
  FETCH_ITEM_SUCCESS,
} from "./actionType";
import {
  FetchItemRequest,
  FetchItemSuccess,
  FetchItemSuccessPayload,
  FetchItemFailure,
  FetchItemFailurePayload,
} from "./types";

export const fetchItemRequest = (): FetchItemRequest => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchItemSuccess = (
  payload: FetchItemSuccessPayload
): FetchItemSuccess => ({
  type: FETCH_ITEM_SUCCESS,
  payload,
});

export const fetchItemFailure = (
  payload: FetchItemFailurePayload
): FetchItemFailure => ({
  type: FETCH_ITEM_FAILURE,
  payload,
});
