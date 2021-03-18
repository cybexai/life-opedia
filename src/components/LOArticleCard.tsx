import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    headerText?: string,
    footerText?: string,
    image?: string,
    contenu?: string,
    titre? : string
}

export const LOArticleCard: React.FC<Props> = ({ headerText, footerText, ...props }) => {
   
    return (
        <div className="card">
            <div style={{ position: 'relative' }}>
                <div className="card-title-transparent">
                    <h5>{headerText || 'Header Text'}</h5>
                    <hr />
                </div>

                <div className="card-footer-transparent" style={{width:'95%'}}>
                    <h5>{footerText || 'Footer Text'}</h5>
                </div>
                <img className="card-img-top" src={"https://gsatc.org/wp-content/uploads/2021/01/0132_637324252136928732.jpg"} alt="Card image cap" style={{ height: 200 }} />
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="card-body-actions">
                    <a className="mr-3"><i className="fa fa-eye"></i> 17</a>
                    <a className="mr-3"><i className="fa fa-comment-alt"></i> 1</a>
                    <a href="#">28 mins read</a>
                </div>
            </div>
        </div>
    )
}