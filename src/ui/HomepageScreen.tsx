import React, { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { LOArticleCard, LOArticleMiniCard, LOArticleMostPopular, LOArticleSection, LOJumbotron, LOLargeButton, LONavBar, LOTextInput } from '../components';
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

            <div className="row" style={{ padding: 20 }}>
                <div className="col-lg-9">
                    <LOArticleSection />
                    <LOArticleSection />

                </div>
                <div className="col-lg-3">
                    <h5 className="text-center">Suggested Articles</h5>
                    <LOArticleMiniCard />
                    <LOArticleMiniCard />
                    <LOArticleMostPopular />
                </div>
            </div>


        </>
    )
}

const styles: { [key: string]: CSSProperties } = {
    miniJumbo: {
        height: 200
    }
}