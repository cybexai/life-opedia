import React, { HTMLAttributes } from 'react';
import { LOArticleCard } from './LOArticleCard';

interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText?: string,
    footerText?: string,
    articles: any,
    categorie: string,
}

export const LOArticleSection: React.FC<Props> = ({ headerText, footerText, articles, categorie, ...props }) => {

    return (
        <div style={{ padding: 10 }}>
            <div className="article-section">
                <button className="section-title-button">
                    <h5>{categorie}</h5>
                </button>
                <hr />
            </div>
            <div className="row">
                {articles.map((article: any) => {
                    if (categorie === article._categorie.nom) {
                        return <div className="col">
                            <LOArticleCard article={article} headerText="Travel" />
                        </div>
                    }
                })}
            </div>
        </div>
    )
}