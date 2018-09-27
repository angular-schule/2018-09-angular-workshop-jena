import { Action } from '@ngrx/store';

import { Book } from '../../shared/book';

export enum BooksActionTypes {
    LoadBooks = '[Books] Load books',
    LoadBooksSuccess = '[Books] Load books success',
    LoadBooksFail = '[Books] Load books fail',
}


export class LoadBooks {
    readonly type = BooksActionTypes.LoadBooks;
}

export class LoadBooksSuccess {
    readonly type = BooksActionTypes.LoadBooksSuccess;
    constructor(public payload: Book[]) {}
}

export class LoadBooksFail {
    readonly type = BooksActionTypes.LoadBooksFail;
    constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BooksActions =
    LoadBooks
    | LoadBooksSuccess
    | LoadBooksFail;
