import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
      <button className="backToHomepage" type="button" onClick={() =>{window.location.href = '/'}}>返回首頁</button>
    </div>
  );
};

export default List;