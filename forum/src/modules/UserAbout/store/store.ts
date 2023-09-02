import { makeAutoObservable } from 'mobx';
import { INotebook } from '../../../interfaces&types/interfaces&types';

class NotebookState {
  page: INotebook = 'заметки';
  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: INotebook) {
    this.page = page;
  }
}

export default new NotebookState();
