import styles from './api-helper.module.css';

/* eslint-disable-next-line */
export interface ApiHelperProps {}

export function ApiHelper(props: ApiHelperProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApiHelper!</h1>
    </div>
  );
}

export default ApiHelper;
