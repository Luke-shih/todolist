import "./index.css"

function HomePage() {
    return (
        <div className="home">
            <h3>React練習專案</h3>
            <p>歡迎光臨我的頁面</p>
            <button className="start" type="button" onClick={() =>{window.location.href = '/listpage'}}>點此開始</button>
        </div>
    )
}

export default HomePage;
