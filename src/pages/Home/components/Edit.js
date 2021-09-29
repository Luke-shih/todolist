import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [       
        {
          id: v4(),
          note
        },
        ...prevData,
      ];
    });
  }

  return (
      <div>
        <input type="text" value={note} onChange={noteChange} />
        <button onClick={addItem} className="add">新增紀錄</button>
        <div className="separation"></div>
      </div>
  );
};

export default Edit;
