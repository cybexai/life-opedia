import React, { useEffect } from 'react';
import { CATextInput } from '../components';
import { COLORS } from '../utilities';

type Props = {
    
}
 
export const Signin: React.FC<Props> =()=> {
    return(
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <div className="card" >
                <div className="card-body" style={{ textAlign: 'center' }}>
                    <CATextInput type="text" placeholder="Test" />
                    {/* <Logo />
                    <h5 className="card-title" style={{ margin: 15 }}>Connexion</h5>
                    <h6 className="card-subtitle " style={{ margin: 15 }}>Utiliser votre compte Cybex.Ai</h6>
                    <TextInput placeholder="Addresse e-mail" style={{ marginTop: 25 }} />
                    <TextInput placeholder="Mot de passe" type='password' style={{ marginTop: 20, marginBottom: 10 }} />

                    <a style={{ fontSize: 13 }}>Mot de passe oublié ?</a>

                    <div className="row" style={{ borderRadius: '5px', marginTop: 20, }}>
                        <div className="col-sm-6">
                            <NavLink style={{ textDecoration: 'none', color: COLORS.primary }} to='/signup'><b>Créer un compte</b></NavLink>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-sm"
                                style={{ backgroundColor: COLORS.primary, color: 'rgb(255, 255, 255)' }}>Connexion</button>
                        </div>
                    </div> 

                <AuthFooter /> */}
                </div>
            </div>
        </div>

    )
}