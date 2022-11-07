import React, { useEffect, useState } from "react";
import { history } from "umi";
import styles from "./index.less";
import { getList, ListType } from "@/services";
export default function index() {
  const [list, setList] = useState<ListType[]>();
  const fetchList = () => {
    getList().then((res) => {
      console.log(res);
      // setList(res);
    });
  };
  const emptyRender = () => {
    return (
      <div className={styles.empty}>
        <img
          src="https://img.bytedance.cool/empty.png"
          alt="err"
          className={styles.emptyIcon}
        />
        暂无内容
      </div>
    );
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>Daily-English</div>
      <input className={styles.searchBar} placeholder="搜索" />
      <div className={styles.itemContainer}>
        {!!list?.length
          ? list?.map((item, index) => (
              <div
                key={item.sha}
                className={styles.item}
                onClick={() => {
                  history.push("/detail");
                }}
              >
                {item.name || "-"}
              </div>
            ))
          : emptyRender()}
      </div>
    </div>
  );
}
