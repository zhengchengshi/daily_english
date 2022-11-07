import React, { Fragment } from "react";
import styles from "./index.less";
import { history } from "umi";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.operationBar}>
        <img
          src="https://img.bytedance.cool/return.png"
          alt="err"
          className={styles.returnBtn}
          onClick={() => {
            history.back();
          }}
        />
        <div className={styles.commitBtn}>commit</div>
      </div>
      <div className={styles.markdown}></div>
    </div>
  );
}
