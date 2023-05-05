import styles from "./QuestionPage.module.css";

const QuestionPage = () => {
  return (
    <div className={styles.container}>
      <img
        src="path/to/product/logo"
        alt="Product Logo"
        className={styles.logo}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Left Side Text</h1>
        </div>
        <div className={styles.image}>
          <img src="path/to/image" alt="Image" />
        </div>
      </div>
    </div>
  );
};
export default QuestionPage;
