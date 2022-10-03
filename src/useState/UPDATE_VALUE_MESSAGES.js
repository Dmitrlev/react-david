if (action.type === UPDATE_VALUE_MESSAGES) {
  this._State.MessagesBLOCK.DialogAllMesseges.forEach( el => el.id === action.id ? el.NewMessagesChange = action.NEW_TEXT : null);
  this.renderMain(this._State);
}s