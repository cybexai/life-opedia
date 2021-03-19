import React, { HTMLAttributes } from 'react';
import { LOCardBodyActions } from './LOCardBodyActions';

interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText: string,
    footerText?: string,
    article: any
}

export const LOArticleCard: React.FC<Props> = ({ headerText, footerText, article, ...props }) => {

    return (
        <div className="card">
            <div style={{ position: 'relative' }}>
                <div className="card-title-transparent" style={{ width: article.titre.length < 12 ? 'auto' : '95%' }}>
                    <h5>{article.titre || 'Header Text'}</h5>
                    {article.titre.length < 12 ? <hr /> : null}
                </div>

                {footerText !== undefined ? <div className="card-footer-transparent" style={{ width: '95%' }}>
                    <h5>{footerText || 'Footer Text'}</h5>
                </div> : null}
                <img className="card-img-top" src={article.image || "https://gsatc.org/wp-content/uploads/2021/01/0132_637324252136928732.jpg"} alt="Card image cap" style={{ height: 200 }} />
            </div>
            <div className="card-body">
                <p className="card-text">{article.contenu}</p>
                <LOCardBodyActions showDownload={false} showReadTime={true} />
            </div>
        </div>
    )
}