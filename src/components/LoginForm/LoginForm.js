import React, {useState} from 'react';
import './LoginForm.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const navigate = useNavigate();

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPwHandler = (e) => {
        setPw(e.currentTarget.value);
    }

    const onClickLogin = () => {
        // 로그인 시 서버로 id, pw 제출

        const body = {
            id : id,
            password : pw,
        }

        axios.post("/user/login", body)
        .then(res => res.data)
        .then(res => {
            if (res.isExist) {
                navigate("/");
            }
        })
    }
    

    return (
        <section className='login-form-box'>
            <div style={{margin: "10px"}}>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</div>
            <div id='input-box'>
                <input type="text" value={id} placeholder="  id" onChange={onIdHandler} />
                <input type="password" value={pw} placeholder="  pw" onChange={onPwHandler} />
                <button id='login-btn' onClick={onClickLogin}><span>로그인</span></button>
            </div>
        </section>
    );
};

export default LoginForm;