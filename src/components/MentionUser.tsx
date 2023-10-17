import '../App.css'; 
import React, { useState } from 'react';

// import mentionsData from '../assets/data.json';

interface userProp{
  mentions: string[];
  onChange: (user: string)=>void;
}

const MentionUser: React.FC<userProp>= (props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [mentions, setMentions] = useState<string[]>([]);
  const [showMentionOptions, setShowMentionOptions] = useState<boolean>(false);

  const mentionOptions: string[] = props.mentions.mentions.sort();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const text = event.target.value;

  setInputValue(text);
  const mentionIndex = text.lastIndexOf('@');

  if (mentionIndex >= 0 && mentionIndex < text.length - 1) {
    setShowMentionOptions(false);
  } else if (text.includes('@')) {
    setShowMentionOptions(true);
  } else {
    setShowMentionOptions(false);
  }
};


  const handleSelectMention = (index: number) => {
    const selectedMention = mentionOptions[index];
    const mentionIndex = inputValue.lastIndexOf('@');
    props.onChange(`@${mentionOptions[index]}`)

    let updatedValue=''

    if(mentionIndex!==-1){
      const prevVal = inputValue.slice(0, mentionIndex);
      const nextVal = inputValue.slice(mentionIndex + 1);

      updatedValue = prevVal + `@${selectedMention} ` + nextVal
    }
    else{
      updatedValue=inputValue+`@${selectedMention} `;
    }


    //  updatedValue =
    //   inputValue.slice(0, mentionIndex) + `@${selectedMention} ` + inputValue.slice(mentionIndex + 1);
    setInputValue(updatedValue);
    setShowMentionOptions(false);
    setMentions([...mentions, selectedMention]);
  };

  return (
    <div className="mention-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Mention"
      />
      {showMentionOptions && (
        <div className="mention-options">
          {mentionOptions.map((mention, index) => (
            <button key={index} onClick={() => handleSelectMention(index)}>
              {mention}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentionUser;
