import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    image?: string,
    contenu?: string,
    titre?: string,
    headerText?: string
}

export const LOArticleMiniCard: React.FC<Props> = ({ headerText, ...props }) => {

    return (
        <div className="card" {...props}>
            <div>
                {headerText && <div className="card-title-transparent">
                    <h5>{headerText || 'Header Text'}</h5>
                    <hr />
                </div>}
                <img className="card-img-top" src={"https://gsatc.org/wp-content/uploads/2021/01/0132_637324252136928732.jpg"} alt="Card image cap" style={{ height: 200 }} />
            </div>
            <div className="card-body text-center">
                <h6 className="article-mini-title">Design</h6>
                {!headerText && <p className="card-text">Design</p>}
            </div>
        </div>
    )
}