import React from 'react';
import styles from '../styles/MealPlan.module.css';

export default function MealPlanner() {
    return (
        <div className={styles.skillsContainer}>
            <h1 className={styles.skillsTitle}>Meals</h1>
            <div className={styles.skillsCards}>
                <div className={styles.card}>
                    <i className={`${styles.cardIcon} 1`}></i>
                    <h3 className={styles.cardTitle}>Creamy fish & leek pie</h3>
                    <p className={styles.cardDescription}>Give the humble fish pie a flavour-boosting
                    makeover with Tommy Banks version, made with king prawns, salmon and haddock and topped with a comforting, cheesy mash</p>
                    <button className={styles.cardButton}>Get Started</button>
                </div>
                <div className={styles.card}>
                    <i className={`${styles.cardIcon} 2`}></i>
                    <h3 className={styles.cardTitle}>Fish and Chips</h3>
                    <p className={styles.cardDescription}>An Italian-American classic, this freezable sausage pasta bake is an ideal make-ahead dish for busy days</p>
                    <button className={styles.cardButton}>Get Started</button>
                </div>
                <div className={styles.card}>
                    <i className={`${styles.cardIcon} 3`}></i>
                    <h3 className={styles.cardTitle}>Cajun Chicken burgers</h3>
                    <p className={styles.cardDescription}>Grilled Cajun-spiced chicken breasts are loaded with bacon, avocado, cheese and spinach, 
                    then served in a ciabatta bun... set to become a Friday night favourite</p>
                    <button className={styles.cardButton}>Get Started</button>
                </div>
                <div className={styles.card}>
                    <i className={`${styles.cardIcon} 4`}></i>
                    <h3 className={styles.cardTitle}>White chocolate berry cheesecake</h3>
                    <p className={styles.cardDescription}>A stunning no-cook pudding bursting with summer flavours - great for relaxed entertaining</p>
                    <button className={styles.cardButton}>Get Started</button>
                </div>
            </div>
        </div>
    );
}
