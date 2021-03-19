import React, { CSSProperties, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOArticleMiniCard, LOArticleMostPopular, LOArticleSection, LOFooter, LOJumbotron, LONavBar } from '../components';
import { getArticles } from '../redux/actions';
import { COLORS } from '../utilities';
import { RootState } from '../redux';
interface Props {

}

export const HomepageScreen: React.FC<Props> = () => {

    const dispatch = useDispatch();
    const articles = useSelector((state: RootState) => state.appState.articles);

    let categories: any = [];

    if (articles.length !== 0) {

        let tempCategories: any = [];

        articles.forEach((article: any) => {
            tempCategories.push(article._categorie.nom)
        });

        categories = Array.from(new Set(tempCategories))
    }

    useEffect(() => {
        dispatch(getArticles());
    }, []);

    return (
        <>
            <LONavBar />
            {console.log(categories)}
            <LOJumbotron
                headerText="Food"
                footerText="A darkling plain"
                footerTextColor={COLORS.primary} />

            <div className="row no-gutters w-100">
                {[1, 2, 3, 4, 5].map((data: any) => <div className="col">
                    <LOJumbotron style={styles.miniJumbo} headerText='Header Text' footerText='Footer Text' />
                </div>)}
            </div>

            <div className="row w-100" style={{ padding: 20 }}>
                <div className="col-lg-9">
                    {categories.map((categorie: any) => <LOArticleSection articles={articles} categorie={categorie} />)}

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
                    {[1, 2, 3, 4].map((data: any) => <div className="col">
                        <LOArticleMiniCard headerText="Travel" style={styles.miniCard} />
                    </div>)}
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