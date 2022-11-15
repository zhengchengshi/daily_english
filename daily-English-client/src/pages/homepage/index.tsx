import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import _ from "lodash";
import { history } from "umi";
import styles from "./index.less";
import { getList, ContentType } from "@/services";
export default function index() {
  const [list, setList] = useState<ContentType[]>();
  const [filterItem, setFilterItem] = useState<ContentType[]>();
  const sortMd = (strArr: ContentType[]): ContentType[] => {
    strArr.sort((a, b) => {
      return a.name.replace(/[^0-9]/gi, "") - b.name.replace(/[^0-9]/gi, "");
    });
    return strArr;
  };
  const iptChange = _.debounce((e: InputEvent) => {
    setFilterItem(
      sortMd(
        list?.filter(
          (item) =>
            item.name.indexOf((e.target as HTMLInputElement).value) !== -1
        ) || []
      )
    );
  }, 1000);
  const fetchList = () => {
    getList().then((res: ContentType[]) => {
      setList(sortMd(res));
      setFilterItem(sortMd(res));
    });
  };
  const emptyRender = () => {
    return (
      <div className={styles.empty}>
        <img
          src="https://file.bytedance.cool/img/2fffb588e7310cb65c09fd2e21a0e834.png"
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
                  history.push({ pathname: "/detail", search: item.name });
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
