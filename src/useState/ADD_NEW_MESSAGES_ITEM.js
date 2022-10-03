if (action.type === ADD_NEW_MESSAGES_ITEM) {
  const pushMessAg = el => (
    el.NewMessagesChange === '' ? null : el.MeSSeges.push(el.NewMessagesChange),
      el.NewMessagesChange = ''
  );
  this._State.MessagesBLOCK.DialogAllMesseges.forEach( el => el.id === action.id ? pushMessAg(el) : null);
  this.renderMain(this._State);
}