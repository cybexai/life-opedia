import React from 'react';

import { COLORS } from '../utilities';
import { LOCardBodyActions } from './LOCardBodyActions';

interface Props {
    showDownload: boolean,
    headerBackground?: string
}

export const LOArticleMostPopular: React.FC<Props> = ({ showDownload, headerBackground }) => {

    return (
        <div className="card">
            <div className="card-header text-center" style={{backgroundColor: headerBackground || COLORS.whitesmoke}}>
                Most Popular
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">A darkling plain
                <br />
                    <LOCardBodyActions showDownload={showDownload} showReadTime={false} />
                </li>
                <li className="list-group-item">The torment of others
                <br />
                    <LOCardBodyActions showDownload={showDownload} showReadTime={false} />
                </li>
                <li className="list-group-item">An evil cradling
                <br />
                    <LOCardBodyActions showDownload={showDownload} showReadTime={false} />
                </li>
                <li className="list-group-item">Blue remembered earth
                <br />
                    <LOCardBodyActions showDownload={showDownload} showReadTime={false} />
                </li>
            </ul>
        </div>
    )
}