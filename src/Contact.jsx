import React, { useState } from "react";

const Contact = () => {
    const [data, setdata] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;

        setdata((preVal) => {
            return{
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone no is ${data.phone}. My email is ${data.email}. My message is ${data.msg}.`);

    }
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact US </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
  <label for="" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Shahzad"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="03074218066"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label" name="msg" value={data.msg} onChange={InputEvent}>Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;