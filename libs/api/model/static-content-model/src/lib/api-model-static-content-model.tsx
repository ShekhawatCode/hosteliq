import styles from './api-model-static-content-model.module.css';

/* eslint-disable-next-line */
export interface ApiModelStaticContentModelProps {}

export function ApiModelStaticContentModel(
  props: ApiModelStaticContentModelProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApiModelStaticContentModel!</h1>
    </div>
  );
}

export default ApiModelStaticContentModel;
