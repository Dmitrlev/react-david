if (action.type === HEADER_CHAT_SEACH) {
  this._State.MessagesBLOCK.HeaderChatSeach = action.valueHeader;
  const CURRENTLY_CHAT = el => {
    for (let i = 0; i < this._State.MessagesBLOCK.HeaderChatSeach.length; i++) {
      el.display = this._State.MessagesBLOCK.HeaderChatSeach[i].toUpperCase() === el.name[i].toUpperCase() ? 'flex' : 'none';
      if(this._State.MessagesBLOCK.HeaderChatSeach[i].toUpperCase() !== el.name[i].toUpperCase()) {
        i = this._State.MessagesBLOCK.HeaderChatSeach.length;
      }
    }
  };
  this._State.MessagesBLOCK.DialogAllMesseges.forEach( el => (
    this._State.MessagesBLOCK.HeaderChatSeach === "" ? el.display = 'flex' : CURRENTLY_CHAT(el)
  ));
  this.renderMain(this._State);
}