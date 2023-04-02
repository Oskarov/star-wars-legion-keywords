import React              from 'react';
import {ITransformedData} from "../../interface";
import styles             from './card.module.scss';

interface CardProps {
    data: ITransformedData
}

const Card: React.FC<CardProps> = ({data}) => {
    return <div className={styles.card}>
        <div className={styles.title}><span>{data.name}</span> - <span>{data.translated}</span></div>
        <div className={styles.description}>{data.description}</div>
    </div>;
}

export default Card;
