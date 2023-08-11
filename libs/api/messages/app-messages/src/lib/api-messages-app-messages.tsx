import styles from './api-messages-app-messages.module.css';

/* eslint-disable-next-line */
export interface ApiMessagesAppMessagesProps {}

export function ApiMessagesAppMessages(props: ApiMessagesAppMessagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ApiMessagesAppMessages!</h1>
    </div>
  );
}

export default ApiMessagesAppMessages;
