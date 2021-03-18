import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { LOJumbotron, LOLargeButton, LONavBar, LOTextInput } from '../components';
import { signin } from '../redux/actions';
import { COLORS } from '../utilities';

type Props = {

}

export const HomepageScreen: React.FC<Props> = () => {

    const [nom, setNom] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    
    return (
        <>
            <LONavBar />

            <LOJumbotron />

            <div className="row no-gutters">
                <div className="col">
                <LOJumbotron />
                </div>
                <div className="col">
                <LOJumbotron />
                </div>
                <div className="col">
                <LOJumbotron />
                </div>
                <div className="col">
                <LOJumbotron />
                </div>
                <div className="col">
                <LOJumbotron />
                </div>
            </div>

            <div className="card" style={{ width: '30rem' }}>
                <img className="card-img-top" src={"https://gsatc.org/wp-content/uploads/2021/01/0132_637324252136928732.jpg"} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    )
}