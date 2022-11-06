// import Markdown from "marked-react";
import marked from "marked";
import { useEffect, useState } from "react";
function App() {
  const [arr, setArr] = useState();
  const [markdownContent, setMarkdownContent] = useState("111");
  const fetchData = async () => {
    const res1 = await fetch(
      "https://api.github.com/repos/zhengchengshi/daily_english/contents/daily-punch?ref=main"
    )
      .then((res) => res.json())
      .then((res) => {
        setArr(res);
      });
    const res2 = await fetch(
      "https://raw.githubusercontent.com/zhengchengshi/daily_english/main/daily-punch/day1.md"
    ).then((res) => res);
  };

  // useEffect(() => {
  //   // fetchData();
  // }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div
        className="show-html"
        dangerouslySetInnerHTML={{ __html: markdownContent }}
      ></div>
    </>
  );
}

export default App;
