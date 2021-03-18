import React, { HTMLAttributes } from 'react';
import { LOArticleCard } from './LOArticleCard';

interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText?: string,
    footerText?: string,
    image?: string,
    contenu?: string,
    titre? : string
}

export const LOArticleSection: React.FC<Props> = ({ headerText, footerText, ...props }) => {
   
    return (
        <div style={{padding: 10}}>
            <div className="article-section">
            <button className="section-title-button">
                <h5>Design</h5>
            </button>
            <hr />
            </div>
            <div className="row">
                <div className="col">
                    <LOArticleCard headerText="Travel" />
                </div>
                <div className="col">
                    <LOArticleCard headerText="Unweaving the rainbow" footerText="Footer Text" />
                </div>
            </div>
        </div>
    )
}