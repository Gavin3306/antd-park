//
import styles from '../style/layout.module.css'
import SvgIcon from "@component/icon/index.jsx";

function App() {
    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <div className={styles.logo}>
                    <SvgIcon name='antd'/>
                    <div className={styles.title}>Antd From</div>
                </div>
            </div>
        </div>
    );
}

export default App;
