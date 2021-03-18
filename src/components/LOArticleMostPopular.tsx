import React, { HTMLAttributes } from 'react';

import { LOCardBodyActions } from './LOCardBodyActions';

interface Props extends HTMLAttributes<HTMLDivElement> {
    image?: string,
    contenu?: string,
    titre?: string
}

export const LOArticleMostPopular: React.FC<Props> = ({ ...props }) => {

    return (
        <div className="card">
            <div className="card-header text-center">
                Most Popular
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">A darkling plain
                <br />
                    <LOCardBodyActions showDownload={true} showReadTime={false} />
                </li>
                <li className="list-group-item">The torment of others
                <br />
                    <LOCardBodyActions showDownload={true} showReadTime={false} />
                </li>
                <li className="list-group-item">An evil cradling
                <br />
                    <LOCardBodyActions showDownload={true} showReadTime={false} />
                </li>
                <li className="list-group-item">Blue remembered earth
                <br />
                    <LOCardBodyActions showDownload={true} showReadTime={false} />
                </li>
            </ul>
        </div>
    )
}