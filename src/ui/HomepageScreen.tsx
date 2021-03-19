import React, { CSSProperties, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { LOArticleMiniCard, LOArticleMostPopular, LOArticleSection, LOFooter, LOJumbotron, LOLargeButton, LOLogo, LONavBar, LOTextInput } from '../components';
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

            <div className="row no-gutters w-100">
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} headerText='Header Text' footerText='Footer Text' />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} headerText='Header Text' footerText='Footer Text' />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} headerText='Header Text' footerText='Footer Text' />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} headerText='Header Text' footerText='Footer Text' />
                </div>
                <div className="col">
                    <LOJumbotron style={styles.miniJumbo} headerText='Header Text' footerText='Footer Text' />
                </div>
            </div>

            <div className="row w-100" style={{ padding: 20 }}>
                <div className="col-lg-9">
                    <LOArticleSection />
                    <LOArticleSection />

                </div>
                <div className="col-lg-3">
                    <h5 className="text-center ">Suggested Articles</h5>
                    <LOArticleMiniCard />
                    <LOArticleMiniCard />
                    <LOArticleMostPopular showDownload />
                </div>
            </div>

            <div>

                <h3 className="text-center">Editor's Picks</h3>

                <div className="row w-100" style={{ padding: 20 }}>
                    <div className="col">
                        <LOArticleMiniCard headerText="Travel" style={styles.miniCard} />
                    </div>
                    <div className="col">
                        <LOArticleMiniCard headerText="Style" style={styles.miniCard} />
                    </div>
                    <div className="col">
                        <LOArticleMiniCard headerText="Travel" style={styles.miniCard} />
                    </div>
                    <div className="col">
                        <LOArticleMiniCard headerText="Aws" style={styles.miniCard} />
                    </div>
                </div>

            </div>

            <LOFooter />

        </>
    )
}

const styles: { [key: string]: CSSProperties } = {
    miniJumbo: {
        height: 200
    },
    miniCard: {
        backgroundColor: COLORS.floralwhite,
        borderStyle: 'none'
    }
}