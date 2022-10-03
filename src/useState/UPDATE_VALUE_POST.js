if (action.type === UPDATE_VALUE_POST) {
  this._State.ProfoleBLOCK.updatePOST = action.NEW_TEXT;
  this.renderMain(this._State);
}