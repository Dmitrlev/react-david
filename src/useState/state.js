import D_L from './../FOTO/D_L.jpg';
import I_H from './../FOTO/I_H.jpg';
import M_K from './../FOTO/M_K.jpg';
import L_C from './../FOTO/L_C.jpg';
import D_C from './../FOTO/D_C.jpg';
import D_R from './../FOTO/D_R.jpg';
import D_D from './../FOTO/D_D.jpg';

//store=>dispatch
const ADD_POST = 'ADD-POST';
const UPDATE_VALUE_POST = 'UPDATE_VALUE_POST';
const ADD_NEW_MESSAGES_ITEM = 'ADD_NEW_MESSAGES_ITEM';
const UPDATE_VALUE_MESSAGES = 'UPDATE_VALUE_MESSAGES';
const HEADER_CHAT_SEACH = 'HEADER_CHAT_SEACH';
const SELECTION_FOR_DELET = 'SELECTION_FOR_DELET';
const DELET_CANCEL = 'DELET_CANCEL';
const DELET_DO = 'DELET_DO';

const store = {

  _State: {
    ProfoleBLOCK: {
      DatePEOPLE: [
        {DataNameITEM: 'День рождения', NameItemText: '17 марта 2003 г.'},
        {DataNameITEM: 'Город', NameItemText: 'Минск'},
        {DataNameITEM: 'Семейное положение', NameItemText: 'Встречается с Катей'},
        {DataNameITEM: 'Языки', NameItemText: 'Русский, English, Беларуский'},
        {DataNameITEM: 'Школа', NameItemText: 'Гимназия №2'},
        {DataNameITEM: 'Пол', NameItemText: 'Мужской'},
        {DataNameITEM: 'Тип человека (ПО ЖИЗНИ)', NameItemText: 'долбонафтик'},
      ],
      postITEM: [
        {text: 'Это мой первый пост!'},
      ],
      updatePOST: '',
    },
    MessagesBLOCK: {
      DialogAllMesseges: [
        {
          display: '',
          foto: D_L,
          id: 'D_L_FCHAT',
          name: "Даниил",
          surname: 'Лысенко',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },
        {
          display: '',
          foto: I_H,
          id: 'I_H_FCHAT',
          name: "Ирина",
          surname: 'Шелест',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },
        {
          display: '',
          SizeAvatar: "w",
          foto: L_C,
          id: 'L_C_FCHAT',
          name: "Диана",
          surname: 'Чопко',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },
        {
          display: '',
          SizeAvatar: "w",
          foto: D_C,
          id: 'D_C_FCHAT',
          name: "Дмитрий",
          surname: 'Чопко',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },
        {
          display: '',
          SizeAvatar: "w",
          foto: D_R,
          id: 'D_R_FCHAT',
          name: "Даник",
          surname: 'Рудьман',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },
        {
          display: '',
          SizeAvatar: "w",
          foto: D_D,
          id: 'D_D_FCHAT',
          name: "Дмитрий",
          surname: 'Филипчук',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },

        {
          display: '',
          SizeAvatar: "w",
          foto: M_K,
          id: 'M_K_FCHAT',
          name: "Максим",
          surname: 'Колядюк',
          NewMessagesChange: '',
          MeSSeges: [],
          numberOfSelected: ''
        },
      ],
      HeaderChatSeach: '',
    },
  },

  renderMain() {
  },
  getState() {
    return this._State
  },
  subscribe(observer) {
    this.renderMain = observer
  },

  HEADER_CHAT_seach(action) {
    this._State.MessagesBLOCK.HeaderChatSeach = action.valueHeader;
    let NAME_SURNAME;

    const CURRENTLY_CHAT_ANUMERATION = (el, type) => {
      NAME_SURNAME = type === 1 ? el.name + el.surname : el.surname + el.name;
      let _HeaderChatSeach = this._State.MessagesBLOCK.HeaderChatSeach.replace(/\s/g, '');
      for (let i = 0; i < _HeaderChatSeach.length; i++) {
        if (NAME_SURNAME[i] === undefined) el.display = 'none'
        else {
          el.display = _HeaderChatSeach[i].toUpperCase() === NAME_SURNAME[i].toUpperCase() ? 'flex' : 'none';
          if (_HeaderChatSeach[i].toUpperCase() !== NAME_SURNAME[i].toUpperCase()) {
            if (type === 1) CURRENTLY_CHAT_ANUMERATION(el, 2)
            i = _HeaderChatSeach.length;
          }
        }
      }
    };

    this._State.MessagesBLOCK.DialogAllMesseges.forEach(el => (
      this._State.MessagesBLOCK.HeaderChatSeach === "" ? el.display = 'flex' : CURRENTLY_CHAT_ANUMERATION(el, 1)
    ));
    this.renderMain(this._State);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPostITEM = {
        text: this._State.ProfoleBLOCK.updatePOST,
      };
      this._State.ProfoleBLOCK.postITEM.push(newPostITEM);
      this._State.ProfoleBLOCK.updatePOST = '';
      this.renderMain(this._State);
    } else
    if (action.type === UPDATE_VALUE_POST) {
      this._State.ProfoleBLOCK.updatePOST = action.NEW_TEXT;
      this.renderMain(this._State);
    } else
    if (action.type === UPDATE_VALUE_MESSAGES) {
      this._State.MessagesBLOCK.DialogAllMesseges.forEach(el => el.id === action.id ? el.NewMessagesChange = action.NEW_TEXT : null);
      this.renderMain(this._State);
    } else
    if (action.type === ADD_NEW_MESSAGES_ITEM) {
      const pushMessAg = el => (
        el.NewMessagesChange === '' ? null : el.MeSSeges.push(CREATE_MESSAGES({
          content: el.NewMessagesChange,
          messeges_length: el.MeSSeges.length
        })),
          el.NewMessagesChange = ''
      );
      this._State.MessagesBLOCK.DialogAllMesseges.forEach(el => el.id === action.id ? pushMessAg(el) : null);
      this.renderMain(this._State);
    } else
    if (action.type === HEADER_CHAT_SEACH) {
      this.HEADER_CHAT_seach(action)
    } else
    if (action.type === SELECTION_FOR_DELET) {
      this._State.MessagesBLOCK.DialogAllMesseges.forEach(el_item => {
        if (el_item.id === action.id_people) defineMes(el_item)
      })
      function defineMes(el_item) {
        let numberOfSelected = 0;
        el_item.MeSSeges.forEach( el_item_2 => {
          if (Number(action.el.current.dataset.name) === el_item_2.id_M) {
            el_item_2.delet_M = el_item_2.delet_M === false ?  true : false
          }
          if(el_item_2.delet_M === true) {numberOfSelected++}
        })
        el_item.numberOfSelected = numberOfSelected;
      }
      this.renderMain(this._State);
    } else
    if (action.type === DELET_CANCEL) {
      this._State.MessagesBLOCK.DialogAllMesseges.forEach( el => {
        if(action.id === el.id) {
          el.MeSSeges.forEach( el_mes => el_mes.delet_M = false )
        }
      })
      this.renderMain(this._State);
    } else
    if (action.type === DELET_DO) {
      this._State.MessagesBLOCK.DialogAllMesseges.forEach( el => {
        if(action.id === el.id) {
          el.MeSSeges = el.MeSSeges.filter(value => value.delet_M === false)
        }
      })
      this.renderMain(this._State);
    }
  }
}

export const SubmitPOSTCreator = () => ({type: ADD_POST})
export const newOnChangeCreator = newPost => ({type: UPDATE_VALUE_POST, NEW_TEXT: newPost.current.value})

const CREATE_MESSAGES = (el) => (
  {
    id_M: el.messeges_length,
    content_M: el.content,
    delet_M: false,
  }
)

export const updateMessagerITEMCreator = (value, id) => (
  {
    type: UPDATE_VALUE_MESSAGES,
    NEW_TEXT: value,
    id: id,
  }
)
export const checkValueInputMessagCreator = id => (
  {
    type: ADD_NEW_MESSAGES_ITEM,
    id: id,
  }
)

export default store;
window.store = store;





























