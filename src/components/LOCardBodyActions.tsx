import React, { HTMLAttributes } from 'react';
import * as CSS from 'csstype';
interface Props extends HTMLAttributes<HTMLDivElement> {
    showReadTime: boolean,
    showDownload: boolean,
}

export const LOCardBodyActions: React.FC<Props> = ({ showDownload, showReadTime, ...props }) => {

    const style: CSS.Properties = {
        color: 'white'
    };

    return (
        <div className="card-body-actions">
            { showDownload && <a className="mr-3"><i className="fa fa-arrow-circle-up"></i> 4</a>}
            <a className="mr-3"><i className="fa fa-eye"></i> 17</a>
            <a className="mr-3"><i className="fa fa-comment-alt"></i> 1</a>
            { showReadTime && <a href="#">28 mins read</a>}
        </div>
    )
}