import React from 'react';
import style from './index.module.scss';

const Greeting = () => {
    return (
        <div className={style.greeting}>
            <div className={style.container}>
                <p className={[style.heading, style.head1].join(' ')}>Welcome</p>
                <p className={[style.heading, style.head2].join(' ')}>to</p>
                <p className={[style.heading, style.head3].join(' ')}>Home</p>
                <p className={[style.heading, style.head4].join(' ')}>GRILL</p>
            </div>
        </div>
    );
}

export default Greeting;