import React, { HTMLAttributes } from 'react';
import { LOCardBodyActions } from './LOCardBodyActions';

interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText: string,
    footerText?: string,
    image?: string,
    contenu?: string,
    titre?: string
}

export const LOArticleCard: React.FC<Props> = ({ headerText, footerText, ...props }) => {

    return (
        <div className="card">
            <div style={{ position: 'relative' }}>
                <div className="card-title-transparent" style={{ width: headerText.length < 12 ? 'auto' : '95%' }}>
                    <h5>{headerText || 'Header Text'}</h5>
                    {headerText.length < 12 ? <hr /> : null}
                </div>

                {footerText !== undefined ? <div className="card-footer-transparent" style={{ width: '95%' }}>
                    <h5>{footerText || 'Footer Text'}</h5>
                </div> : null}
                <img className="card-img-top" src={"https://gsatc.org/wp-content/uploads/2021/01/0132_637324252136928732.jpg"} alt="Card image cap" style={{ height: 200 }} />
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <LOCardBodyActions showDownload={false} showReadTime={true} />
            </div>
        </div>
    )
}