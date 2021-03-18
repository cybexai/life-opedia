import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { LOLargeButton, LONavBar, LOTextInput } from '../components';
import { signin } from '../redux/actions';
import { COLORS } from '../utilities';

type Props = {

}

export const SigninScreen: React.FC<Props> = () => {

    const [nom, setNom] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case 'nom':
                setNom(e.target.value)
                break;
            default:
                break;
        }

    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        let user = { nom }
        dispatch(signin(user, history))
    }

    return (
        <>
            <LONavBar />

            <div className="signin-container">

                <form onSubmit={handleSubmit} className="row">
                    <div className="col login-left">
                        <div className="d-flex">
                            <h3 className="signin-left-title-login">LOGIN</h3>
                            <h3 className="text-white ml-3">REGISTER</h3>
                        </div>
                        <LOTextInput placeholder="USERNAME" type="text" id='nom' onChange={handleInputChange} value={nom} required />

                        <label className="remember_me_label">
                            <input type="checkbox" className="remember_me_checkbox" checked />Keep me Signed in
                                <span className="checkmark"></span> </label>

                        <LOLargeButton type="submit" title="LOG IN" backgroundColor={COLORS.primary} borderRadius={20} />
                        <hr />
                        <a href="#" className="membership">Want to be a member</a>
                    </div>

                    <div className="col login-right">
                        <h3 className="signin-right-title">LOGIN WITH</h3>
                        <LOLargeButton showIcon title="FACEBOOK" icon="fab fa-facebook-square" backgroundColor={COLORS.facebook} />
                        <LOLargeButton showIcon title="LINKEDIN" icon="fab fa-linkedin" backgroundColor={COLORS.linkedin} />
                        <LOLargeButton showIcon title="TWITTER" icon="fab fa-twitter-square" backgroundColor={COLORS.twitter} />
                    </div>
                </form>

            </div>
        </>
    )
}