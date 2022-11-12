import React, { Fragment } from "react";
import styles from "./index.less";
import { history } from "umi";
import { marked } from "marked";
export default function index() {
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
        <div className={styles.detailHeaderTitle}>day5</div>
      </div>
      <div className={styles.markdownContainer}></div>
    </div>
  );
}
