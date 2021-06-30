import {
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE
} from "./actionTypes";

export interface Item {
  name: string,
  url: string
}

export interface ItemState {
  pending: boolean;
  items: Item[];
  error : string | null;
}

export interface FetchItemSuccessPayload {
  items: Item[];
}

export interface FetchItemFailurePayload {
  error: string;
}

export interface FetchItemRequest {
  type: typeof FETCH_ITEM_REQUEST;
}

export type FetchItemSuccess = {
  type: typeof FETCH_ITEM_SUCCESS;
  payload: FetchItemSuccessPayload;
};

export type FetchItemFailure = {
  type: typeof FETCH_ITEM_FAILURE;
  payload: FetchItemFailurePayload;
};

export type ItemActions =
  | FetchItemRequest
  | FetchItemSuccess
  | FetchItemFailure;
