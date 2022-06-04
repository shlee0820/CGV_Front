import React, {useState} from 'react';
import './LoginForm.css';

const LoginForm = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPwHandler = (e) => {
        setPw(e.currentTarget.value);
    }
    

    return (
        <section className='login-form-box'>
            <div style={{margin: "10px"}}>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</div>
            <input id='login-input' type="text" value={id} onClick={onIdHandler} />
            <input id='login-input' type="password" value={pw} onClick={onPwHandler} />
            <button id='login-btn'><div>로그인</div></button>
        </section>
    );
};

export default LoginForm;