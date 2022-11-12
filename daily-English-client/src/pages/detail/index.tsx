import React, { Fragment, useEffect, useState } from "react";
import styles from "./index.less";
import { history, useLocation } from "umi";
// @ts-ignore
import { marked } from "marked";
import { getFile, FileType } from "@/services";
const detail = () => {
  const { search } = useLocation();
  const [md, setMd] = useState<string>("");
  const title = search.substring(1, search.indexOf(".md")) || "-";
  useEffect(() => {}, [
    getFile(search.substring(1)).then((res: FileType) => {
      setMd(Buffer.from(res.content, "base64").toString());
    }),
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.detailHeader}>
        <img
          src="https://file.bytedance.cool/img/fd02c1c00505c7954c135b5167f9a295.png"
          alt="err"
          className={styles.detailHeaderBtn}
          onClick={() => {
            history.back();
          }}
        />
        <div className={styles.detailHeaderTitle}>{title}</div>
      </div>
      <div
        className={styles.markdownContainer}
        dangerouslySetInnerHTML={{ __html: md && (marked(md) || "no content") }}
      ></div>
    </div>
  );
};
export default detail;
