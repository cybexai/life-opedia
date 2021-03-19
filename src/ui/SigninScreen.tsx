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

                <div className="py-5 mx-5 px-3">

                    <div className="navs d-flex">
                        <a className="nav-link active text-uppercase" href="#">Login</a>
                        <a className="nav-link text-uppercase ml-3 text-white" href="#">Register</a>
                    </div>

                    <form onSubmit={handleSubmit} className="row w-100">
                        <div className="col-lg-5">
                            <div className="my-5">

                                <LOTextInput placeholder="USERNAME" type="text" id='nom' onChange={handleInputChange} value={nom} required />

                                <label className="remember_me_label">
                                    <input type="checkbox" className="remember_me_checkbox" checked />Keep me Signed in
                                <span className="checkmark"></span> </label>

                                <LOLargeButton type="submit" title="LOG IN" backgroundColor={COLORS.primary} borderRadius={20} />

                                <hr className="bg-white my-5 d-none d-lg-block" style={{ opacity: 0.2 }} />
                                
                                    <a href="#" className="text-center">Want to be a member</a>
                                
                            </div>

                        </div>

                        <div className="col-lg-2 text-center d-flex align-items-center justify-content-center position-relative">
                            <div className="or-athenticate">
                                <p className="text-white">OR</p>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <h4 className="text-white text-center font-weight-light mt-4 mt-lg-0">LOGIN WITH</h4>
                            <div className="mt-4 mt-lg-5">
                                <LOLargeButton showIcon title="FACEBOOK" icon="fab fa-facebook-square" backgroundColor={COLORS.facebook} />
                                <LOLargeButton showIcon title="LINKEDIN" icon="fab fa-linkedin" backgroundColor={COLORS.linkedin} />
                                <LOLargeButton showIcon title="TWITTER" icon="fab fa-twitter-square" backgroundColor={COLORS.twitter} />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}