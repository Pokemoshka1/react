import React from 'react';
import s from './Message.module.css'
import Name from './Name/Name'
import Your_Messages from './Your_Messages/Messages'
import Friends_Messages from './Friends_Messages/Messages'

const Message = (props) => {

  let NameElements = props.state.name.map( n => <Name id={n.id} name={n.name} />);

  let Friends_MessageElements = props.state.friends_message.map( m => <Friends_Messages id={m.id} name={m.name}  text={m.text}/>);

  let Your_MessageElements = props.state.your_message.map( m => <Your_Messages id={m.id} user={m.user} text={m.text}/>);
  return (
    <div className={s.content}>
      <div className={s.name}>
        {NameElements}
      </div>
      <div className={s.message}>
        <div className={s.messages}>
          {Friends_MessageElements}
        </div>
        <div>
          {Your_MessageElements}
        </div>
        <div className={s.addmessage}>
          <textarea  placeholder='Напиши другу'/>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
}
export default Message;