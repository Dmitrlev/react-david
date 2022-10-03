if (action.type === ADD_POST) {
  let newPostITEM = {
    text: this._State.ProfoleBLOCK.updatePOST,
  };
  this._State.ProfoleBLOCK.postITEM.push(newPostITEM);
  this._State.ProfoleBLOCK.updatePOST = '';
  this.renderMain(this._State);
}