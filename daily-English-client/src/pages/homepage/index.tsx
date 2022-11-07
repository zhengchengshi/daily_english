import React, { useEffect, useState } from "react";
import { history } from "umi";
import styles from "./index.less";
import { getList } from "@/services";
export default function index() {
  const [list, setList] = useState([]);
  const fetchList = () => {
    getList().then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>Daily-English</div>
      <input className={styles.searchBar} placeholder="搜索" />
      <div className={styles.itemContainer}>
        <div
          className={styles.item}
          onClick={() => {
            history.push("/detail");
          }}
        >
          Day1
        </div>
      </div>
    </div>
  );
}
