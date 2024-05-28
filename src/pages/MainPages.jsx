import React from 'react';
import Description from "../../components/Description";
import styles from 'src/pages/Main/MainPage.module.css'

const MainPages = () => {
    const props = { title: 'Title', description: 'description' }

    return (
        <div className={styles.container}>
            <h1>MainPages</h1>
            <Description {...props}/>
        </div>
    );
};

export default MainPages;