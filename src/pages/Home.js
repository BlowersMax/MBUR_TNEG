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
                <p>The purpose of this website is to collect information for <span className='fancyText'>Totally Not El Grupo Youth Cycling</span>.
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
                            <label className='homeFAQHeader'>Your Relation to Totally Not El Grupo Youth Cycling</label>
                            <div role='group'>
                                <label> <Field type='radio' name='relation' value="Employee"/>Employee</label>
                                <label> <Field type='radio' name='relation' value="Member of Organization"/>Participant of Organization</label>
                                <label> <Field type='radio' name='relation' value="Member of Public"/>Member of General Public</label>
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