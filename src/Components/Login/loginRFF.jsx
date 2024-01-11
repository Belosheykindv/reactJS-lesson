import React from "react";
// import { Field, reduxForm } from "redux-form";
import { Form, Field } from 'react-final-form'
import { FormCreate } from "../Common/FormControls/formControls";
import { maxLengthCreator, required, maxLength22 } from "../../Utils/Validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import styles from "../Common/FormControls/formControls.module.css"
import Input from "antd/es/input/Input";
import S from './login.module.css'
import { Button } from "antd";
const maxLength25 = maxLengthCreator(25)
const maxLength12 = maxLengthCreator(12)

const Fields = ({
    names,
    subscription,
    fieldsState = {},
    children,
    originalRender
}) => {
    if (!names.length) {
        return (originalRender || children)(fieldsState);
    }
    const [name, ...rest] = names;
    return (
        <Field name={name} subscription={subscription}>
            {fieldState => (
                <Fields
                    names={rest}
                    subscription={subscription}
                    originalRender={originalRender || children}
                    fieldsState={{ ...fieldsState, [name]: fieldState }}
                />
            )}
        </Field>
    );
};
const Login2 = (props) => {
    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)
    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div>
        <h1>Страница логина</h1>
        <Form
            onSubmit={onSubmit}
            initialValues={{ rememberMe: false }}
            // validate={required}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div> <Field name={'email'} fieldType={Input} placeholder={"Login"} component={FormCreate} validate={(required, maxLength22)} /></div>
                    <div> <Field name={'password'} type={'password'} fieldType={Input} placeholder={"Password"} component={FormCreate} validate={(required, maxLength22)} /> </div>
                    <div> <Field name={'rememberMe'} type={'checkbox'} fieldType={'input'} component={FormCreate} /> Remember me</div>
                    {props.error && <div className={styles.formSummaryError}> {props.error} </div>}
                    <div> <button className={S.btn} type={"submit"} disabled={submitting || pristine}>Войти</button> </div>
                    <div><label style={{ color: 'red' }}>{props.loginError}</label></div>
                </form>
            )} />
    </div>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    loginError: state.auth.error
})
export default connect(mapStateToProps, { login })(Login2);