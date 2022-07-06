import './home.sass'
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";

const Home = () => {
    const navigate = useNavigate()

    const handleForm = (values) => {
        navigate("/onboarding", {state: {values}})
        console.log("Submit:" + JSON.stringify(values))
    }

    return (
        <div className='homeContainer'>
            <div>
                <h2>Hello & Welcome to The <span className='fancyText'>Max Blowers User Research Website</span>.</h2>
                <p>The purpose of this website is to collect information regarding <span className='fancyText'>users preferred user interface</span>.
                </p>
                <h3 className='homeFAQHeader'>Before you begin, I would like to get to know a little bit about you.</h3>
                <Formik initialValues={{fN: '', lN: '', email: '', relation: ''}} onSubmit={(values) => {
                    handleForm(values)
                }}>
                    <Form>
                        <div className='Form'>
                            <label className='homeFAQHeader'>Your Name</label>
                            <div className='nameForm'>
                                <Field className='nameFormInput' id='fN' name='fN' placeholder='First Name'/>
                                <Field className='nameFormInput' id='lN' name='lN' placeholder='Last Name'/>
                            </div>
                            <label className='homeFAQHeader'>Some Contact Information</label>
                            <Field className='input' id='email' name='email' placeholder='name@domain.com'/>
                            <div className='radioGroupWrapper'>
                                <label className='homeFAQHeader'>What do you <span
                                    className='fancyText'>PRIMARILY</span> use websites for?</label>
                                <div role='group' className='radioGroup'>
                                    <label> <Field type='radio' name='relation' value="ecommerce"/>Shopping</label>
                                    <label> <Field type='radio' name='relation' value="browsing"/>Gathering
                                        Information / Research</label>
                                    <label> <Field type='radio' name='relation' value="media"/>Using Social Media /
                                        Watching
                                        Shows</label>
                                    <label>Other (please specify)</label>
                                    <Field className='otherInput' id='relation' name='relation'
                                           placeholder='Please Specify Other'/>
                                </div>
                            </div>
                            <button className='button' type='submit'>Continue ></button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Home