import React, {useState} from 'react';
import './RegisterForm.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPwHandler = (e) => {
        setPw(e.currentTarget.value);
    }

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const onBirthHandler = (e) => {
        setBirth(e.currentTarget.value);
    }

    const onPhoneHandler = (e) => {
        setPhone(e.currentTarget.value);
    }    

    const onClickRegister = () => {

        const body = {
            name : name,
            birth : birth,
            phone : phone,
            id : id,
            password : pw
        }

        axios.post("/user/join", body)
        .then(res => res.data)
        .then(res => {
            if (res.success) {
                navigate("/login");
            }
        })
    }
    

    return (
        <section className='register-form-box'>
            <div style={{margin: "10px"}}>회원정보를 입력하신 후, 회원가입 버튼을 클릭해 주세요.</div>
            <input className='register-input' type="text" value={name} placeholder='  name' onChange={onNameHandler} />
            <input className='register-input' type="text" value={id} placeholder='  id' onChange={onIdHandler} />
            <input className='register-input' type="password" value={pw} placeholder='  pw' onChange={onPwHandler} />
            <input className='register-input' type="text" value={birth} placeholder='  birth (ex) 000204)' onChange={onBirthHandler} />
            <input className='register-input' type="text" value={phone} placeholder='  phone (ex) 01012341234)' onChange={onPhoneHandler} />
            <button id='register-btn' onClick={onClickRegister}><div>회원가입</div></button>
        </section>
    );
};

export default RegisterForm;