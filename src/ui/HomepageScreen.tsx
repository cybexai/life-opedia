import React, { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { LOArticleCard, LOJumbotron, LOLargeButton, LONavBar, LOTextInput } from '../components';
import { signin } from '../redux/actions';
import { COLORS } from '../utilities';

type Props = {

}

export const HomepageScreen: React.FC<Props> = () => {

    const [nom, setNom] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <LONavBar />

            <LOJumbotron
                headerText="Food"
                footerText="A darkling plain"
                footerTextColor={COLORS.primary} />

            <div className="row no-gutters">
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} />
                </div>
            </div>

            <div className="container">
                {/* <LOJumbotron style={styles.miniJumbo} /> */}
            <LOArticleCard />
            </div>


        </>
    )
}

const styles: { [key: string]: CSSProperties } = {
    miniJumbo: {
        height: 200
    }
}