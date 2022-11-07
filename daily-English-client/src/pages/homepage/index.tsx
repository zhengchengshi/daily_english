import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { history } from "umi";
import styles from "./index.less";
import { getList, ListType } from "@/services";
export default function index() {
  const [list, setList] = useState<ListType[]>();
  const [filterItem, setFilterItem] = useState<ListType[]>();
  const iptChange = _.debounce((e: InputEvent) => {
    setFilterItem(
      list?.filter(
        (item) => item.name.indexOf((e.target as HTMLInputElement).value) !== -1
      )
    );
  }, 1000);
  const fetchList = () => {
    getList().then((res) => {
      setList(res);
      setFilterItem(res);
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
      <input
        className={styles.searchBar}
        placeholder="搜索"
        onChange={iptChange}
      />
      <div className={styles.itemContainer}>
        {!!filterItem?.length
          ? filterItem?.map((item, index) => (
              <div
                key={item.sha}
                className={styles.item}
                onClick={() => {
                  window.open(item.html_url);
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
