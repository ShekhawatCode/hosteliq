import styles from './api-controller-static-content-controller.module.css';

/* eslint-disable-next-line */
export interface ApiControllerStaticContentControllerProps {}

export function ApiControllerStaticContentController(
  props: ApiControllerStaticContentControllerProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApiControllerStaticContentController!</h1>
    </div>
  );
}

export default ApiControllerStaticContentController;
