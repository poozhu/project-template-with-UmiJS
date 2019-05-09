import styles from './index.css';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Welcome to Template with UmiJS!</h1>
      <ul className={styles.list}>
         <Link to="/">go to 首页</Link>
        <li> <Link to="/page1">go to page1</Link></li>
        <li> <Link to="/page2">go to page2</Link></li>
        <li> <Link to="/page3">go to page3</Link></li>
      </ul>
      {props.children}
    </div>
  );
}

export default BasicLayout;
