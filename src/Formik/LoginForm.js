import { useFormik } from "formik";


const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('Form Submitted', values);
        }
    })
    return (
        <>
            <div className="LoginForm">
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" id="name"
                        value={formik.values.name} onChange={formik.handleChange}></input>

                    <label>Email</label>
                    <input type="email" name="email" id="email"
                        value={formik.values.email} onChange={formik.handleChange}></input>

                    <label>Password</label>
                    <input type="password" name="password" id="password"
                        value={formik.values.password} onChange={formik.handleChange}></input>

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}


export default LoginForm;