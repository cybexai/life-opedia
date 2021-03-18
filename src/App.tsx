import React from 'react';
import './App.css';
import { LOLoginButtonSocial, LONavBar, LOTextInput } from './components';
import { COLORS } from './utilities';

function App() {
  return (
    <>
      <LONavBar />

      <div className="signin-container">

        <div className="row">
          <div className="col login-left">
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ color: COLORS.primary, marginBottom: 20 }}>LOGIN</h3>
              <h3 style={{ color: COLORS.white, marginBottom: 20, marginLeft: 10 }}>REGISTER</h3>
            </div>
            <LOTextInput placeholder="USERNAME" type="text" />
            <div>
            <input type="checkbox" id="remember_me" />
            <label>Keep me Signed in</label>
            </div>
            <LOLoginButtonSocial title="LOG IN" backgroundColor={COLORS.primary} borderRadius={20} />
            <hr />
            <a href="#" className="member_ship">Want to be a member</a>
          </div>

          <div className="col login-right">
            <h3 style={{ color: COLORS.white, marginBottom: 20, fontWeight: 'lighter' }}>LOGIN WITH</h3>
            <LOLoginButtonSocial title="FACEBOOK" backgroundColor={COLORS.facebook} />
            <LOLoginButtonSocial title="LINKEDIN" backgroundColor={COLORS.linkedin} />
            <LOLoginButtonSocial title="TWITTER" backgroundColor={COLORS.twitter} />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
